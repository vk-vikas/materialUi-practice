import { Typography, Button, Container } from "@material-ui/core";
import HamburgerDrawer from "./components/HamburgerDrawer";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <HamburgerDrawer/>
      <Typography variant="h1" align="center">
        hello
      </Typography>
      <div className={classes.container}>
        <Container maxWidth="sm" align="center">
          <Typography variant="h4">This is the title </Typography>
          <Typography variant="h6">
            This is the the body of this section.{" "}
          </Typography>
          <div className={classes.buttonGroup}>
            <Button variant="contained" color="primary">
              edit
            </Button>
            <Button variant="contained" color="secondary">
              submit
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
