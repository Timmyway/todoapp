import React, { useState } from 'react';
import Title from '../../components/Title';
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai';
import CatImage from './img/cat.jpg';

function LikePhotoApp() {    
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toogleLike = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }
    };
    return (
        <div className="container">
            <div>
                <Title classes={"font-bold text-xl"} text={"Like Photo App"} />
                <Title classes={"font-bold text-lg"} text={`Likes ${count}`} />
            </div>
            <div
                className="bg-slate-800 text-light hover:shadow-xl"
                style={{ width: 280, cursor: 'pointer' }}
                onDoubleClick={toogleLike}
            >
                <div className="p-4 flex text-4xl">
                    <AiFillSmile className="mr-2" />
                    <small className="font-bold">Stylish Cat</small>
                </div>
                <figure>
                    <img className="w-fit" src={CatImage} alt="img" />
                    <figcaption className="px-4 py-2 text-base">Image par 
                        <a href="https://pixabay.com/fr/users/ukieiri-999636/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3479185">
                            &nbsp;Uki Eiri
                        </a> de 
                        <a href="https://pixabay.com/fr//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3479185">
                            &nbsp;Pixabay
                        </a>
                    </figcaption>
                </figure>              
                <div className="p-4 flex justify-between text-4xl">
                    <AiOutlineComment />{" "}
                    {like ? (
                        <AiFillHeart className="text-danger" onClick={toogleLike} />
                    ) : (
                        <AiOutlineHeart onClick={toogleLike} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LikePhotoApp
