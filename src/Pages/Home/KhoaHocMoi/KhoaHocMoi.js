import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector } from "react-redux";
import { history } from "../../../Utils/history";
import { NavLink } from "react-router-dom";

export default function KhoaHocMoi() {
  const { dsKhoaHoc } = useSelector((state) => state.ClientReducer);

  const renderKhoaHoc = () => {
    return dsKhoaHoc.slice(0, 6).map((item, i) => {
      return (
        <div className="col-sm-2 col-md-4 mt-3" key={i}>
          <div className="card item">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
              <NavLink
                className="btn btn-success btn-see"
                to={"/khoahoc/" + item.maKhoaHoc}
              >
                Xem thêm
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container khoaHocMoi mb-5">
      <h2 className="text-center text">KHÓA HỌC MỚI</h2>

      <div className="row">{renderKhoaHoc()}</div>
    </div>
  );
}
