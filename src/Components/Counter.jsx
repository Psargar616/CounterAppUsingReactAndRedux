import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Slices/CounterSlice";

const Counter = () => {
  
  //   useSelector =>  A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

  // This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.   
  

  const count = useSelector((state) => state.counter.value);

  // useDispatch => A hook to access the redux dispatch function.

// @returns — redux store's dispatch function
  const dispatch = useDispatch();
  return (
    <div className="p-8 border-2  border-slate-400 max-w-2xl w-[40%] h-[40%] flex justify-center items-center px-4 py-4 rounded-xl  bg-slate-800 shadow-lg">
      <div className="flex flex-col gap-y-4 text-center ">
        <h1 className="text-white text-5xl font-bold uppercase leading-relaxed tracking-wide">
          Counter App 
        </h1>
        <div className="px-4 py-4 flex justify-between items-center  gap-y-6 border-2 bg-slate-50 rounded-lg">
          <button
            onClick={() => dispatch(increment())}
            className="text-4xl text-slate-800 font-semibold border-r-2 border-slate-400 pr-8 pl-4"
          >
            +
          </button>

          <div className="text-4xl text-slate-800 font-semibold flex-1 text-center">
            {count}
          </div>

          <button
            onClick={() => dispatch(decrement())}
            className="text-4xl font-semibold border-l-2 border-slate-400 pl-8 pr-4"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
