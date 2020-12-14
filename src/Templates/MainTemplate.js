import { useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import Header from "../Components/Header/Header";

export const MainTemplate = (props) => {
  let { Component, ...restParam } = props;
  const { danhMuc } = useSelector((state) => state.ClientReducer);

  const renderDanhMucHeader = () => {
    return danhMuc.map((item, i) => {
      return (
        <li className="list-group-item" key={i}>
          <NavLink exact to={"/danhmuc/" + item.maDanhMuc}>
            {item.tenDanhMuc}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <div className="container khoaHocDM">
              <div className="row row1">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">{renderDanhMucHeader()}</ul>
                </div>
                <div className="col-sm-12 col-lg-9 mt-sm-3 khoaHocDM">
                  <Component {...propsRoute} />
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
