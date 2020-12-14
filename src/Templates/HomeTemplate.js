import { Route } from "react-router-dom";
import FooterHome from "../Components/Footer/FooterHome";
import LoadingComponent from "../Components/GlobalSetting/LoadingComponent/LoadingComponent";
import HeaderHome from "../Components/Header/HeaderHome";

export const HomeTemplate = (props) => {
  let { Component, ...restParmas } = props;

  return (
    <Route
      {...restParmas}
      render={(propsRoute) => {
        return (
          <>
            <HeaderHome />
            <LoadingComponent />
            <Component {...propsRoute} />
            <FooterHome />
          </>
        );
      }}
    />
  );
};
