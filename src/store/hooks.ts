import { useSelector, useDispatch } from "react-redux";
import type { AppState, AppDispatch } from "@/store";


export const useAppSelector = useSelector.withTypes<AppState>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
