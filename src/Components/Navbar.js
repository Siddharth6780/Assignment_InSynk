import React from 'react'
import '../App.css';

const Navbar = (props) => {
    return (
        <div className='NavbarContainer'>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img src="https://i.postimg.cc/26tLKjpw/8a1b048be07f36d1c85d1b3691ec0aa2-1.png" width={156} height={54} alt="" className='imgCointainer' />
                </a>
                <div className="form-inline my-2 my-lg-0">
                    <div className='d-flex'>
                        <input className="form-control mr-sm-2" value={props.value} type="search" placeholder="Search a movie" aria-label="Search" onChange={(e) => props.setSearchValue(e.target.value)}></input>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar