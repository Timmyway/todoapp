import React from "react";
import Title from "../../components/Title";

export default function EsignatureApp() {
    return (
        <div className="container text-center p-4">
            <Title classes={'font-bold text-xl text-red-600'} text={ "Un jour je serai le meilleur dresseur !" }></Title>
            <Title classes={'font-bold text-lg'} text={ "Je me battrai sans répi" }></Title>
        </div>
    )
}