import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/layout';
import sideBar from './components/sideBar';
function App() {
  return (
    <Routes>
      <Route path="/" element ={<Layout />} />
    </Routes>
  );
}

export default App;
