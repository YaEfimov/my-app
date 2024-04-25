
function Accordion(){
    return(
    <>
        <AccordionTitle/>
        <AccordionBody/>
      </>
    );
}

function AccordionTitle(){
    return(<>Menu</>);
  }
  
  function AccordionBody(){
    return <>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3 </li>
          </ul>
  </>
}

export default Accordion;