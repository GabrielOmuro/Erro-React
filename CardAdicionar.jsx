import {useState} from 'react';
import ListItem from './ListItem'


function CardAdd(){
    const [tarefa, setTarefa] = useState();
    
    return(
    <div>
        <input type="text" value="tarefa" />
        <button onClick={aoRemoverTarefa}>Remover Tarefa</button>
    </div>
    )
}

export default CardAdd