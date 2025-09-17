import { configureStore, createSlice } from "@reduxjs/toolkit";


// un slice est un morceau de notre state global avec sa propre logique


const counterSlice = createSlice({
    name: "counter", // nom de notre slice
    initialState: { value : 0 }, // valeur initiale de notre state
    reducers : {  // fonctions qui peuvent agir sur ce morceau de state en reponse a des actions
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        incrementBy: (state,action) => {state.value += action.payload},
        decrementBy: (state,action) => {state.value -= action.payload},
    }
})

// on peut creer plusieurs slice (morceau de notre state global)
const settingsSlice = createSlice({
    name: "settings",
    initialState : { step : 1},
    reducers : {
        setStep: (state,action) => {state.step = Number(action.payload)}
    }
})

// un slice = state + reducers + actions

export const {increment,decrement,incrementBy,decrementBy} = counterSlice.actions;
export const {setStep} = settingsSlice.actions;

// le store
// state global compose de tous nos slices

export const store = configureStore({
    reducer:{ 
        counter: counterSlice.reducer,
        settings: settingsSlice.reducer
    }
})
