import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container">
                        <Link className='rubik navbar-brand fs-3' to='/'>Rick & Morty <span className='text-primary'>Wiki</span></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                            <style jsx="true">
                                {`
                                    button[aria-expanded="false"] > .close{
                                        display: none;
                                    }
                        
                                    button[aria-expanded="true"] > .open{
                                        display: none;
                                    }

                                    .navbar-toggler{
                                        border: none;
                                        font-size: 30px
                                    }

                                    .navbar-toggler:focus {
                                        text-decoration: none;
                                        outline: 0;
                                        box-shadow: none;
                                    }

                                `}
                            </style>

                            <i className="fas fa-bars open fw-bold text-dark"></i>
                            <i className="fas fa-times close fw-bold text-dark"></i>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav text-center fs-5">
                                <NavLink activeclassname="active" className="nav-link" to="/">Characters</NavLink>
                                <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
                                <NavLink className="nav-link" to="/location">Location</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
