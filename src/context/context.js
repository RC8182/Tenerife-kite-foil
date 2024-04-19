// context.js
import {create} from "zustand";
import { persist } from 'zustand/middleware';

export const useRangeTime = create(persist(
  (set) => ({
    minVal: 8,
    maxVal: 21,
    setMinVal: (minVal) => set({ minVal }),
    setMaxVal: (maxVal) => set({ maxVal }),
  }),
  {
    name: 'range-time-storage', // nombre único para el almacenamiento local
  }
));


export const useRangeDay =  create(persist(
  (set) => ({
    minVal: 1,
    maxVal: 7,
    setMinVal: (minVal) => set({ minVal }),
    setMaxVal: (maxVal) => set({ maxVal }),
  }),
  {
    name: 'range-days-storage', // nombre único para el almacenamiento local
  }
));