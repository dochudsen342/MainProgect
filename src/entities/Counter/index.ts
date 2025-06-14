import Counter from "./ui/Counter";
import { counterAction } from "./model/slice/counterSlice";
import { counterReducer } from "./model/slice/counterSlice";
import type { CounterShema } from "./model/types/counterSchema";

export {
    Counter,
    CounterShema,
    counterAction,
    counterReducer
}