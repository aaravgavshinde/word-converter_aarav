import React from 'react'
// import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode1}`} href="/">WC-App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active text-${props.mode1}`} aria-current="page" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-${props.mode1}`} href="/dlmode">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-${props.mode1}`} href="/services">Services</a>
                        </li>
                    </ul>
                    <button onClick={props.toggleColor1} className={`rounded m-2 p-2 bg-primary`}></button>
                    <button onClick={props.toggleColor2} className={`rounded m-2 p-2 bg-danger`}></button>
                    <button onClick={props.toggleColor3} className={`rounded m-2 p-2 bg-warning`}></button>
                    <button onClick={props.toggleColor4} className={`rounded m-2 p-2 bg-success`}></button>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
