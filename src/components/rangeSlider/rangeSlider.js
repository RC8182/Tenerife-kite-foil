'use client'
import React, { useCallback, useEffect, useRef } from "react";
import "./multiRangeSlider.css";
import { useRangeTime, useRangeDay} from "@/context/context";

const MultiRangeSlider = ({min, max, title, context}) => {
  
  const { minVal, maxVal, setMinVal, setMaxVal } = (context==='time')? useRangeTime(): useRangeDay();

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal); // Utiliza directamente maxVal
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]); // Añade maxVal a la lista de dependencias

  //Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minVal); // Utiliza directamente minVal
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]); // Añade minVal a la lista de dependencias


  return (
    <div className="flex flex-col items-center">
      <div>{title}</div>
      <div className="container h-12 flex flex-col items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={`thumb thumb--zindex-3 ${
          minVal > max - 100 ? "thumb--zindex-5" : ""
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider relative w-200">
        <div className="slider__track" />
        <div
          ref={range}
          className="slider__range"
        />
        <div className="slider__left-value">
          {minVal}
        </div>
        <div className="slider__right-value">
          {maxVal}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MultiRangeSlider;
