import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Onboarding from "./pages/Onboarding"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
