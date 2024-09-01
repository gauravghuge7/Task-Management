import { createSlice } from "@reduxjs/toolkit";


const initialState = {

      employee: [{
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            designation: ""
      }],

      

}


const employeeSlice = createSlice({

      name: "data",
      initialState,
      reducers: {

            addEmployee: (state, action ) => {
                  state.employee = action.payload;
            }
            
      } 

})

// const clientSlice = createSlice({

//       name: "data",
// })





export const {addEmployee } = employeeSlice.actions

export const employeeReducer = employeeSlice.reducer



