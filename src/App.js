import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page1 from './components/Page1';
import { Route, Routes } from "react-router-dom";

function App() {

    return (
        // <div>
        //     <Navbar/>
        //     <div class="container-fluid" id="main">
        //         <div class="row row-offcanvas row-offcanvas-left">
        //             <Sidebar />
        //             <Dashboard />
        //         </div>
        //     </div>


        // </div>
        // <Routes>
        //     <  Route path="/" component={Page1} />

        // </Routes>
        <Page1/>


    );
}

export default App