import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const sampleEmployee = {
  gender: 'male',
  name: {
      title: 'mr',
      first: 'mathys',
      last: 'aubert'
  },
  location: {
      street: '9467 rue gasparin',
      city: 'perpignan',
      postcode: '90208'
  },
  email: 'mathys.auber@example.com',
  picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};
/* Fetch : Récupération des données : en 1er lieu initialiser un state à un composant qui recevra l'employé*/

class App extends Component {
  constructor (props) { 
    super (props);
    this.state = {
      //// on peut mettre notre sampleEmployee par défaut
    // afin d'avoir toujours un employé d'affiché
    employee: sampleEmployee
    };
  }



//Il faut maintenant déclarer la méthode getEmployee dans notre composant App qui fera l'appel à notre API

getEmployee () { 

  // Récupération de l'employé via fetch

  fetch("https://randomuser.me/api?nat=fr")
    .then(response  =>  response.json())
    .then(data  => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        employee:  data.results[0],
      });
  });

}
//Ensuite, récupération de l'action de notre clic sur notre bouton

render () {
  return ( 
<GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />,


//il reste  à modifier l'appel au composant DisplayEmployee afin qu'il affiche l'employé récupéré

<DisplayEmployee  employee={this.state.employee}  /> 
  )};
}
export default App;

//1er exercice : création composants


// class App extends Component {
// render() {
//      return (
//       <div>
//         <GenerateEmployee  />
//         <DisplayEmployee  employee={sampleEmployee}  />
//         </div>
//       ) }
//   };

//  export default App;


