import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListKhoaHocDk from "../../Pages/UserProfile/ListKhoaHocDk";

export default function DanhSachKhoaHocDk() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row mb-5">
        <div className="col-sm-12 ml-5 title_text--edit">
          <div className="row">
            {/* <i className="fa fa-user-edit"></i> */}
            <h1>Các khóa học đã đăng ký</h1>
          </div>
        </div>
      </div>

      <div className="row mr-0 khoaHocDk">
        <ListKhoaHocDk />
      </div>
    </>
  );
}
