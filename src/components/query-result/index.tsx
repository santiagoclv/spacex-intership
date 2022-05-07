import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import Message from "../message";
import classes from "./query-result.module.css";

const QueryResult = ({
  loading,
  error,
  data,
  children,
  emptyMessage,
  initialStateMessage,
}) => {
  if (!loading && !error && !data) {
    return <Message content={initialStateMessage} />;
  }
  if (!!error) {
    return (
      <Message content={error?.message ?? "There is an unexpected error"} />
    );
  }
  if (loading) {
    return (
      <div className={classes.QueryResult}>
        <CircularProgress size={75} />
      </div>
    );
  }
  if (!data || data?.length === 0) {
    return <Message content={emptyMessage} />;
  }
  if (data) {
    return children;
  }
};

QueryResult.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  emptyMessage: PropTypes.string,
  initialStateMessage: PropTypes.string,
};

export default QueryResult;
