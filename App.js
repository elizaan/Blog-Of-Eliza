// import './App.css';
import Navigation from './Navigation';
import Home from './Home';

function App() {
   return (
    <div className="App">
        <Navigation></Navigation>
      <div className="content">
          <Home/>
        {/* <h1>App Component</h1> */}
      </div>
    </div>
  );
}

export default App;