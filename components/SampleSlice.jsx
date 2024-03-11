"use client";
import {
  decrement,
  increment,
} from "@/lib/redux-toolkit/features/counterSlice";
import { setName } from "@/lib/redux-toolkit/features/nameSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";

export default function SampleSlice() {
  const count = useAppSelector(state => state.counter.value);
  const name = useAppSelector(state => state.name.name);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <h1>Name Slice {name}</h1>
      <button onClick={() => dispatch(setName())}>Change to kantutan</button>
    </div>
  );
}
