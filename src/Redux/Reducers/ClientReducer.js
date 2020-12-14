import {
  GET_CHI_TIET_KHOA_HOC_REDUCER,
  GET_DANH_MUC_REDUCER,
  GET_KHOA_HOC_DANG_KY,
  GET_KHOA_HOC_DANH_MUC_REDUCER,
  GET_KHOA_HOC_MOI_REDUCER,
  GET_THONG_TIN_USER,
  GET_USER_LOG_IN,
} from "../Constans/ClientConst";

const initialState = {
  dsKhoaHoc: [],
  danhMuc: [],
  khoaHocDM: [],
  chiTietKhoaHoc: {},
  userLogin: {},
  thongTinUser: {},
  khoaHocGhiDanh: [],
};

export const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KHOA_HOC_MOI_REDUCER:
      state.dsKhoaHoc = action.dsKhoaHoc;
      return { ...state };

    case GET_DANH_MUC_REDUCER: {
      state.danhMuc = action.danhMuc;
      return { ...state };
    }

    case GET_KHOA_HOC_DANH_MUC_REDUCER: {
      state.khoaHocDM = action.khoaHocDM;
      return { ...state };
    }

    case GET_CHI_TIET_KHOA_HOC_REDUCER: {
      state.chiTietKhoaHoc = action.chiTietKhoaHoc;
      return { ...state };
    }

    case GET_USER_LOG_IN: {
      state.userLogin = action.userLogin;
      return { ...state };
    }

    case GET_THONG_TIN_USER: {
      state.thongTinUser = action.thongTinUser;
      return { ...state };
    }

    // case GET_KHOA_HOC_DANG_KY: {
    //   let ghiDanh = state.dsKhoaHoc.find(
    //     (item) => item.maKhoaHoc === action.maKhoaHoc
    //   );
    //   console.log(ghiDanh);
    // }

    default:
      return state;
  }
};
