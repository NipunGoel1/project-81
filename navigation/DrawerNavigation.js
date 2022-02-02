import React from "react";
import { CreateDrawerNavigator } from "react-navigation/drawer";
import TabNavogator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawernaivgator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigation>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigation>
  );
};
export default DrawerNavigator;
