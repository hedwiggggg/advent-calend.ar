type Matrix3_3 = [
  number, number, number,
  number, number, number,
  number, number, number,
];

type Matrix4_4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];

type Vector3 = [number, number, number]

// Compute the adjugate of m
type Adj = ( matrix: Matrix3_3) => Matrix3_3;
const adj: Adj = (
  (m) => [
    m[4]*m[8]-m[5]*m[7], m[2]*m[7]-m[1]*m[8], m[1]*m[5]-m[2]*m[4],
    m[5]*m[6]-m[3]*m[8], m[0]*m[8]-m[2]*m[6], m[2]*m[3]-m[0]*m[5],
    m[3]*m[7]-m[4]*m[6], m[1]*m[6]-m[0]*m[7], m[0]*m[4]-m[1]*m[3],
  ]
)

// multiply two matrices
type MultMM = (a: Matrix3_3, b: Matrix3_3) => Matrix3_3;
const multmm: MultMM = (a, b) => {
  let c: Matrix3_3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i !== 3; ++i) {
    for (let j = 0; j !== 3; ++j) {
      let cij = 0;

      for (let k = 0; k !== 3; ++k) {
        cij += a[3*i + k]*b[3*k + j];
      }

      c[3*i + j] = cij;
    }
  }

  return c;
}

// multiply matrix and vector
type MultMV = (m: Matrix3_3, v: Vector3) => Vector3;
const multmv: MultMV = (
  (m, v) => [
    m[0]*v[0] + m[1]*v[1] + m[2]*v[2],
    m[3]*v[0] + m[4]*v[1] + m[5]*v[2],
    m[6]*v[0] + m[7]*v[1] + m[8]*v[2]
  ]
);

// multiply matrix and vector
type BasisToPoints = (
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number,
  x4: number, y4: number,
) => Matrix3_3;

const basisToPoints: BasisToPoints = (
  (x1, y1, x2, y2, x3, y3, x4, y4) => {
    const m: Matrix3_3 = [
      x1, x2, x3,
      y1, y2, y3,
       1,  1,  1
    ];

    const v = multmv(adj(m), [x4, y4, 1]);

    return multmm(m, [
      v[0], 0, 0,
      0, v[1], 0,
      0, 0, v[2]
    ]);
  }
);

type General2DProjection = (
  x1s: number, y1s: number, x1d: number, y1d: number,
  x2s: number, y2s: number, x2d: number, y2d: number,
  x3s: number, y3s: number, x3d: number, y3d: number,
  x4s: number, y4s: number, x4d: number, y4d: number
) => Matrix3_3;

const general2DProjection: General2DProjection = (
  (
    x1s, y1s, x1d, y1d,
    x2s, y2s, x2d, y2d,
    x3s, y3s, x3d, y3d,
    x4s, y4s, x4d, y4d
  ) => {
    const s = basisToPoints(x1s, y1s, x2s, y2s, x3s, y3s, x4s, y4s);
    const d = basisToPoints(x1d, y1d, x2d, y2d, x3d, y3d, x4d, y4d);
    return multmm(d, adj(s));
  }
);

type Transform2d = (
  (
    w: number, h: number,
    x1: number, y1: number,
    x2: number, y2: number,
    x3: number, y3: number,
    x4: number, y4: number,
  ) => Matrix4_4
);

export const transform2d: Transform2d = (
  (w, h, x1, y1, x2, y2, x3, y3, x4, y4) => {  
    const t = general2DProjection(
      0, 0, x1, y1,
      w, 0, x2, y2,
      0, h, x3, y3,
      w, h, x4, y4,
    );
  
    for(let i = 0; i !== 9; ++i) {
      t[i] = t[i] / t[8];
    };
  
    const matrix: Matrix4_4 = [
      t[0], t[3], 0, t[6],
      t[1], t[4], 0, t[7],
      0,       0, 1,    0,
      t[2], t[5], 0, t[8]
    ];

    return matrix;
  }
);
