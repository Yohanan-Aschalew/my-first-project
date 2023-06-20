
import './App.css';

function App() {
  return (
    <div className="App">
      <label>First Name : </label>
      <input 
        type="text" placeholder="first name"
      />
     <br/>
     <br/>
     
     <label>Last Name : </label>
      <input 
        type="text" placeholder="last name"
      />
      <br/>
      <br/>
      <label>Age : </label>
      <input 
        type="text" placeholder="age"
      />  
      
      <button>submit</button>
    </div>
  );
}

export default App;
