import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Accordion/Rating';



function App() {
  return (
    <div>
      <PageTitle title = {"This is APP component"}/>
      <PageTitle title = {"Users"}/>
      Article 1
      <Rating value={3}/>
      <Accordion title = {"This is the first menu"}/>
      <Accordion title = {"This is the second menu"}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

function PageTitle(props: any){
  return <h1>{props.title}</h1>
}

export default App;
