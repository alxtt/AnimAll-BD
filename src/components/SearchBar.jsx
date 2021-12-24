import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
const SearchBar = (props) => {
    return (
        <div className="search">
            <MyInput type="text" placeholder="Поиск"/>
            <div className="search_buttons">
                <div className="group-1">
                    <div className="rectangle">
                        <MyButton>Search</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;