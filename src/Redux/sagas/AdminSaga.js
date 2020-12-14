import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ACCESSTOKEN, DOMAIN } from "../../Utils/Config";
import {
  DANH_SACH_KHOA_HOC_ADMIN_REDUCER,
  DANH_SACH_NGUOI_DUNG_ADMIN_REDUCER,
  GET_DANH_MUC_ADMIN,
  GET_DANH_MUC_ADMIN_REDUCER,
  GET_DANH_SACH_KHOA_HOC_ADMIN,
  GET_DANH_SACH_NGUOI_DUNG_ADMIN,
  GET_THONG_TIN_USER_ADMIN,
  THEM_KHOA_HOC_ADMIN,
  THEM_NGUOI_DUNG_ADMIN,
  THONG_TIN_USER_ADMIN_REDUCER,
  XOA_KHOA_HOC_ADMIN,
  XOA_NGUOI_DUNG_ADMIN,
} from "../Constans/AdminConst";
import noti from "sweetalert2";
import { history } from "../../Utils/history";

function* getDsNguoiDungAdmin() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05`,
      });
    });
    yield put({
      type: DANH_SACH_NGUOI_DUNG_ADMIN_REDUCER,
      dsNguoiDung: data,
    });
  } catch (err) {
    console.log(err.response.data);
    noti.fire(
      "Thông báo",
      "Lấy danh sách người dùng không thành công",
      "error"
    );
  }
}

function* xoaNguoiDung(taiKhoan) {
  console.log(taiKhoan);
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url:
          DOMAIN +
          `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan.taiKhoan}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    noti.fire("Thông báo", "Xóa người dùng thành công", "success");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Xóa người dùng không thành công", "error");
  }
}

function* themNguoiDung(taiKhoan) {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: taiKhoan.user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    noti.fire("Thông báo", "Thêm người dùng thành công", "success");
    history.push("/admin/quanlynguoidung");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Thêm người dùng thất bại", "error");
  }
}

function* latThongTinUserAdmin(taiKhoan) {
  console.log(taiKhoan.user);
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/ThongTinNguoiDung`,
        method: "POST",
        data: taiKhoan.user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    dispatchEvent({
      type: THONG_TIN_USER_ADMIN_REDUCER,
      thongTinUserAdmin: data,
    });
    // history.push("/admin/quanlynguoidung");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Lấy thông tin người dùng thất bại", "error");
  }
}

function* getDsKhoaHocAdmin() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05`,
      });
    });
    yield put({
      type: DANH_SACH_KHOA_HOC_ADMIN_REDUCER,
      dsKhoaHocAdmin: data,
    });
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Lấy danh sách khóa học không thành công", "error");
  }
}

function* xoaKhoaHocAdmin(maKh) {
  console.log(maKh);
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKh.maKh}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    noti.fire("Thông báo", "Xóa khóa học thành công", "success");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Xóa khóa học không thành công", "error");
  }
}

function* layDanhMucAdmin() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
        method: "GET",
      });
    });
    yield put({
      type: GET_DANH_MUC_ADMIN_REDUCER,
      danhMucAdmin: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
}

function* themKhoaHocAdmin(form) {
  // console.log(form.form_data, "maKhaoHoc");
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
        method: "POST",
        data: form.form_data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    noti.fire("Thông báo", "Thêm khóa học thành công", "success");
    history.push("/admin/quanlynguoidung");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Thêm khóa học thất bại", "error");
  }
}

export function* adminActionApi() {
  yield takeEvery(GET_DANH_SACH_NGUOI_DUNG_ADMIN, getDsNguoiDungAdmin);
  yield takeEvery(XOA_NGUOI_DUNG_ADMIN, xoaNguoiDung);
  yield takeEvery(THEM_NGUOI_DUNG_ADMIN, themNguoiDung);
  yield takeEvery(GET_THONG_TIN_USER_ADMIN, latThongTinUserAdmin);
  yield takeEvery(GET_DANH_SACH_KHOA_HOC_ADMIN, getDsKhoaHocAdmin);
  yield takeEvery(XOA_KHOA_HOC_ADMIN, xoaKhoaHocAdmin);
  yield takeEvery(GET_DANH_MUC_ADMIN, layDanhMucAdmin);
  yield takeEvery(THEM_KHOA_HOC_ADMIN, themKhoaHocAdmin);
}
