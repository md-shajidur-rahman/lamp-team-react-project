import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand fs-1">Printing Hub</a>
            <p className="text-warning"><br />
            You can order maximum £250 in online. <br />
            For the large amounts order, please email us on info@printinghub.com <br />
            </p>
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