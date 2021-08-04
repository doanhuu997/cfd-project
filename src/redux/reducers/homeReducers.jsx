
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"

const initalState = {
   home:[]

}
export function getHome() {
    return (dispatch) => {
        homeapi.home()
            .then(res => {
                dispatch({ type: TYPE.home, payload: res})
            })
    }
} let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initalState,
    reducers: {
        home: function (state, action) {
       
           
            return {
                ...state,
              home:action.payload
            
            }
        }


    }
})

export default reducer