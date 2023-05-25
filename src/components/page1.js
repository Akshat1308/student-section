import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const Page1 = () => {
    const [record, setRecord] = useState([]);

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resposne) => resposne.json())
            .then((res) => setRecord(res));
    };

    useEffect(() => {
        getData();
    });
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg "
                style={{ backgroundColor: "#498abc" }}
            >
                <div
                    className="container-fluid"
                    style={{ backgroundColor: "#498abc" }}
                >
                    <a
                        className="navbar-brand"
                        href="#"
                        style={{ color: "white", fontSize: "18px" }}
                    >
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/profile">
                                {" "}
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        style={{ color: "white", fontSize: "18px" }}
                                    >
                                        Second page
                                    </a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white", fontSize: "18px" }}>
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", fontSize: "18px" }}
                                >
                                    Dropdown
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#" style={{ color: "white", fontSize: "18px" }}>
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={{ color: "white", fontSize: "18px" }}>
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={{ color: "white", fontSize: "18px" }}>
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" style={{ color: "white", fontSize: "18px" }}>Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-dark" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <h3 className="text-center mt-5" style={{ fontFamily: "cursive" }}>
          Available Courses
        </h3> */}
            <div style={{ overflowX: "hidden" }}>
                <h3
                    className="text-center mt-5"
                    style={{
                        background: "-webkit-linear-gradient(#00b8ff, #0047ab)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        fontFamily: "cursive",
                    }}
                >
                    Available Courses
                </h3>

                <div class="row mb-4 mt-5 ">
                    {record.map((output, index) => (
                        <div className="col mb-4">

                            <div class="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
                                    class="card-img-top"
                                    alt="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">{output.id}</h5>
                                    <p class="card-text">
                                        {output.name}
                                    </p>
                                    <a href="#" class="btn btn-primary">
                                        register
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <h3
                    className="text-center mt-5"
                    style={{
                        background: "-webkit-linear-gradient(#00b8ff, #0047ab)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        fontFamily: "cursive",
                    }}
                >
                    Available Events
                </h3>
                <div class="row mb-4 mt-5 ">
                    {record.map((output, index) => (
                        <div className="col mb-4">

                            <div class="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
                                    class="card-img-top"
                                    alt="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">{output.id}</h5>
                                    <p class="card-text">
                                        {output.name}
                                    </p>
                                    <a href="#" class="btn btn-primary">
                                        register
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div></div >
        </div>
    );
}
export default Page1