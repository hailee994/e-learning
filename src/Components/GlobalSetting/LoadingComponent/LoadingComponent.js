import React from "react";
import { useSelector } from "react-redux";

export default function LoadingComponent() {
  const { loading } = useSelector((state) => state.LoadingReducer);

  if (!loading) {
    return (
      <div className="bgLoading">
        <img src="./public/img/loading/loading2.gif" />
      </div>
    );
  } else {
    return "";
  }
}
