import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const refreshTasks = () => {
    // Placeholder for refreshing tasks
  };

  return (
    <div className="container mx-auto p-4">
      <TaskList />
    </div>
  );
}

export default App;
