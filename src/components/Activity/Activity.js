import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Info from '../Info/Info';
import './Activity.css'

const Activity = () => {
    const [exercises, setexercise] = useState([])
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setexercise(data))

    }, [])
    // const handleAddToCart = (exercise) => {
    //     console.log(exercise);
    //     const newCart = [...cart, exercise];
    //     setCart(newCart);

    // }
    const handleAddToCart = (exercise) => {
        const newCart = [...cart, exercise];
        setCart(newCart);
        // console.log('clicked')
        console.log(newCart);
    }
    return (
        <div className='all-activities'>
            <div className='exercise'>
                <nav>
                    <Header></Header>
                </nav>
                <h2 >Select Your Exercise</h2>
                <div className='all-exercise'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            handleAddToCart={handleAddToCart}
                            exercise={exercise}></Exercise>)
                    }
                </div>

            </div>
            <div className='personal-info'>
                <Info cart={cart}></Info>
            </div>
        </div>

    );
};

export default Activity;