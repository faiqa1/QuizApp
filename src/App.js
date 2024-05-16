import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter, 
  Routes, Route
} from 'react-router-dom'
import Signup from './Components/Login-Signup/Signup';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login-Signup/Login';
import Quiz from './Components/Quiz/Quiz';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import PrivateComponent from './Components/PrivateComponets/PrivateComponent';
import Choice from './Components/Choice/Choice';
import StudentSignup from './Components/Student/StudentSignUp';
import TeacherSignup from './Components/Teacher/TeacherSignUp';
import TeacherLogin from './Components/Teacher/TeacherLogin';
import StudentLogin from './Components/Student/StudentLogin'
import TeacherHomePage from './Components/Teacher/TeacherHomePage';
import StudentHomePage from './Components/Student/StudentHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
       <Routes>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/choice' element={<Choice/>}/>
        <Route path='/studentsignup' element ={<StudentSignup/>}/>
        <Route path='/teachersignup' element ={<TeacherSignup/>}/>
        <Route path='/studentlgin' element ={<StudentLogin/>}/>
        <Route path='/teacherlogin' element ={<TeacherLogin/>}/>
        <Route path='/studenthomepage' element={<StudentHomePage/>}/>
        <Route path='/teacherhomepage' element={<TeacherHomePage/>} />
       </Routes>
       <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
