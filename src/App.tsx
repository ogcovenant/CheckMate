import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Onboarding from "./pages/Onboarding"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
