
import './App.css';
import LabTabs from './components/AboutMe';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
    <div>
    <LabTabs />
    </div>
    </div>
  );
}

export default App;
