import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DANG_KY_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
} from "../../Redux/Constans/ClientConst";
import { USER_LOGIN } from "../../Utils/Config";

export default function KhoaHoc(props) {
  const dispatch = useDispatch();
  let khoaHoc = props.match.params.makhoahoc;

  useEffect(() => {
    dispatch({
      type: LAY_CHI_TIET_KHOA_HOC,
      khoaHoc,
    });
  }, [khoaHoc]);

  const { chiTietKhoaHoc } = useSelector((state) => state.ClientReducer);
  const thongTinUser = JSON.parse(localStorage.getItem(USER_LOGIN));

  const handleDangKyKhoaHoc = () => {
    let tkDangKy = {};
    tkDangKy.taiKhoan = thongTinUser.taiKhoan;
    tkDangKy.maKhoaHoc = chiTietKhoaHoc.maKhoaHoc;

    dispatch({
      type: DANG_KY_KHOA_HOC,
      tkDangKy,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <img
            src={chiTietKhoaHoc?.hinhAnh}
            alt=""
            style={{ width: "100%" }}
            className="img-fluid"
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{chiTietKhoaHoc?.tenKhoaHoc}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {chiTietKhoaHoc.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Lượt xem: {chiTietKhoaHoc?.luotXem}
              </h6>
              <button
                className="btn btn-outline-success"
                onClick={handleDangKyKhoaHoc}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 mt-5">
          <h1 className="mb-3">Khóa học {chiTietKhoaHoc?.tenKhoaHoc}</h1>
          <p>{chiTietKhoaHoc?.moTa}</p>
        </div>
      </div>
    </div>
  );
}
