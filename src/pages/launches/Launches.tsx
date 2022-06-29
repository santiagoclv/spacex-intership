import {
  Button,
  Grid,
  Container,
  TablePagination,
  InputLabel,
  FormControl,
  Input,
  FormHelperText,
} from "@material-ui/core";
import React, { useState } from "react";
import ContentTable from "../../components/content-table";
import QueryResult from "../../components/query-result";

import { useLazyGetLaunches } from "../../api/hooks";

const ROWS_PER_PAGE_DEFAULT = 30;
const ROW_PER_PAGE_OPTIONS = [30, 50, 100];
const OFFSET_DEFAULT = 0;

const Launches: React.FC = () => {
  const { getLaunches, loading, launches, error, totalCount } =
    useLazyGetLaunches();
  const [paginatorStatus, setPaginatorStatus] = useState({
    page: OFFSET_DEFAULT,
    rowsPerPage: ROWS_PER_PAGE_DEFAULT,
  });
  const [inputText, setInputText] = useState("");

  const onPageChange = (e, page) => {
    const rowsPerPage = paginatorStatus.rowsPerPage;
    setPaginatorStatus({
      rowsPerPage,
      page,
    });
    getLaunches(page * rowsPerPage, rowsPerPage, inputText);
  };

  const onRowsPerPageChange = ({ target: { value: rowsPerPage } }) => {
    setPaginatorStatus({
      page: 0,
      rowsPerPage,
    });
    getLaunches(0, rowsPerPage, inputText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getLaunches(0, paginatorStatus.rowsPerPage, inputText);
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item md={12} xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item md={6} xs={12}>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="filter">Filter by mission name.</InputLabel>
                  <Input
                    id="filter"
                    aria-describedby="filter-helper-text"
                    value={inputText}
                    onChange={({ target: { value } }) => setInputText(value)}
                  />
                  <FormHelperText id="filter-helper-text">
                    Filter by mission name.
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item md={3} xs={12}>
                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth
                  color="primary"
                  variant="contained"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={12} xs={12}>
          <QueryResult
            loading={loading}
            error={error}
            data={launches}
            emptyMessage="You search has no results"
            initialStateMessage="Please provide a search option and click in the search button"
          >
            <ContentTable launches={launches} />
            <TablePagination
              rowsPerPageOptions={ROW_PER_PAGE_OPTIONS}
              component="div"
              count={totalCount}
              rowsPerPage={paginatorStatus.rowsPerPage}
              page={paginatorStatus.page}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
            />
          </QueryResult>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Launches;
