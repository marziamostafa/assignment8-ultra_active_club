import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Info from '../Info/Info';
import './Activity.css'

const Activity = () => {
    const [exercises, setexercise] = useState([])
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setexercise(data))

    }, [])

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
                            exercise={exercise}></Exercise>)
                    }
                </div>

            </div>
            <div className='personal-info'>
                <Info></Info>
            </div>
        </div>

    );
};

export default Activity;