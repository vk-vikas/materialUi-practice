import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles";
import useStyles from "../styles";

const HamburgerDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <MenuIcon onClick={() => setisDrawerOpen(true)}></MenuIcon>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <div className={classes.Drawer}>
          <h6>loremsdfasfafasfa</h6>
        </div>
      </Drawer>
    </div>
  );
};

export default HamburgerDrawer;
