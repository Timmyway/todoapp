import React from 'react'
import Title from '../../components/Title'

export default function RandomizeColor() {
    function handleClick(e) {
        console.log(e.target.value);        
        let body = document.querySelector('body');
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        // Hexadecimal
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i<6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="container">
            <Title text={"Randomize color"} classes={"mb-4"}></Title>
            <div className="flex gap-4">
                <button className='btn btn-primary' onClick={handleClick}>Click me</button>
                <button className='btn btn-secondary text-light'>Click me</button>
                <button className='btn btn-success'>Click me</button>
                <button className='btn btn-danger'>Click me</button>
            </div>
        </div>
    )
}
