import React, { useState } from "react";

import AuthNavigator from "./AuthNavigator";
import BottomTypeNavigation from "./BottomTypeNavigation";
import { useSelector } from "react-redux";

export default () => {
  const userId = useSelector(state => state.auth.userId)
  return <>{userId ? <BottomTypeNavigation /> : <AuthNavigator />}</>;
};
