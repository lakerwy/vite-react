import {createContext, useContext} from "react"
import {configure} from 'mobx';
import {globalStore} from './global';

configure({enforceActions: 'always'}); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。

export const stores = {globalStore};
export const storesContext = createContext(stores);

export const useStores = () => useContext(storesContext);
export const StoresProvider = storesContext.Provider;