import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hi there </h1>
                <Person name="Max" age="29"></Person>
                <Person name="chicken" age="56">topekasldjhasdjhads</Person>
                <Person name="platoon" age="352"></Person>

            </div>
        );
    }
}

export default App;