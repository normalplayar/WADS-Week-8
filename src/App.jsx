import { TodoWrapper } from './components/TodoWrapper';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';

function App() {

  return (
    <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/todo' element={<TodoWrapper />}></Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App
