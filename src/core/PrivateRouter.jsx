import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


export default function PrivateRouter(props){

    const auth=useSelector(state => state.auth);
    if(auth.login)
    {
        return <Route {...props} />
    }
    return (
    <Redirect to="/" />
    )
}