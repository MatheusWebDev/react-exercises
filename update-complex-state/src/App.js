import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const radomInstructorIndex = Math.floor(
        Math.random() * 
        this.state.instructors.length
      );
      const radomHobbieIndex = Math.floor(
        Math.random() * 
        this.state.instructors[radomInstructorIndex].hobbies
      );
      
      const instructors = this.state.instructors.map((inst, i) => {
        if(i === radomInstructorIndex) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(radomHobbieIndex, 1);
          return {...inst, hobbies};
        }
        return inst;
      });
      
      // let instructors = [...this.state.instructors];
      // instructors[radomInstructorIndex] = Object.assign({}, instructors[radomInstructorIndex]);
      // instructors[radomInstructorIndex].hobbies = [...instructors[radomInstructorIndex].hobbies];
      // instructors[radomInstructorIndex].hobbies.splice(radomHobbieIndex, 1);
      this.setState({instructors});
    }, 3000);
  }
  
  
  getRadomHobbie(){
    let hobbies = this.getRadomInstructor().hobbies.slice();
    let radomHobbie = Math.floor(Math.random()*hobbies.length);
    return hobbies[radomHobbie];
  }
    
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
