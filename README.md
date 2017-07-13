This repository is to demonstrate a bug in [TypeORM](https://github.com/typeorm/typeorm) when using in conjunction with PostgreSQL.

When using the `createConnection` method to establish a connection, successful connections go through. But failed connections cannot be caught using `catch` as this program demonstrates. Instead, a `UnhandledPromiseRejectionWarning` is thrown.

```
(node:714) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: connect ECONNREFUSED 127.0.0.1:5432
(node:714) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

If `pg` is swapped for `mysql`, the `catch` block works perfectly.

# Package versions

- pg: "^6.4.0",
- reflect-metadata: "^0.1.10",
- typeorm: "0.1.0-alpha.31"
