import React, {Component} from 'react';
import './App.css';
import GenerateCitation from './GenerateCitation';
import DisplayCitation from './DisplayCitation';

const citation = 
    [
        {
         "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
         "character": "Nelson Muntz",
         "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
         "characterDirection" : "Left"
        }
      ];

      /* Fetch : Récupération des données : en 1er lieu initialiser un state à un composant qui recevra la citation*/

class App1 extends Component {
    constructor (props) { 
      super (props);
      this.state = {
        //// on peut mettre notre citation par défaut
      // afin d'avoir toujours une citation d'affichée
      quote: citation
      };
    }
  
  
  
  //Il faut maintenant déclarer la méthode get dans notre composant App qui fera l'appel à notre API
  
  getCitation () { 
  
    // Récupération de la citation via fetch
  
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=4")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data [0]
        });
    });
  
  }
  // Ensuite, récupération de l'action de notre clic sur notre bouton
  
  render () {
    return ( 
      <div>
        <GenerateCitation  selectQuote={() =>  this.getCitation()}  />
  
  
   {/* il reste  à modifier l'appel au composant DisplayEmployee afin qu'il affiche l'employé récupéré */}
  
        <DisplayCitation  quote={this.state.quote}  /> 
    </div>
    )}
  };
  
  export default App1;
  