import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Launch } from "../../api/types/launch";

const headers = ["Mission", "Rocket", "Launch Site", "Launch date"];

const ContentTable: React.FC<{ launches: Array<Launch> | void }> = ({
  launches,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell key={idx} align="right">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {launches?.map((launch) => (
            <TableRow key={launch?.id}>
              <TableCell align="right">
                <Avatar
                  alt={launch?.mission_name}
                  src={launch?.links?.flickr_images[0]}
                />
                <Link to={`/launch/${launch?.id}`}>{launch?.mission_name}</Link>
              </TableCell>
              <TableCell align="right">{launch?.rocket?.rocket_name}</TableCell>
              <TableCell align="right">
                {launch?.launch_site?.site_name}
              </TableCell>
              <TableCell align="right">{launch?.launch_date_utc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ContentTable.propTypes = {
  launches: PropTypes.array,
};

export default ContentTable;
