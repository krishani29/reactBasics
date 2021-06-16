import React from 'react';
import Jokes from './Jokes';
import JokeData from './JokeData';

function JokeApp() {
    const jokecompo = JokeData.map((joke) =>  <Jokes key={joke.id} question={joke.question} answer={joke.answer} />)
  
    return (
    <div class="jokeapp center">
    <h1>Jokes....</h1>
        {/* <Jokes 
           answer="Tit for tat"
          />
          <Jokes 
            question="What is best thing about me" answer="either i Don't know"
          />
          <Jokes 
          question="Have you listned about restraunt 'Karma' ?" answer="Yes, it may have menu what you deserve"
          />
          <Jokes 
          question="What is reason behind global warming" answer="surely i'm not that one"
          />
          <Jokes 
          question="Do you know about mission mars" answer="i'm wondering you are alien"
          />
          <Jokes 
          question="What is your relationship status?" answer="even i don't know"
          /> */}
          {jokecompo}
    
        </div>
      );
    
    }
    
    export default JokeApp;