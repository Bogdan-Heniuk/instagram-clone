import './css/App.css';
import Header from "./components/header";
import Main from "./components/main";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import {useSelector} from "react-redux";

function App() {
    const loggedIn = useSelector(state => state.user.loggedIn)

    return (

        !loggedIn ? <Login/> : <Header/>

    )

}

export default App;
