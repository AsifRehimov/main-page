import './App.css';
import Header from '../src/components/header'
import Filter from '../src/components/Filter'
import Footer from './components/Footer';

function App() {
  return (
   <>
   <div className="body">
    <Header/>
    <Filter/>
    <Footer/>
   </div>
   </>
  );
}

export default App;
