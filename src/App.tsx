import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Onboarding from "./pages/Onboarding"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
