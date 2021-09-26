import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand fs-1">LAMP Team <br />
            <h4 className="text-warning">Total Contribution Value for the society is £4920</h4>
            </a>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-warning" type="submit">Search</button>
            </form>
            </div>
            </nav>
        </div>
    );
};

export default Header;