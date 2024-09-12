import { React, useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TagContext } from "./TagsBox";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Tag({ hover }) {
  const { stag, index, removeTag } = useContext(TagContext);
  return (
    <>
      <Grid
        container
        justifyContent={"flex-end"}
        sx={{
          borderRadius: 2,
          backgroundColor: "#eee",
          padding: "0.4em",
          minWidth: "3em",
        }}
      >
        <Grid item>
          <Typography
            //noWrap
            align={"center"}
            sx={{
              fontSize: "0.9em",
            }}
          >
            {stag}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              opacity: hover === true ? "100%" : "0%",
              maxHeight: "0.1em",
              maxWidth: "0.1em",
            }}
            onClick={() => removeTag(index)}
            aria-label="remove"
            type="button"
          >
            <CancelOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
export default Tag;
