import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Onboarding from "./pages/Onboarding"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Today from "./pages/Today"
import Tomorrow from "./pages/Tomorrow"
import ThisWeek from "./pages/ThisWeek"
import StickyWall from "./pages/StickyWall"
import Events from "./pages/Events"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Home />}>
              <Route index element={<Today />}/>
              <Route path="tomorrow" element={<Tomorrow />}/>
              <Route path="this-week" element={<ThisWeek />}/>
              <Route path="sticky-wall" element={<StickyWall />}/>
              <Route path="events" element={<Events />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
