import React,{useState} from 'react';
import './App.css';
import questions from './data';
import Accordion from './Accordion';

const App = () => {
  const[multiple, setMultiple] = useState(true);
  const[accordionId , setAccordionId] = useState(null);
  const setIdforAccordion = (id = null) => {
    setAccordionId(multiple ? null : id)
  }

  const onMultipleChange = () => {
    if(multiple){
      setAccordionId(-1);
    }
    setMultiple((prev) => !prev);
  }
  return (
    <div className='App'>
      <h4>
        <label htmlFor='multipleCheck'>Is multiple open accordion allowed?</label>
        <input id='multipleCheck' type='checkbox' checked={multiple} onChange={onMultipleChange} />
      </h4>
      {
        questions.map((question) => {
          return (
            <Accordion accordionId={accordionId} setIdforAccordion={setIdforAccordion} key={question.id} {...question} />
          )
        })
      }
    </div>
  )
}

export default App;