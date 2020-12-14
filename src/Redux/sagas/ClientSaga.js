import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import noti from "sweetalert2";
import { ACCESSTOKEN, DOMAIN } from "../../Utils/Config";
import { history } from "../../Utils/history";
import {
  DANG_KY_KHOA_HOC,
  DANG_KY_USER,
  DANG_NHAP_USER,
  EDIT_THONG_TIN_USER,
  GET_CHI_TIET_KHOA_HOC_REDUCER,
  GET_DANH_MUC_REDUCER,
  GET_KHOA_HOC_DANG_KY,
  GET_KHOA_HOC_DANH_MUC_REDUCER,
  GET_KHOA_HOC_MOI_REDUCER,
  GET_THONG_TIN_USER,
  GET_USER_LOG_IN,
  HUY_GHI_DANH_KHOA_HOC_USER,
  LAY_CHI_TIET_KHOA_HOC,
  LAY_DANH_MUC,
  LAY_DS_KHOA_HOC_CHO_DUYET,
  LAY_KHOA_HOC_DANH_MUC,
  LAY_KHOA_HOC_MOI,
  LAY_THONG_TIN_USER,
  XOA_KHOA_HOC,
} from "../Constans/ClientConst";
import { USER_LOGIN } from "../../Utils/Config";

function* getKhoaHocMoiApi() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05",
        method: "GET",
      });
    });
    yield put({
      type: GET_KHOA_HOC_MOI_REDUCER,
      dsKhoaHoc: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
}

function* getDanhMucApi() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
        method: "GET",
      });
    });
    yield put({
      type: GET_DANH_MUC_REDUCER,
      danhMuc: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
}

function* getKhoaHocDmApi(maDM) {
  let { data, status } = yield call(() => {
    return Axios({
      url:
        DOMAIN +
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDM.maDM}&MaNhom=GP05`,
      method: "GET",
    });
  });
  yield put({
    type: GET_KHOA_HOC_DANH_MUC_REDUCER,
    khoaHocDM: data,
  });
}

function* getChiTietKhoaHocApi(khoaHoc) {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url:
          DOMAIN +
          `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${khoaHoc.khoaHoc}`,
        method: "GET",
      });
    });
    yield put({
      type: GET_CHI_TIET_KHOA_HOC_REDUCER,
      chiTietKhoaHoc: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
}

function* signUp(user) {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: user.user,
      });
    });
    noti.fire("Thông báo", "Đăng ký thành công", "success");
    history.push("/dangnhap");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Đăng ký không thành công", "error");
  }
}

function* logIn(taiKhoan) {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: taiKhoan.user,
      });
    });
    // console.log(data);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data));
    localStorage.setItem(ACCESSTOKEN, data.accessToken);
    noti.fire("Thông báo", "Đăng nhập thành công", "success");
    {
      data.maLoaiNguoiDung === "HV"
        ? history.push("/")
        : history.push("/admin/quanlynguoidung");
    }
    yield put({
      type: GET_USER_LOG_IN,
      userLogin: data,
    });
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Đăng nhập không thành công", "error");
  }
}

function* layThongTinUser() {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/ThongTinNguoiDung`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    yield put({
      type: GET_THONG_TIN_USER,
      thongTinUser: data,
    });
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Lấy thông tin không thành công", "error");
  }
}

function* editThongTinUser(thongTin) {
  console.log(thongTin);
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: thongTin.editUser,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    localStorage.setItem(USER_LOGIN, JSON.stringify(data));
    noti.fire("Thông báo", "Cập nhật thành công", "success");
    history.push("/thongtinhocvien");
    yield put({
      type: GET_THONG_TIN_USER,
      thongTinUser: data,
    });
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Cập nhật không thành công", "error");
  }
}

function* dangKyKhoaHoc(taiKhoan) {
  console.log(taiKhoan.tkDangKy.maKhoaHoc);
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
        method: "POST",
        data: taiKhoan.tkDangKy,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    // yield put({
    //   type: GET_KHOA_HOC_DANG_KY,
    //   maTaiKhoan: taiKhoan.tkDangKy.maKhoaHoc,
    // });
    noti.fire("Thông báo", "Đăng ký khóa học thành công", "success");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", err.response.data, "error");
  }
}

function* xoaKhoaHocUser(khoaHoc) {
  try {
    let { data, status } = yield call(() => {
      return Axios({
        url: DOMAIN + `/api/QuanLyKhoaHoc/HuyGhiDanh`,
        method: "POST",
        data: khoaHoc.huyKhoaHoc,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
    });
    // console.log(data);
    // yield put({
    //   type: HUY_GHI_DANH_KHOA_HOC_USER,
    //   chiTietKhoaHocGhiDanh: data,
    // });
    noti.fire("Thông báo", "Xóa khóa học thành công", "success");
  } catch (err) {
    console.log(err.response.data);
    noti.fire("Thông báo", "Xóa khóa học không thành công", "error");
  }
}

// function* khoaHocChoDuyet(taiKhoan) {
//   console.log(taiKhoan);
//   try {
//     let { data, status } = yield call(() => {
//       return Axios({
//         url: DOMAIN + `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
//         method: "POST",
//         data: taiKhoan.taiKhoan,
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
//         },
//       });
//     });
//     noti.fire("Thông báo", "Xóa khóa học thành công", "success");
//   } catch (err) {
//     console.log(err.response.data);
//     noti.fire("Thông báo", "Xóa khóa học không thành công", "error");
//   }
// }

export function* clientActionApi() {
  yield takeEvery(LAY_KHOA_HOC_MOI, getKhoaHocMoiApi);
  yield takeEvery(LAY_DANH_MUC, getDanhMucApi);
  yield takeEvery(LAY_KHOA_HOC_DANH_MUC, getKhoaHocDmApi);
  yield takeEvery(LAY_CHI_TIET_KHOA_HOC, getChiTietKhoaHocApi);
  yield takeEvery(DANG_KY_USER, signUp);
  yield takeEvery(DANG_NHAP_USER, logIn);
  yield takeEvery(LAY_THONG_TIN_USER, layThongTinUser);
  yield takeEvery(EDIT_THONG_TIN_USER, editThongTinUser);
  yield takeEvery(DANG_KY_KHOA_HOC, dangKyKhoaHoc);
  yield takeEvery(XOA_KHOA_HOC, xoaKhoaHocUser);
  // yield takeEvery(LAY_DS_KHOA_HOC_CHO_DUYET, khoaHocChoDuyet);
}
