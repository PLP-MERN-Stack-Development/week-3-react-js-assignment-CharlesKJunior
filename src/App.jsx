import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiDataPage from './pages/ApiDataPage';
import './App.css';

/**
 * Main App component
 * @returns {JSX.Element} The root application component
 */
function App() {
  const [count, setCount] = useState(0); // Keeping your counter state if you still want it

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          {/* Optional: You can keep your counter demo in a separate route if you want */}
          <Routes>
            <Route path="/" element={
              <div className="space-y-8">
                {/* Task Manager Section */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
                  <TaskManager />
                </div>

                {/* Counter Demo (optional - can remove) */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4 my-4">
                      <button
                        onClick={() => setCount((count) => count - 1)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold dark:text-white">{count}</span>
                      <button
                        onClick={() => setCount((count) => count + 1)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;