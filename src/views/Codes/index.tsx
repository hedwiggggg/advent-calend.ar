import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import days from 'src/days';
import { DayImport, Day } from 'src/days/types';

const daysArray = shuffle(Object.values(days));

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle<T>(a: Array<T>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

function RenderDay({ importDay }: { importDay: () => DayImport }) {
  const [$Day, setThe$Day] = useState<typeof Day>();

  useEffect(() => {
    importDay().then((dayImport) => {
      setThe$Day(() => dayImport.default);
    })
  }, [importDay]);

  return (
    <div>
      <img src={$Day?.qrCode} alt="qr-code" />
      <code>{ $Day?.name }</code>
      <Link to={`/open/${$Day?.hash}`}><code>{ $Day?.hash }</code></Link>
    </div>
  );
}

function Codes() {
  return (
    <div className={styleDayssContainer}>
      { daysArray.map(($day, i) => <RenderDay key={i} importDay={$day} />) }
    </div>
  );
}

const styleDayssContainer = css`
  position: relative;
  float: left;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  div {
    position: relative;
    float: left;

    width: 33.33%;
    min-width: 33.33%;
    max-width: 33.33%;

    border: 2.5px solid black;
    box-sizing: border-box;

    break-inside: avoid;

    code, span {
      font-size: 18px;

      @media print {
        font-size: 48px;
      }

      display: block;
      width: 100%;
      text-align: center;
      border-top: 2px solid black;
    }

    img {
      max-width:100%;
    }
  }
`;

export default Codes;
