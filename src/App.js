
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// layouts
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts

import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
import Index from "./views/Index.js";

export function App(){
    return <>
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/admin" component={Admin} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/Admin" />
            </Switch>
        </BrowserRouter>
    </>
}