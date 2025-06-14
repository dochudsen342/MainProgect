import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterShema } from "../../types/counterSchema";


export const getCounterValue = createSelector(getCounter,
    (couterValue:CounterShema) => couterValue.value * 3
)