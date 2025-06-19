import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './07reactRouter/components/Home/Home.jsx'
import Layout from './07reactRouter/Layout.jsx'
import About from './07reactRouter/components/About/About.jsx'
import Contact from './07reactRouter/components/Contact/Contact.jsx'
import User from './07reactRouter/components/User/User.jsx'
import Github , {githubInfoLoader} from './07reactRouter/components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>} />
      <Route path='*' element={<div>Not found</div>  }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
