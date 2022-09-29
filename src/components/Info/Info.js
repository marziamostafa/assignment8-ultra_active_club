import React from 'react';
import addToDb, { getStoredTime } from '../../utilities/fakedb';
import './info.css'

const Info = (props) => {
    const { cart } = props;
    const breakTime = [{ id: 1, time: 10 },
    { id: 2, time: 20 },
    { id: 3, time: 30 },
    { id: 4, time: 40 }
    ]
    // console.log(breakTime);
    let quantity = 0;
    for (const product of cart) {

        quantity = quantity + product.time;
        console.log(quantity);
    }
    const showTime = (id) => {
        for (const values of breakTime) {

            if (values.id === id) {

                let field = document.getElementById('timing');
                let second = values.time;
                console.log(second);
                field.innerText = second + 's';

            }
        }

    }
    // useEffect(() => {
    //     const storedTime = getStoredTime();
    //     const savedTime = [];
    //     for (const id in storedTime) {
    //         const addedTime= products.find(product => product.id === id)
    //         if (addedTime) {
    //             const quantity = storedTime[id];
    //             addedTime.quantity = quantity;
    //             savedTime.push(addedProduct)
    //         }

    //     }

    //     setCart(savedCart)
    // }, [p])
    const addOnStorage = (id, time) => {

        addToDb(id, time);
    }


    return (
        <div className='details'>
            <div className='personal-detail'>
                <img src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="" />
                <div>
                    <h4>Marzia Mostafa</h4>
                    <p>Tongi,Gazipur</p>
                </div>
                {/* <p>
                    <span></span></p> */}
            </div>
            <div className='bmi'>
                <p><b>75</b>kg<br />Weight</p>
                <p><b>6.5</b><br />Height</p>
                <p><b>25</b>years<br />Age</p>
            </div>
            <div className='break'>
                <h2>Add a break</h2>
                <div className='buttons'>
                    {
                        breakTime.map(times => <button id='btn-colour' key={times.id} onClick={() => { showTime(times.id); addOnStorage(times.id, times.time) }}>{times.time}S</button>)
                    }

                </div>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <div className='div1'>
                    <h3>Exercise Time: </h3>
                    <p>{quantity}s</p>
                </div>
                <div className='div2'>
                    <h3>Break Time:</h3>
                    <p id='timing'></p>
                </div>
            </div>
            <button className='complete'><p>Activity Completed</p></button>
        </div>
    );
};

export default Info;