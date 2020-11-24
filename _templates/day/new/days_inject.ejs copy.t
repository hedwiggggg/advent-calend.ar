---
inject: true
to: src/days/index.ts
after: "const days: Days = {"
skip_if: "<%= hashedName %>\\:"
force: true
---
  <%= hashedName %>: () => import('./<%= name %>'),