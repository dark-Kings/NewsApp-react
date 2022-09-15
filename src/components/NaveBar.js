//1) using class based component

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

// export class NaveBar extends Component {
//     // static propTypes = {

//     // }

//     render() {
//         return (
//             <div>
//                 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">NewsMonkey</Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-2  mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/business">Business</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/entertainment">Entertainment</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/health">Health</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/science">Science</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/sports">Sports</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/technology">Technology</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/about">About</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default NaveBar;

// 2) using function based component
import React from 'react';
import { Link } from 'react-router-dom';

let NaveBar = () => {


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-2  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NaveBar;