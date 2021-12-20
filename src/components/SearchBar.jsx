import React from 'react';
import CustomInput from "./UI/Input/CustomInput";

const SearchBar = (props) => {
    return (
        <div className="search">
            <CustomInput type="text" placeholder="Поиск"/>
            <div className="search_buttons">
                <div className="group-1">
                    <div className="rectangle">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
