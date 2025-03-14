import { create } from "zustand";


type CounterStore = {
    count: number;
    increment: () => void;
    decerement: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: (() => {
        set((state: any) => ({ count: state.count + 1 }))
    }),
    decerement: (() => {
        set((state: any) => ({ count: state.count - 1 }))
    })
}))