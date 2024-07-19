import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";


interface ModalState {
  isOpenModal: boolean;
  content: {
    project: boolean;
    certificate: boolean;
  }
};

const initialModalState: ModalState = {
  isOpenModal: false,
  content: {
    project: true,
    certificate: false,
  }
}

const modal = createSlice({
  name: "modalReducer",
  initialState: initialModalState,
  reducers: {
    openModal: (state): void => {
      state.isOpenModal = true;
      return;
    },
    closedModal: (state): void => {
      state.isOpenModal = false;
      return;
    },
    switchProject: (state): void => {
      state.content.project = true;
      state.content.certificate = false;
      return;
    },
    switchCertificate: (state): void => {
      state.content.project = false;
      state.content.certificate = true;
      return;
    }
  }
});

export const { openModal, closedModal, switchProject, switchCertificate } = modal.actions;
export const getPropertyStateModal = (state: AppState): ModalState => {
  return state.modalReducer;
}

export default modal;
