import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Todo from './todolist/Todo.jsx'
import Home from './ecommerce/Home.jsx'
import First from './ecommerce/First.jsx'

createRoot(document.getElementById('root')).render(<First />)
