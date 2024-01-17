import './global.css'
import Navbar from './component/navbar';
import Games from './component/games';
import GhoInfo from './component/gho_info';

function App() {
  return (
    <>
    <div> 
      <Navbar />
      <GhoInfo />

      <hr></hr>

      <Games />
      
      <hr></hr> 

    </div>
    
    </>
  );
}

export default App