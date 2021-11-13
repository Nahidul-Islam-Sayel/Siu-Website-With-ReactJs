import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componant/Header/Header';
import Animation from './Componant/Animation/Animation'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Left from './Componant/Left/Left';
import './App.css';
import Right from './Componant/Right/Right';

import Responsive from './Componant/Alice/Responsive';
import News from './Componant/News/News';
import Message from './Componant/Message/Message';
import Syllabus from './Componant/Sylebus/Syllabus';
import Teacher from './Componant/Teacher/Teacher';

function App() {
  return (
    <div className="App">
    
      <Header/>
   <Animation/>
      <div className="three">
        <Left/>
     <Right/>
      </div>
  <div className="res">
  <Responsive/>
    </div>  
<div className="res">
<News/>
</div>
<div className="hig">
<Message/>
</div>
<div className="syllabus">
<Syllabus/>
</div>

<Teacher/>

    </div>
  
  );
}

export default App;
