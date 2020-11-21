---
inject: true
to: src/gifts/index.ts
after: // export gifts
skip_if: <%= Name %>
force: true
---
  <%= h.hash(name) %>: () => import("./<%= name %>"),