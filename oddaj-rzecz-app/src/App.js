import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from './components/Layout/Layout'
import {Home} from './views/Home'

import './sass/main.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/oddaj-rzeczy'/>
                    <Route path='/logowanie'/>
                    <Route path='/rejestracja'/>
                    <Route path='/wylogowano'/>
                </Route>
            </Routes>
        </Router>
        // <div>123</div>
    );
}

export default App;
