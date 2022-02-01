
// import Item from "./Components/Item/Item";
import { useState } from "react";
function App() {

  /*le state c'est tous les données d'un composant
  et si le state change, le composant se met à jour*/

  // const [toggle, setToggle] = useState(true);

  // const changeState = () => {
  //   setToggle(!toggle);
  // }

  // const [dataArr, setDataArr] = useState([
  //   {nom: "Juliette"},
  //   {nom: "John"},
  //   {nom: "Joris"},
  // ]);

  return (
    <div className="App">
      {/* {toggle ? <h1>Le state est True</h1> :
        <h1>Le state est False</h1>} */
        // <div className={toggle ? "box animated" : "box"}></div>
        //map crée un nouveau tableau avec tous les
        //éléments à retourner à l'intérieur
        // dataArr.map((item,index) => {
        //   return <p key={index}>Nom: {item.nom}</p>
        // })
      }
    </div>
  );
}

export default App;