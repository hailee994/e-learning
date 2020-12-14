import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";

export const FormTemplate = (props) => {
  let { Component, ...resParams } = props;

  return (
    <Route
      {...resParams}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
