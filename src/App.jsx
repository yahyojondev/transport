

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import LessonTable from "./pages/lessonTable/LessonTable";
import SciencesList from "./pages/sciencesList/SciencesList";
import Tasks from "./pages/tasks/Tasks";
import Account from "./pages/account/Account";
// import LoginMain from "./pages/LoginMain";
import DownloadLogin from "./pages/downloadLogin/DownloadLogin";
import Serfetikat from "./pages/serfetikat/Serfetikat";
// import './App.css'
import './hikmatulloh.css'

function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
     </Route>
     
      <Route path="dars-jadvali" element={<LessonTable/>} />
      <Route path="fanlar" element={<SciencesList/>} />
      <Route path="vazifalar" element={<Tasks/>} />
      <Route path="account" element={<Account/>} />
      {/* <Route path="*" element={<NotFound/>}/> */}
      {/* <Route path="login" element={<LoginMain/>}/>  */}
      <Route path="login-serfetikat" element={<DownloadLogin/>}/> 
      <Route path="serfetikat" element={<Serfetikat/>}/> 
  </Routes>
  </>
  );
}

export default App;