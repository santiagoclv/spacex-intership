import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const Message: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h5" component="h3">
        {content}
      </Typography>
    </Box>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
