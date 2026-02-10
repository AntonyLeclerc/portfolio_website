import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import ProjectPage from './ProjectPage'
import MainPage from './MainPage'
import Hobbies from './Hobbies'
import Contact from './Contact'

function App() {
  const [currentPage, setCurrentPage] = useState("main_page")

  return (
    <>
      <NavBar
      text="Ceci est un autre test"
      test={setCurrentPage}
      />

      <div id="page_content">
        {currentPage === "main_page" && <MainPage />}
        {currentPage === "project_page" && <ProjectPage />}
        {currentPage === "hobbies_page" && <Hobbies />} 
        {currentPage === "contact_page" && <Contact />} 
      </div>

    </>
  )
}

export default App
