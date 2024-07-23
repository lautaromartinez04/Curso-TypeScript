import{ useState } from 'react'
import { ListaTareas } from './ListaTareas'

export const ToDoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<String>("")

    const [listaTareas, setListaTareas] = useState<String[]>([])

    const handleAddTask = (e:React.FormEvent) => {
        e.preventDefault()
        if (nuevaTarea.trim() === "") return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea("")
    }

    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas=> tareas.filter((_, i) => i !== index))
    }

    return (
        <div className='container'>
            <h1 className='title'>Lista de Tareas</h1>
            <form className='form' onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={ e => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button type="submit"><i className="fa-solid fa-plus"></i></button>
            </form> 
            <hr className='separator'/>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
        </div>
    )
}