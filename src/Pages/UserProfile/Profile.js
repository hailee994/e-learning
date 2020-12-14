import React from "react";
import { NavLink } from "react-router-dom";

export default function Profile(props) {
  return (
    <>
      <div className="col-12 ml-0 pl-0">
        <h4>Thông tin cá nhân</h4>
        <hr noshade="true" />
      </div>

      <div className="col-12 ml-0 mt-2 pl-0 hide">
        <h5 className="ml-lg-2">Họ và tên</h5>
        <p className="ml-lg-4">{props.thongTinUser.hoTen}</p>
        <hr noshade="true" />
      </div>

      <div className="col-12 ml-0 mt-2 pl-0">
        <h5 className="ml-lg-2">Tài Khoản</h5>
        <p className="ml-lg-4">{props.thongTinUser.taiKhoan}</p>
        <hr noshade="true" />
      </div>

      <div className="col-12 ml-0 mt-2 pl-0">
        <h5 className="ml-lg-2">Email</h5>
        <p className="ml-lg-4">{props.thongTinUser.email}</p>
        <hr noshade="true" />
      </div>

      <div className="col-12 ml-0 mt-2 pl-0">
        <h5 className="ml-lg-2">Số điện thoại</h5>
        <p className="ml-lg-4">{props.thongTinUser.soDT}</p>
        <hr noshade="true" />
      </div>
      <NavLink
        className="text-dark mx-auto navLink mb-5"
        exact
        to="/chinhsuathongtin"
      >
        Cập nhật thông tin >>
      </NavLink>
      <NavLink
        className="text-dark mx-auto navLink mb-5"
        exact
        to="/khoahocdadangky"
      >
        Khóa học đã đăng ký >>
      </NavLink>
    </>
  );
}
