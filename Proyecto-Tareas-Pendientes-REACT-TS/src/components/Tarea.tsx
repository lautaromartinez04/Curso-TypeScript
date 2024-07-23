type Tarea = {
    tarea: String,
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Tarea) => {
  return (
    <div className='task'>
        <span>{tarea}</span>
        <button onClick={() => borrarTarea()}><i className="fa-solid fa-trash"></i></button>
    </div>
  )
}