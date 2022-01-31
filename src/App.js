
import Item from "./Components/Item/Item";

function App() {

  /*le state c'est tous les données d'un composant
  et si le state change, le composant se met à jour*/


  // console.log(useState(10));

  return (
    <div className="App">
      <h1>Hello depuis App</h1>
      <Item />
    </div>
  );
}

export default App;