---
inject: true
to: src/days/index.ts
after: "const daysData: DaysData = \\["
skip_if: "__hash: '<%= h.hash(name) %>',"
force: true
---
  {
    __hash: '<%= h.hash(name) %>',
    __name: '<%= name %>',
    __qrCode: () => import('./<%= name %>/qr-code.png'),
  },