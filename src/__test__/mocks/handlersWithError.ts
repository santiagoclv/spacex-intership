import { graphql } from 'msw';

const handlersOneResult = [
  graphql.query('get_launches', (req, res, ctx) => {
    return res(
      ctx.errors([{message: 'Things went wrong doing blah blah blah'}])
    )
  }),
  graphql.query('get_launch', (req, res, ctx) => {
    return res(
      ctx.errors([{message: 'Things went wrong doing blah blah blah'}])
    )
  }),
];

export default handlersOneResult;
