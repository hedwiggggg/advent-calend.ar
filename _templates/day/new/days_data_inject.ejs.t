---
inject: true
to: src/days/index.ts
after: "const daysData: DaysData = \\["
skip_if: "__hash: '<%= hashedName %>',"
force: true
---
  {
    __hash: '<%= hashedName %>',
    __name: '<%= name %>',
    __qrCode: () => import('./<%= name %>/qr-code.png'),
  },