import React,{useState, useEffect} from 'react';

const Accordion = ({
    id,
    title,
    info,
    accordionId,
    setIdforAccordion
}) => {

    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow((prev) => !prev);
        setIdforAccordion(id);
    }

    useEffect(() => {
      if(accordionId){
        setShow(accordionId === id)
      }
    
    }, [id, accordionId])
    

  return (
    <div key={id}>
        <p>{title}</p>
        <button onClick={toggle}>
            {show ? '-' : '+'}
        </button>
        {
            show && (
                <p>{info}</p>
            )
        }
    </div>
  )
}

export default Accordion