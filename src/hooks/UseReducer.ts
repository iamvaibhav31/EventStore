import { RootState, Dispatch } from "./../redux/store/store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export type { RootState, Dispatch };
export const useStoreDispatch = () => useDispatch<Dispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
