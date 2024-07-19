'use client';
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";


const GlobalStore = (props: { children: React.ReactNode }): JSX.Element => {
  return(
    <Provider store={store}>
      { props.children }
    </Provider>
  );
}

export default GlobalStore;
