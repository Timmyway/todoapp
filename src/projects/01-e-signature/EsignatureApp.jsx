import React, { useState } from "react";
import Title from "../../components/Title";

export default function EsignatureApp() {
    const [date, setDate] = useState('Select date');
    const [name, setName] = useState('Your signature');
    const inputStyle = {
        border: "none",
        borderBottom: "2",
        outline: "none",
        padding: ".35rem .4rem"
    };

    document.body.style.background = '#eee';

    function handleNameChange(e) {
        console.log('Name changed', e.target.value);
        setName(e.target.value);
    }
    function handleDateChange(e) {
        console.log('Date changed', e.target.value);
        setDate(e.target.value);
    }

    return (
        <div className="container text-center p-4">
            <Title classes={'font-bold text-xl text-red-600'} text={name}></Title>
            <Title classes={'font-bold text-lg'} text={date}></Title>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora cum iusto repellat earum deleniti dolores. Dicta veritatis qui architecto voluptatibus repellendus, alias voluptates temporibus dolorem eaque amet eum expedita.
            </p>
            <footer className="flex justify-around">
                <input
                    type="date"
                    value={date}
                    style={inputStyle}
                    onChange={handleDateChange}
                />
                <input
                    type="text"
                    value={name}
                    style={inputStyle} 
                    onChange={handleNameChange}
                />
            </footer>
        </div>
    )
}