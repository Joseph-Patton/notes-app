import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Tag from "./Tag";
function TagContainer() {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Tag hover={hover} />
    </Grid>
  );
}
export default TagContainer;
