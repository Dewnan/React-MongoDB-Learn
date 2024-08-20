import React from 'react';

const Header = ({ onInventoryClick, onCustomerClick }) => { 
    return (
        <div className="inv_table">
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={onInventoryClick}>
                                    Inventory
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={onCustomerClick}>
                                    Loyalty Customer
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="profile_icon">
                        <a className="dropdown-toggle d-flex align-items-center hidden-arrow">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="30"
                                alt="Profile Icon"
                                loading="lazy"
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
