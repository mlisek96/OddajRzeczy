import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {Layout} from './components/Layout/Layout'
import {Home} from './views/Home'
import {LogIn} from "./views/LogIn";
import {Register} from "./views/Register";
import {LogOut} from "./views/LogOut";
import {Form} from './views/Form'
import {NotFoundPage} from "./views/404";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import './sass/main.scss';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/oddaj-rzeczy' element={<Home/>}/>
                        <Route
                            path='/formularz'
                            element={
                                <PrivateRoute>
                                    <Form/>
                                </PrivateRoute>
                            }
                        />
                        <Route path='/logowanie' element={<LogIn/>}/>
                        <Route path='/rejestracja' element={<Register/>}/>
                        <Route path='/wylogowano' element={<LogOut/>}/>
                    </Route>
                    <Route path='/404' element={<NotFoundPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
