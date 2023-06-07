import React, { useEffect, useState } from 'react'
import Button from './Button';

export default function Alert({ type, message, delay=false, delayTime=5000 }) {
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("tw-anim-fade");
        setTimeout(() => {setShowAlert(false)}, 300);
    }

    useEffect(() => {
        delay && setTimeout(() => {
            setShowAlert(false);
        }, delayTime);
    })
    return showAlert && (
        <div className={`px-4 py-2 rounded w-fit bg-${type}`}>
            <div className="flex justify-between gap-4">
                <span>{message}</span>
                <Button
                    btnClass={"btn-icon text-danger bg-white w-8 h-8 flex justify-center items-center"}
                    text={"❌"}
                    onClick={closeAlert}
                />
            </div>
        </div>
    )
}
