import courseApi from "../../api/courseApi"
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"

const initalState = {
    Detail: [],
    Related:[],
    courses:[],
    Register:null


}
export function getCoures() {
    return (dispatch) => {
        courseApi.courses()
            .then(res => {
                dispatch({ type: TYPE.course, payload: res })
            })
    }
} 
export function Detail(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.detail, payload: res.data })
            })
    }
} 
export function Related(slug) {
    return (dispatch) => {
        courseApi.related(slug)
            .then(res => {
                dispatch({ type: TYPE.related, payload: res.data })
            })
    }
} 
export function Register(slug,data) {
    return (dispatch) => {
        courseApi.register(slug,data)
            .then(res => {
                dispatch({ type: TYPE.register, payload: res })
            })
    }
} 
 let { action, reducer, TYPE } = createSlice({
    name: 'course',
    initalState,
    reducers: {
        course: function (state, action) {
            return {
                ...state,
                courses:action.payload,
              

            }
        },
        detail:function(state, action)
        {
            return{
                ...state,
                Detail:action.payload
            }
        },
        related:function(state, action)
        {
            return{
                ...state,
                Related:action.payload
            }
        },
        register:function(state, action)
        {
            return{
                ...state,
                Register:action.payload
            }
        }


    }
})
export default reducer