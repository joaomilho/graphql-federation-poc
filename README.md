# Fed

The simplest possible example of federated gql.

```sh
yarn
yarn start
open http://localhost:4000/
```

A query to run:

```graphql
{
  products{
    id
    name
    labels
  }
}
```