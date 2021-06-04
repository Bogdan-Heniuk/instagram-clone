import './css/App.css';
import Header from "./components/header";
import Main from "./components/main";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import {useSelector} from "react-redux";
import {BrowserRouter, Switch} from 'react-router-dom'
import PublicRoute from "./components/routes/publicRoute";
import PrivateRoute from "./components/routes/privateRoute";
import FallbackRoute from "./components/routes/fallbackRoute";
import Root from "./components/root";
import Profile from "./components/profile";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path = '/' exact component = {Root}/>
                <PublicRoute path = '/profile/:name' exact component = {Profile}/>
                <PublicRoute path = '/login' component={Login}/>
                <PublicRoute path = '/register' component={Register}/>
                {/*<FallbackRoute path = '*'/>*/}
            </Switch>
        </BrowserRouter>
    )

}

export default App;
