import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Onboarding from "./pages/Onboarding"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Today from "./pages/Today"
import Upcoming from "./pages/Upcoming"
import StickyWall from "./pages/StickyWall"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Home />}>
            <Route index element={<Upcoming />}/>
            <Route path="today" element={<Today />}/>
            <Route path="sticky-wall" element={<StickyWall />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
