import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { id, name, picture, info, time, age } = props.exercise
    const { exercise, handleAddToCart } = props;
    // console.log(props);

    return (
        <div className='exercise-cart'>
            <img src={picture} alt="" />
            <div >
                <h3 className='name'>Name: {name}</h3>
                <p>{info}</p>
                <p><b>For Age: {age}</b></p>
                <p><b>Time Required: {time}s</b></p>

            </div>
            <button onClick={() => { handleAddToCart(exercise) }} className='btn-cart'><p>Add To List</p></button>
        </div>
    );
};

export default Exercise;