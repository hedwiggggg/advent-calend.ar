---
inject: true
to: src/days/index.ts
after: // export days
skip_if: <%= Name %>
force: true
---
  <%= h.hash(name) %>: () => import("./<%= name %>"),