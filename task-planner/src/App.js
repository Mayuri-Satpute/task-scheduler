import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">🗓 Task Planner</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
  );
}

export default App;
