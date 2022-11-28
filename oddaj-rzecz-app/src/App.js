import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from './components/Layout/Layout'
import {Home} from './views/Home'
import {LogIn} from "./views/LogIn";
import {Register} from "./views/Register";
import {LogOut} from "./views/LogOut";
import {Form} from './views/Form'
import './sass/main.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/oddaj-rzeczy' element={<Form/>}/>
                    <Route path='/logowanie' element={<LogIn/>}/>
                    <Route path='/rejestracja' element={<Register/>}/>
                    <Route path='/wylogowano' element={<LogOut/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
