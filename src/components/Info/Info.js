import React from 'react';
import './info.css'

const Info = () => {
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
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <div className='div1'>
                    <h3>Exercise Time:</h3>
                    <p>200 s</p>
                </div>
                <div className='div2'>
                    <h3>Break Time:</h3>
                    <p>20s</p>
                </div>
            </div>
            <button className='complete'><p>Activity Completed</p></button>
        </div>
    );
};

export default Info;