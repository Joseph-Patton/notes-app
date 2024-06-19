import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles/AppStyle";
import MainUI from "./Components/MainUI";

//import { useStyles } from "styles/AppStyle";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" className="notes">
        <MainUI />
      </Grid>
    </div>
  );
}
export default App;
