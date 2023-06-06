import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

export default function TestimonialsApp() {
    const [testimonials, setTestimonials] = useState();
    const [items, setItems] = useState([]);

    const fetchTestimonials = (resource) => {
        if (!resource) return;
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then((response) => {            
            return response.json();
        })
        .then((json) => {            
            if (Array.isArray(json)) {
                setItems(json);
            }            
        })
    }

    useEffect(() => {
        fetchTestimonials(testimonials);
    }, [testimonials]);

  return (
    <div className="container mx-auto">
        <Title text={"Testimonials App"} classes={"font-bold text-4xl"} />
        <div className="my-4">
            <Button
                text={"Posts"}
                btnClass="btn-info"
                icon={<BsFillFileEarmarkPostFill />}
                onClick={() => setTestimonials('Posts')}
            />
            <Button
                text={"Users"}
                btnClass="btn-info"
                icon={<FaUserAlt />}
                onClick={() => setTestimonials('Users')}
            />
            <Button
                text={"Comments"}
                btnClass="btn-info"
                icon={<BiCommentDetail />}
                onClick={() => setTestimonials('Comments')}
            />
        </div>
        <div className="mt-4 bg-slate-800 text-light p-4 text-2xl">
            <Title
                classes={"p-4 font-bold text-4xl"}
                text={!testimonials ? "Testimonials App" : testimonials}
            />            
            {!items ? null
                : items?.map((item) => {
                    return (
                        <div className="bg-slate-600 my-4">
                            <div className="mb-2" key={item.id}>
                                {item.name && <h2 className="p-4">{item.name}</h2>} 
                            </div>
                            <div className="body p-4">
                                <h4 className="font-bold text-2xl text-pink-200 mb-2">{item.title}</h4>
                                <p className="mb-2">{item.body}</p>
                                {item.email && (
                                    <small className="pa-2">{item.email}</small>
                                )}
                            </div>                            
                        </div>
                    )
            })}
        </div>
    </div>
  )
}
