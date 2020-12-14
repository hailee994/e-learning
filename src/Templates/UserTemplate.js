import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import { LAY_THONG_TIN_USER } from "../Redux/Constans/ClientConst";

export const UserTemplate = (props) => {
  let { Component, ...restParam } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LAY_THONG_TIN_USER,
    });
  }, []);

  const { thongTinUser } = useSelector((state) => state.ClientReducer);

  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <div className="container userProfile mt-5">
              <div className="row">
                <div className="col-sm-12 col-lg-4 text_name">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <img src="./public/img/nobody_m.256x256.jpg" alt="" />
                        <h2 className="ml-3">
                          <NavLink exact to="/thongtinhocvien">
                            {thongTinUser.hoTen}
                          </NavLink>
                        </h2>
                        <br />

                        <div className="col-12 pl-0 pt-5 edit_setting">
                          <NavLink
                            className="edit_link text-dark"
                            exact
                            to="/chinhsuathongtin"
                          >
                            <h5>Chỉnh sửa thông tin tài khoản</h5>
                          </NavLink>

                          <NavLink
                            className="edit_link text-dark"
                            exact
                            to="/khoahocdadangky"
                          >
                            <h5>Khóa học đã đăng ký</h5>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-8 edit_show">
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
