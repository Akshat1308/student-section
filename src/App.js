import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
function App() {

    return (
        // <FirstPage />
        // <SecondPage/>
        <Router>

            <Routes>
                <Route exact path='/' element={< FirstPage />}></Route>
                <Route exact path='/profile' element={< SecondPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App