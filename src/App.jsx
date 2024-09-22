function App() {
  let users = [{
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id:2,
    name:"Era",
    age: 24,
  },
  {
    id: 3,
    name: "Joe",
    age: 33,
  }
];
 let users1 = [{
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id:2,
    name:"Era",
    age: 24,
  },
  {
    id: 3,
    name: "Joe",
    age: 33,
  }
];

  const r = users.map((u)=> <h1 key= {u.id}>{u.name} - {u.age}</h1>);
  const r1 = users1.map((u)=> <h1 key= {u.id}>{u.name} - {u.age}</h1>);

  return (
      <div>
        <h2>{r}</h2>
        <h2>{r1}</h2>   
      </div>  
)}

export default App;