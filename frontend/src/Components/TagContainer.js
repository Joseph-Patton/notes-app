import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Tag from "./Tag";
function TagContainer({ tag }) {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Tag hover={hover} />
    </Grid>
  );
}
export default TagContainer;
