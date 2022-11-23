import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from './components/Layout/Layout'
import {Home} from './views/Home'
import {LogIn} from "./views/LogIn";
import './sass/main.scss';
import {Register} from "./views/Register";
import {LogOut} from "./views/LogOut";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/oddaj-rzeczy'/>
                    <Route path='/logowanie' element={<LogIn/>}/>
                    <Route path='/rejestracja' element={<Register/>}/>
                    <Route path='/wylogowano' element={<LogOut/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
