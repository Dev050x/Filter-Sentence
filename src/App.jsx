import { useState } from 'react';
import './App.css'
import { useMemo } from 'react';

function App() {
  const words = ["hi" , "my" , "name" , "is" , "for" , "to","random","word"];
  const sentences = [];
  for(let i=0; i<1000; i++){
    let sentence = "";
    for(let j=0; j<words.length; j++){
      sentence += words[Math.floor(Math.random() * words.length)];
      sentence += " ";
    }
    sentences.push(sentence);
  }

  const [filter , setFilter] = useState("");
  const [allsentences , setAllSentences]  = useState(sentences);
  
  const filterSentences =  useMemo(() => {
    return allsentences.filter(x => x.includes(filter));
  },[allsentences,filter]);
  
  
  return (
    <div>
      <input type="text" placeholder='filter the word' onChange={(e) => {
        setFilter(e.target.value);
        console.log(filter);
      }}/>
      
          {filterSentences.map((sentence,ind) => {
            return <div key={ind}> 
              {sentence}
            </div>
          })}
      
    </div>  
  )
}

export default App
