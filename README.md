## Next authentication

```
pnpm install next-auth
```


### `@/lib/auth`

Handle auth configuration like providers, etc.

### `@/lib/session`

Get current user by server side.
If using this remember:
*   Page must be async function
*   `const user = await getCurrentUser();`

### Auth Provider

When client side auth is needed, use this, if not, don't.

### Middleware

Redirects to protected route when logged in. Check [Taxonomy](https://github.com/shadcn/taxonomy) for more middleware examples.

### References

* [Taxonomy Github by shadcn](https://github.com/shadcn/taxonomy)
* [Get server session](https://next-auth.js.org/configuration/nextjs)
* [You can easily protect client and server side rendered pages and API routes with NextAuth.js.](https://next-auth.js.org/tutorials/securing-pages-and-api-routes)
