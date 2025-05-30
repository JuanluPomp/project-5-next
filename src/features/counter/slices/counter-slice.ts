import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number,
    isReady: boolean
}

export const initialState = {
    value: 0,
    isReady: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCounterState:(state, action: PayloadAction<number>) => {
            if(state.isReady){
                return
            }
            state.value = action.payload
            state.isReady = true
        },
        increment: (state) => {
            if(state.value >= 20){
                console.log('limite de incremento alcanzado')
                return 
            }
            state.value += 1
        },
        decrement: (state) => {
            if(state.value <=0){
                console.log('Limite de decremento alcanzado')
                return
            }
            state.value  -=1
        },
        resetCount: (state, action: PayloadAction<number>) => {
            const {payload} = action
            if(payload >= 0 && payload <= 20){
                state.value = payload
                return
            }
            console.log('Valor fuera de los rangos')
        }
    }
})

export const {increment, decrement, resetCount, initCounterState} = counterSlice.actions
export default counterSlice.reducer