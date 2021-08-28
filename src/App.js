import React, {useState} from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  function handleInputValue(value){
    setTasks([...tasks, 
      {
      value,
      isCompleted:false
      }
    ])
  }

  function handleCallBack(name){
    const modifiedTasks = tasks.map((task)=>{
      if(task.value == name) {
        return{
          value: task.value,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    }) 
    setTasks(modifiedTasks)
  }

  return (
    <>
    <AddTasks handleCallBack={handleInputValue}/>
    <Tasks handleCallBack={handleCallBack} tasks={tasks}/>
    </>
  );
}

export default App;
