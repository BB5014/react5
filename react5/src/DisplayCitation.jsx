import React from 'react';


const DisplayCitation = ({quote}) => {
    return (
        <div className="DisplayCitation">
             <img src= {quote.image} alt="" /> 
            <ul>
                
                <li>
                    character : {quote.character}              
                </li>
                <li>characterDirection : {quote.characterDirection}</li>
            
            </ul>        
         </div>
    );
};
export default DisplayCitation;

