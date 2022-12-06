import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Route';
export const webName = 'tree-pagla';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
