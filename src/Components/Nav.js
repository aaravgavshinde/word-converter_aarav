import React from 'react'
// import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode1}`} href="/">WC-App</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
