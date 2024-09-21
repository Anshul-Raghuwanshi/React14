import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
function App() {
  let data = "hello this is data from the server";
  let subject = [ "hindi", "english", "math"];
  let profile = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  return (
      <div>
        <Home/>
        <About/>
        <Nav/>
        <h1>{data}</h1>
        <h1>{subject}</h1>
        <h1>{profile.name}</h1>
        <h1>{profile.age}</h1>
        <h1>{profile.city}</h1>
      </div>  
)}

export default App