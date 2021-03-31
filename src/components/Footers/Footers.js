import React from "react";
import { Typography } from "@material-ui/core";

function Footers() {
  return (
    <div>
      <Typography color="textSecondary">
        {" "}
        &copy; {new Date().getFullYear()} Copyright:
      </Typography>
    </div>
  );
}

export default Footers;
