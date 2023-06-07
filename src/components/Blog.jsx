import React, { useContext } from 'react'
import Title from './Title'
import Button from './Button'
import { ThemeContext } from '../projects/07-light-and-dark-mode/context/theme-context'

export default function Blog() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <div className="container p-2">
        <Title classes={"font-bold py-2 text-6xl"} text={`My Blog with ${theme} Theme`} />
        <span className="absolute top-1 right-1">
            <Button
                text={theme === "dark" ? "Light" : "Dark"}
                btnClass={`btn-xs ${theme === "dark" ? "bg-slate-800 text-light" : "bg-slate-200 text-dark"}`}
                onClick={changeTheme}
            />
        </span>
        <p className="text-lg leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita magnam reprehenderit doloremque quod dolorem ullam maiores sint omnis vero. Tempora, accusamus! Officia hic laborum quisquam eligendi amet dicta nostrum.
            Rerum, nam rem? Est id a expedita, officia reprehenderit sed esse accusantium ex dolor nesciunt vitae harum, dolorem, libero vero ut quasi architecto maiores quae ipsa officiis impedit quam? Quasi?
            Explicabo, hic culpa. Atque laudantium reiciendis, fugiat blanditiis tempore ab deserunt nam illo sint mollitia corporis suscipit quibusdam molestiae. Aliquam quasi consequuntur placeat sint deleniti ipsam exercitationem illum quod maiores?
        </p>
        </div>
    )
}
