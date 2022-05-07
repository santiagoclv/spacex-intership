import { useQuery, useLazyQuery } from "@apollo/client";
import { Launch } from "./types/launch";
import { GET_LAUNCH, GET_LAUNCHES } from "./queries";

export const useGetLaunch = (id) => {
  const { loading, error, data } = useQuery<{ launch: Launch }, { id: string }>(
    GET_LAUNCH,
    {
      fetchPolicy: "network-only",
      nextFetchPolicy: "cache-first",
      variables: {
        id,
      },
    }
  );

  return {
    loading,
    launch: data?.launch,
    error,
  };
};

export const useLazyGetLaunches = () => {
  const [getLaunches, { loading, data, error }] = useLazyQuery<
    {
      launchesPastResult: {
        data: Array<Launch>;
        result: { totalCount: number };
      };
    },
    {
      limit: number;
      offset: number;
      find: { mission_name?: string };
    }
  >(GET_LAUNCHES, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  const launches = data?.launchesPastResult?.data;
  const totalCount = data?.launchesPastResult?.result?.totalCount ?? 0;
  const handleGetLaunches = (offset: number, limit: number, mission_name: string) => {
    getLaunches({
      variables: {
        limit,
        offset,
        find: mission_name ? { mission_name } : {},
      },
    });
  };

  return {
    getLaunches: handleGetLaunches,
    loading,
    launches,
    totalCount,
    error,
  };
};
