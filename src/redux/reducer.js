import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const initialState = [
  {
    id: 1,
    name: "apples"
  },
  {
    id: 2,
    name: "pears"
  },
  {
    id: 3,
    name: "spinach"
  },
  {
    id: 4,
    name: "bread"
  },
  {
    id: 5,
    name: "peanut butter"
  }
]

// const action = {type: "ADD_ITEM", payload: {name: "orange juice"}}

function reducer(state = initialState, action){
  // switch determines what my new state is
  switch (action.type) {
    case ADD_ITEM:
      
      return [...state, action.payload];
    
    case DELETE_ITEM:
      // {type: "DELETE_ITEM", payload: 4}
      // return state.filter(i => i.id !== action.payload)
      const itemIndx = state.findIndex(i => i.id === action.payload)
      
      return [
        ...state.slice(0, itemIndx),
        ...state.slice(itemIndx + 1)
      ]
  
    default:
      return state;
  }
}

export default reducer;