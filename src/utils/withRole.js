import React from "react";
import { TokenService } from "./token.service";

const withRole = (Component, requiredRoles = []) => {
  return (props) => {
    const userRoles = TokenService.getUserRoles() || [];
    const hasAccess =
      requiredRoles.length === 0 ||
      userRoles.some((role) => requiredRoles.includes(role));
    // console.log(hasAccess);

    if (!hasAccess) {
      console.log("Access denied, hiding component.");
      //   return null;
    }

    console.log("Access granted, rendering component.");
    return <Component {...props} />;
  };
};

export default withRole;
