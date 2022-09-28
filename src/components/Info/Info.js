import React from 'react';
import './info.css'

const Info = () => {
    return (
        <div className='details'>
            <div className='personal-info'>
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
            <div></div>
        </div>
    );
};

export default Info;