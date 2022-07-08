import React from "react";
import {ReduxStoreType} from "./redux/redux-store";

const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}

export const Provider = (props:ProviderType) => {
  return (
      <StoreContext.Provider value={props.store}>
          {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContext