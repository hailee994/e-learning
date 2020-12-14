import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  GET_DANH_MUC_ADMIN,
  THEM_KHOA_HOC_ADMIN,
} from "../../../Redux/Constans/AdminConst";
import { USER_LOGIN } from "../../../Utils/Config";

export default function ThemKhoaHocAdmin() {
  let day = new Date();
  let dd = day.getDate();
  let mm = day.getMonth() + 1; //January is 0!

  let yyyy = day.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  day = dd + "/" + mm + "/" + yyyy;

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem(USER_LOGIN));

  const [khoaHoc, setKhoaHoc] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: {},
    maNhom: "GP05",
    ngayTao: "12/12/2020",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: user.hoTen,
  });
  const [error, setError] = useState({
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: {},
    maDanhMucKhoaHoc: "",
  });

  console.log(khoaHoc);

  const { danhMucAdmin } = useSelector((state) => state.AdminReducer);

  useEffect(() => {
    dispatch({
      type: GET_DANH_MUC_ADMIN,
    });
  }, []);

  const renderDanhMuc = () => {
    return danhMucAdmin.map((item, i) => {
      return (
        <option key={i} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    let target = e.target;

    if (target.name === "hinhAnh") {
      setKhoaHoc({ ...khoaHoc, hinhAnh: e.target.files[0] });
    } else {
      setKhoaHoc({ ...khoaHoc, [target.name]: target.value });
      // setError(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in khoaHoc) {
      form_data.append(key, khoaHoc[key]);
    }
    dispatch({
      type: THEM_KHOA_HOC_ADMIN,
      form_data,
    });
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center">THÊM KHÓA HỌC MỚI</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <div className="form-group">
              <p>Mã khóa học</p>
              <input
                className="form-control"
                name="maKhoaHoc"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <p>Tên khóa học</p>
              <input
                className="form-control"
                name="tenKhoaHoc"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <p>Danh mục khóa học</p>
              <select
                className="form-control"
                name="maDanhMucKhoaHoc"
                onChange={handleChange}
              >
                <option value="">Chọn danh mục</option>
                {renderDanhMuc()}
              </select>
            </div>

            <div className="form-group">
              <p>Ngày tạo</p>
              <input
                className="form-control"
                type="date"
                name="ngayTao"
                value={day}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <p>Mô tả</p>
              <textarea
                className="form-control"
                name="moTa"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="form-group">
              <p>Hình ảnh</p>
              <input
                type="file"
                className="form-control mb-3"
                name="hinhAnh"
                onChange={handleChange}
              />
              {/* <img
                src={khoaHoc.hinhAnh?.name}
                alt=""
                width={250}
                height={150}
              /> */}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success mx-auto">
          Thêm khóa học
        </button>
      </form>
    </div>
  );
}
