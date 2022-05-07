import React from "react";
import { Typography, Container, Link } from "@material-ui/core";
import { useParams } from "react-router";

import QueryResult from "../../components/query-result";
import { useGetLaunch } from "../../api/hooks";

const Launch: React.FC = () => {
  const { launchId } = useParams();
  const { launch, loading, error } = useGetLaunch(launchId);
  const date = new Date(Date.parse(launch?.launch_date_utc ?? ""));
  const formattedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <Container>
      <QueryResult
        loading={loading}
        error={error}
        data={launch}
        initialStateMessage="This launch does not exist"
      >
        <Typography variant="h2" component="h3">
          {launch?.mission_name} at {launch?.launch_site?.site_name}
        </Typography>
        <dl>
          <dt>Lunch date:</dt>
          <dd>{formattedDate}</dd>
          <dt>Rocket name:</dt>
          <dd>{launch?.rocket?.rocket_name}</dd>
        </dl>
        {launch?.links?.flickr_images[0] && (
          <img
            style={{ height: "15rem" }}
            src={launch?.links?.flickr_images[0]}
            alt={launch?.rocket?.rocket_name}
          />
        )}

        <Typography paragraph={true}>{launch?.details}</Typography>
        <Link href={launch?.links?.article_link} target="_blank">
          see more...
        </Link>
      </QueryResult>
    </Container>
  );
};

export default Launch;
