import './App.css';
import Card from './card';


function App() {
  const dog= new URL("./images/dogy.png",import.meta.url);
  return (
    <div className="App">
        <img src={dog} className="picture"/>
        <Card></Card>
    </div>
  );
}

export default App;
