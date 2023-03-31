export default function ListItem (props) {
    const {aoRemoverTarefa, tarefa} = props;
   
         // .... exemplo JSX que renderiza a tarefa
    return ( 
         <div>
         <h2>{tarefa.titulo} </h2>
         <button onClick={() => aoRemoverTarefa(tarefa)}> Remover </button>
         </div>
      ) 
   }