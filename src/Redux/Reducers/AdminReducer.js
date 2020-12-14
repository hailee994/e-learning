import {
  DANH_SACH_KHOA_HOC_ADMIN_REDUCER,
  DANH_SACH_NGUOI_DUNG_ADMIN_REDUCER,
  GET_DANH_MUC_ADMIN_REDUCER,
  THONG_TIN_USER_ADMIN_REDUCER,
} from "../Constans/AdminConst";

const initialState = {
  dsNguoiDung: [],
  thongTinUserAdmin: {},
  dsKhoaHocAdmin: [],
  danhMucAdmin: [],
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANH_SACH_NGUOI_DUNG_ADMIN_REDUCER: {
      state.dsNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    case THONG_TIN_USER_ADMIN_REDUCER: {
      state.thongTinUserAdmin = action.thongTinUserAdmin;
      return { ...state };
    }

    case DANH_SACH_KHOA_HOC_ADMIN_REDUCER: {
      state.dsKhoaHocAdmin = action.dsKhoaHocAdmin;
      return { ...state };
    }

    case GET_DANH_MUC_ADMIN_REDUCER: {
      state.danhMucAdmin = action.danhMucAdmin;
      return { ...state };
    }

    default:
      return state;
  }
};
