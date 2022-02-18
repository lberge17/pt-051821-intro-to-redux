import { ADD_ITEM, DELETE_ITEM, START_LOADING } from "./actionTypes"
// action start loading

export const startLoading = () => ({type: START_LOADING})

export const addItem = item => ({type: ADD_ITEM, payload: item})

export const deleteItem = id => ({type: DELETE_ITEM, payload: id})