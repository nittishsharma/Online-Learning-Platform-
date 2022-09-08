import { Route, Routes } from "react-router-dom";
import Login from "./Component/login/login";
import Register from "./Component/register/register";
import Main from "../src/Main";
import Dashboard from "./Component/Dashboard";

function App() {
    return (
        <Routes>

            <Route exact path="/" element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
    );
}

export default App;