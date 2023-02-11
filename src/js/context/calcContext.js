import { createContext, useContext } from "react";

export const CalcContext = createContext();
export const getCalcContext = useContext(CalcContext);