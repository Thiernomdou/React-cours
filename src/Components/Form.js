import { useState } from "react";
import Item from "./Item";
//Librairie uuid pour avoir un id automatique pour chaque item du state
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

    //le state pour récupérer les items
    const [dataArr, setDataArr] = useState([
        { txt: "Promener le chien", id: uuidv4() },
        { txt: "Sport", id: uuidv4() },
        { txt: "Coder avec React", id: uuidv4() },
    ])

    //le state pour récupérer l'input pour l'ajout
    const [stateInput, setStateInput] = useState();

    console.log(dataArr);
    //fonction pour supprimer un item
    const deleteElement = id => {
        // console.log(id);
        //filter qui retourne un tableau et on remplie de tous les items  
        //qui auront un id différent de l'id sur le quel on vient de cliquer
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        //on change le state avec le nouveau state filtré (mis à jour)
        //retourner ceux qui ne sont pas cliqués
        setDataArr(filteredState);
    }

    //fonction pour récupérer la valeur saisie dans l'input
    const linkedInput = e => {
        setStateInput(e);
    }

    //fonction qui ajoute la valeur saisie dans notre todo-Liste
    const addTodo = e => {
        //actualiser
        e.preventDefault();
        //nouveau tableau avec tous les nouveaux éléments
        const newArr = [...dataArr];
        //ensuite on crée un nouvel objet
        const newTodo = {};
        //on ajoute les propriétes
        newTodo.txt = stateInput;
        newTodo.id = uuidv4;

        //on ajoute dans le nouveau tableau crée
        newArr.push(newTodo);
        //on change le state du 1er tableau et remplacer 
        //par le nouveau tableau
        setDataArr(newArr);
        //vider l'input avprès ajout
        setStateInput('');

        

    }



    return (
        <div className="m-auto px-4 col-12 col-sm10 col-lg-6">

            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="mt-3">Chose à
                    faire</label>
                <input 
                value={stateInput}
                onInput={e => linkedInput(e.target.value)}
                type="text" className="form-control" id="todo" />

                <button className="mt-2 btn btn-primary 
                d-block">Ajouter</button>
            </form>

            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item
                            monPropstxt={item.txt}
                            monPropsDelFunc={deleteElement}
                            monPropsid={item.id}
                        />
                    )
                })}
            </ul>

        </div>
    )

}