import "./App.css";
import React from 'react';
import { createRoot } from "react-dom/client";
import "./data";
import parfumeData from "./data";
import SearchBar from './searchbar';
import {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {

        return (

            < div className="container">

                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>

                    </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                            </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                                </ul>

                </div>
                <Head/>
                <Container style={{width: "220px"}}>
                    <Row>
                        <Col>
                            <UserAuthContextProvider>
                                <Routes>
                                    <Route
                                        path="/home"
                                        element={
                                            <ProtectedRoute>
                                                <Home/>
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route path="/" element={<Login/>}/>
                                    <Route path="/signup" element={<Signup/>}/>
                                </Routes>
                            </UserAuthContextProvider>
                        </Col>
                    </Row>

                </Container>

                <Menu/>
                <Footer/>
            </div>
        );
    }


function Head() {
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Discover the Art of Perfumery</h1>

        </header>
    );
}


function Menu({closeHour, openHour}) {
    const parfume = parfumeData;
    const id = parfume.length;
    const [searchTerm, setSearchTerm] = useState('');
    const filteredParfumes = parfumeData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="menu">

            <h2>OUR MENU</h2>
            <p>We're still working on our menu. Please come back later 😀</p>
            <p>
                Essence of Elegance, Delivered..
            </p>
            <SearchBar onSearch={setSearchTerm}/>
            {filteredParfumes.length > 0 ? (
                <ul className="parfume-list">
                    {filteredParfumes.map((parfumeObj) => (
                        <Pizza parfumeObj={parfumeObj} key={parfumeObj.title}/>
                    ))}
                </ul>
            ) : (
                <p>No matching parfume found!</p>
            )}
        </main>
    );
}


function Pizza({parfumeObj}) {
    console.log(parfumeObj);

    return (
        <li className={`pizza ${parfumeObj.soldOut ? "sold-out" : ""}`}>
            <a key={parfumeObj.id} href={parfumeObj.link} target="_blank">
                <img src={parfumeObj.photoName} alt={parfumeObj.title}/>
            </a>
            <div>
                <h3>{parfumeObj.title}</h3>
                <h4>{parfumeObj.author}</h4>
                <p>{parfumeObj.notes}</p>


                <span>{parfumeObj.soldOut ? "SOLD OUT" : parfumeObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour > openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour}/>
            ) : (
                <p>We're unfortunately closed. We open {openHour}:00 </p>
            )}
        </footer>
    );

}

function Order({closeHour, openHour}) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <a href={"https://www.sephora.com/"} target="_blank">
                <button className="btn">Order</button>
            </a>
        </div>
    );
}



export default App;