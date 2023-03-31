import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardAdd from './CardAdicionar'
import ListItem from './ListItem'

function App() {
  const [tarefas, setTarefas] = useState([]);
  
  
  function CriarTarefa(){
    const tarefa = {
      id: 1,
      texto: tarefa,
      finalizado: false,
    }
  }
}

const tarefasFeitas = (Id) => {
  setTarefas(
    tarefas.map((tarefas) =>
    tarefas.finalizado = true 
    )
  );
  return(
    tarefas.map(tarefa => {
      <ListItem tarefa={tarefa} removerTarefa={(Id)=> console.log(Id)}></ListItem>
    })
  )
};

export default App
