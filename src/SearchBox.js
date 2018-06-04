import React from 'react';

const SearchBox = ({SearchField, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue br3"
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange}>
            </input>
        </div>
    );
}

export default SearchBox;