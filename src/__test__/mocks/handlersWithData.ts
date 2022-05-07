import { graphql } from 'msw';
import launchesData from '../fixtures/launches';

const handlersOneResult = [
  graphql.query('get_launches', (req, res, ctx) => {
    const { limit, offset, find } = req?.body?.variables;
    const data = launchesData.data;
    const totalCount = launchesData.data.launchesPastResult.result.totalCount;
    let dataSlice = data.launchesPastResult.data;
    const missionName = find.mission_name;
    if ( missionName ){
      dataSlice = dataSlice.filter(({mission_name}) => mission_name.toLowerCase().includes(missionName.toLowerCase()));
    }
    dataSlice = dataSlice.slice(offset, offset + limit);

    return res(
      ctx.data({
        launchesPastResult: {
          result: {
            totalCount
          },
          data: dataSlice 
        }
      }),
    )
  }),
  graphql.query('get_launch', (req, res, ctx) => {
    const { id } = req?.body?.variables;
    const data = launchesData.data.launchesPastResult.data.find(launch => launch.id === id) ?? null;
  
    return res(
      ctx.data({
        launch: data
      }),
    )
  }),
];

export default handlersOneResult;
