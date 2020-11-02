import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <form className="navbar-search navbar-search-light form-inline mr-sm-9 ml-auto" id="navbar-search-main">
            <div className="form-group mb-0">
                <div className="input-group input-group-alternative input-group-merge" style={{ height: '2.6em' }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text "><FontAwesomeIcon icon={faSearch} style={{ width: '0.8rem' }}></FontAwesomeIcon></span>
                    </div>
                    <input className="form-control nav-link-text" placeholder="Search" type="text" />
                </div>
            </div>
            <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </form>
    );
}

export default Search;
