import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LAY_DANH_MUC } from "../../Redux/Constans/ClientConst";
import { ACCESSTOKEN, USER_LOGIN } from "../../Utils/Config";
import { history } from "../../Utils/history";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LAY_DANH_MUC,
    });
  }, []);

  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  const { danhMuc } = useSelector((state) => state.ClientReducer);

  const renderDanhMucHeader = () => {
    return danhMuc.map((item, i) => {
      return (
        <NavLink
          className="dropdown-item"
          to={"/danhmuc/" + item.maDanhMuc}
          key={i}
        >
          {item.tenDanhMuc}
        </NavLink>
      );
    });
  };

  const renderStatus = () => {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    if (userLogin !== null) {
      return (
        <>
          <NavLink
            className="text-light mr-3"
            exact
            to={
              userLogin.maLoaiNguoiDung === "HV"
                ? "/thongtinhocvien"
                : "/admin/quanlynguoidung"
            }
          >
            {"Xin chào, " + userLogin.hoTen}
          </NavLink>
          <a className="text-light" onClick={handleLogout}>
            Đăng xuất
          </a>
        </>
      );
    } else {
      return (
        <div className="btn_form">
          <NavLink
            className="nav_form text-light mr-3 my-2 my-sm-0"
            exact
            to="/dangnhap"
          >
            Đăng nhập
            <hr noshade="true" />
          </NavLink>
          <NavLink
            className="nav_form text-light my-2 my-sm-0"
            exact
            to="/dangky"
          >
            Đăng ký
            <hr noshade="true" />
          </NavLink>
        </div>
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESSTOKEN);
    history.push("/");
  };

  return (
    <header className="mainHead">
      <nav className="navbar navbar-expand-sm navbar-light active">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h2>CyberLearn</h2>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0 ml-auto mr-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Trang chủ
                  <hr noshade="true" />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Khóa học
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  {renderDanhMucHeader()}
                </div>
              </li>
            </ul>

            {renderStatus()}

            {/* {userLogin === "" ? (
              <div className="btn_form">
                <NavLink
                  className="nav_form text-light mr-3 my-2 my-sm-0"
                  exact
                  to="/dangnhap"
                >
                  Đăng nhập
                  <hr noshade="true" />
                </NavLink>
                <NavLink
                  className="nav_form text-light my-2 my-sm-0"
                  exact
                  to="/dangky"
                >
                  Đăng ký
                  <hr noshade="true" />
                </NavLink>
              </div>
            ) : (
              <>
                <a className="text-light mr-3">
                  {"Xin chào, " + userLogin.hoTen}
                </a>
                <a className="text-light" onClick={handleLogout}>
                  Đăng xuất
                </a>
              </>
            )} */}
          </div>
        </div>
      </nav>
    </header>
  );
}
