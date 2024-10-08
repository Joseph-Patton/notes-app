import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function SearchBar({ searchBarInput, setSearchBarInput }) {
  const inputHandler = (e) => {
    setSearchBarInput(e.target.value);
  };

  const clearInput = () => {
    setSearchBarInput("");
  };

  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid",
        borderColor: "border.main",
        fontSize: "1em",
        borderRadius: 2,
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchBarInput}
        onChange={inputHandler}
      />
      <IconButton onClick={clearInput} className="materialBtn">
        <ClearIcon />
      </IconButton>
    </Box>
  );
}
export default SearchBar;
