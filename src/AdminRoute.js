//! ตรวจสอบการเข้าสู่ระบบ
import { getUsername } from "./services/authorRize";
import { Route, Redirect } from "react-router-dom";


const AdminRoute=({component:Component,...rest})=>(
    <Route
        {...rest}
        render={props=>
            getUsername() ? 
            (<Component {...props} />) :
            (<Redirect 
                to={{pathname:"/login", state:{from:props.location}}}
            />)
        }
    />
)
    


export default AdminRoute;