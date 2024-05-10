import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import SignUp from "./pages/SignUp.tsx";
import Home from "./pages/Home.tsx";
import Settings from "./pages/Settings.tsx";
import ForgottenPassword from "./pages/ForgottenPassword.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Tasks from "./pages/Tasks.tsx";
import Calendar from "./pages/Calendar.tsx";
import Notifications from "./pages/Notifications.tsx";


export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/reset-password/:id" element={<ResetPassword />}/>
          <Route path="/dashboard" element={<Home />}>
            <Route index element={<Tasks />}/>
            <Route path="calendar" element={ <Calendar /> }/>
            <Route path="notifications" element={<Notifications/>}/>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
