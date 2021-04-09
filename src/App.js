import { useSelector } from "react-redux";
import SubmitTask from "./components/SubmitTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { selectTaskList } from "./state/taskList/taskListSlice";

function App() {
  const taskListArr = useSelector(selectTaskList);
  console.log(taskListArr);

  return (
    <div className="App">
      <section>
        <h2 className="App-header">Assessment #2 - The Todo List</h2>

        {/* this is my list of tasks submitted*/}
        {taskListArr.map((item, id, index) => (
          <TaskList key={index} id={item.id} name={item.item} taskIndex={index} />
        ))}

        {/* this is my submit button*/}
        <SubmitTask />
      </section>
    </div>
  );
}
export default App;
