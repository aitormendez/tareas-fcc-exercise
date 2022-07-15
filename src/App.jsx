import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import Tarea from './componentes/Tarea';
 
function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
