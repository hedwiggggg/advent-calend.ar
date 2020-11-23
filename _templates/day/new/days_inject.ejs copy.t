---
inject: true
to: src/days/index.ts
after: "const days: Days = {"
skip_if: "<%= h.hash(name) %>\\:"
force: true
---
  <%= h.hash(name) %>: () => import('./<%= name %>'),