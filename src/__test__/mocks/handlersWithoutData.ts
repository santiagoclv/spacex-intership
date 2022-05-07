import { graphql } from 'msw';

const handlersWithoutData = [
  graphql.query('get_launches', (req, res, ctx) => {
    return res(
      ctx.data({
        launchesPastResult: {
          result: {
            totalCount: 0
          },
          data: []
        }
      }),
    )
  }),
];

export default handlersWithoutData;
