import { useSelector } from 'react-redux';
import SubmitTask from './components/SubmitTask';

import './App.css';

import { selectTaskList } from './state/taskList/taskListSlice';

function App() {
  const taskListObj = useSelector(selectTaskList);
  console.log(taskListObj);

  return (
    <div className="App">
      <section>
        <h1>Assessment #2 - The Todo List</h1>
        <SubmitTask />
        {/* Use your React skills to generate the todoList from here using
        the code that already exists. */}
      </section>
    </div>
  );
}

export default App;
