import { React, useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TagContext } from "./TagsBox";
import CloseIcon from "@mui/icons-material/Close";

function Tag({ hover }) {
  const { stag, index, removeTag } = useContext(TagContext);
  return (
    <Grid
      item
      xs={12}
      sx={{
        borderRadius: 2,
        backgroundColor: "#eee",
        padding: "0.2em",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: "0.9em",
            }}
          >
            {stag}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            sx={{
              opacity: hover === true ? "100%" : "80%",
            }}
            onClick={() => removeTag(index)}
            aria-label="remove"
            type="button"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Tag;
