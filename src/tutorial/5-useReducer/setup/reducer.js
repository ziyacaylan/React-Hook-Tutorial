import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

export const reducer = (state, action) => {
  //console.log(state, action);
  console.log(state);
  if (action.type === "OGE_EKLI") {
    const yeniOgeler = [...state.people, action.payload];
    return {
      ...state,
      people: yeniOgeler,
      isModalOpen: true,
      modalContent: "Eğe Eklendi",
    };
  }
  if (action.type === "DEGER_YOK") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Lütfen değer giriniz",
    };
  }
  if (action.type === "MODAL_KAPAT") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "OGEYI_KALDIR") {
    const yeniInsanlar = state.people.filter(
      (kisi) => kisi.id !== action.payload
    );
    return { ...state, people: yeniInsanlar };
  }
  throw new Error("Eşleşen aciton türü yok");
};
