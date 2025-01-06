import React from 'react'

function Guesscheck( {secretnum,term}) {

  let result;

  if (term){
    if(term > secretnum){
      result = "Higher";
    }
    else if(term < secretnum){
      result = "Lower";
    }
    else if( term == secretnum){
      result = "Yipee! correct";
  
    }
    else{
      result = "Enter valid input";
    }
  }
  return (
    <h4 style={{fontSize:'15px',fontWeight:'400'}}>You Guessed : {result}</h4>
  )
}

export default Guesscheck