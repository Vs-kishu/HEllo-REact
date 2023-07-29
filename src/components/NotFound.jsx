import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return <div>not found</div>;
};

export default NotFound;
