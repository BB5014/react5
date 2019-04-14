import React from 'react';

const GenerateCitation = ({selectQuote}) => {
    return(
        <div className = "GenerateCitation">
        <button onClick = {selectQuote}>Citation</button>


        </div>
    );
};
export default GenerateCitation;