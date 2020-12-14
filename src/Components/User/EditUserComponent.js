import React from "react";
import EditProfile from "../../Pages/UserProfile/EditProfile";

export default function EditUserComponent() {
  return (
    <>
      <div className="row mb-5">
        <div className="col-sm-12 col-lg-6 ml-5 title_text--edit">
          <div className="row">
            {/* <i className="fa fa-user-edit"></i> */}
            <h1>Chỉnh sửa tài khoản</h1>
          </div>
        </div>
      </div>

      <div className="row mr-0 profile">
        <EditProfile />
      </div>
    </>
  );
}
