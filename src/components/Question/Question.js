import React from 'react';
import './Question.css'

const question = () => {
    return (
        <div className='questios'>
            <h1>Questions:</h1>
            <div>
                <h3>Qst-1: How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h3>Qst-2: What are the differences of props and state?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h3>Qst-3: What else useEffect does except loading data using API?</h3>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.</p>
            </div>


        </div>
    );
};

export default question;