import React, { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function HiddenSearchBar() {
    const [uiProps, setUiProps] = useState({
        bg: "purple",
        shadow: "",
        transition: "all .3s ease",
        opacity: 0,
        showSearchIcon: true,
        showSearchBar: true
    });    
    let bsSearchStyle = {
        fontSize: 50,
        cursor: "pointer",
        position: "absolute",
        top: 20,
        right: 20
    };
    let inputStyle = {
        opacity: uiProps.opacity,
        boxShadow: "0px 55px 60px -15px rgba(0, 0, 0, .75)",
        transition: "all .3s ease"
    };

    const inputEl = useRef(null);

    useEffect(
        () => {
            let body = document.body.style;
            body.background = uiProps.bg;
            body.boxShadow = uiProps.shadow;
            uiProps.showSearchBar && inputEl.current && inputEl.current.focus();
        }, [uiProps.bg, uiProps.shadow, uiProps.showSearchBar]
    );

    const showSearch = () => {
        setUiProps({
            opacity: 1,
            showSearchIcon: false
        });        
    };

    const handleSearchFocus = () => {
        setUiProps({
            shadow: "inset 0 -60vh 30vw 200px rgba(0, 0, 0, .8)"
        })
    };

    const handleSearchBlur = () => {
        setUiProps({
            shadow: "none",
            opacity: 0,
            showSearchIcon: true
        })
    };

    return (
        <div className="container">            
            {uiProps.showSearchIcon ? (
                <BsSearch style={bsSearchStyle} onClick={showSearch}/>
            ) : <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    style={inputStyle}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    ref={inputEl}
                />}
        </div>
    )
}
