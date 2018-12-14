import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            { name: "pachufla", age: 29 },
            { name: "chicken", age: 39 },
            { name: "lapika", age: 429 }
        ]
    }

    onClickEventHandler = (newName) => {
        console.log('received!')

        this.setState({
            persons: [
                { name: newName, age: 48 },
                { name: "chicken", age: 39 },
                { name: "lapika", age: 5 }
            ]
        }
        )
    }

    onInputChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: "paprika", age: 48 },
                { name: event.target.value, age: 39 },
                { name: "lapika", age: 5 }
            ]
        }
        )
    }


    render() {
        return (
            <div className="App">
                <h1> Hi there </h1>
                <button onClick={this.onClickEventHandler.bind(this, 'Plexator')}>Click me!</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}></Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.onClickEventHandler.bind(this, 'Tryphomek')}
                    changed={this.onInputChangeHandler}>topekasldjhasdjhads</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}></Person>
            </div>
        );
    }
}

export default App;