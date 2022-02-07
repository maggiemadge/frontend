import React from "react";
// import { Button } from "@material-ui/core";
// import { useStyles } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import AgencyLandingPage from "demos/AgencyLandingPage";

function HomeComponent() {
  const history = useNavigate();
  // const classes = useStyles();

  const gotToDashboard = (e, url) => {
    history(url);
  };

  return (
    <>
      <AgencyLandingPage />
    </>
  );
}
export default HomeComponent;
