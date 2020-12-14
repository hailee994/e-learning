import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Profile from "../../Pages/UserProfile/Profile";

export default function UserProfileComponent() {
  const { thongTinUser } = useSelector((state) => state.ClientReducer);

  return (
    <>
      <div className="row ml-4 mb-5 text_profile">
        <div className="col-12 p-sm-0">
          <div className="row">
            <i className="fa fa-id-card mr-3"></i>
            <h1>Thông tin tài khoản</h1>
          </div>
        </div>
      </div>

      <div className="row ml-lg-2 profile">
        <Profile thongTinUser={thongTinUser} />
      </div>
    </>
  );
}
