import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page1 from './components/Page1';
import { Route, Routes } from "react-router-dom";
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
function App() {

    return (
        <FirstPage />
        // <SecondPage/>

    );
}

export default App