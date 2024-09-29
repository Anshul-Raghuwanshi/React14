// import React from 'react'

// const App = () => {
//   const submittHandler = (e) => {
//     e.preventDefault();
//     const user = {
//       username : e.target.username.value,
//       email : e.target.email.value,
//     }
    
//     console.log(user);
//   };
//   return (
//     <div>
//       <form onSubmit={submittHandler}>
//         <input type="username" placeholder="username" name="username" />
//         <input type="email" placeholder="email" name="email" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'
const App = () => {
  const [username, setusername] = useState("Vijeta");
  const changeHandler = (n) => {
    setusername(n);
  };

   // The changeHandler function is called when the button is clicked
  // The new username is passed as a parameter to the changeHandler function
  // The changeHandler function updates the state (username) to the new username value
  // The new username value is then displayed in the h1 tag
  // When the button is clicked, the state is updated to "Nikita" and the h1 tag displays "Nikita" as the new username value
  // This demonstrates how to use the useState hook in React to manage state in functional components
  // The useState hook returns a pair of values: the current state and a function to update it
  // The first value is the current state, and the second value is a function that can be used to update the state
  // The useState hook is a powerful tool in React that simplifies the management of state in functional components
  // It allows for more concise and readable code, and it helps to avoid bugs and maintain the state of the application correctly
  // The useState hook is widely used in React applications, and it is a great way to manage state in functional components
  
  

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={() => (changeHandler("Nikita"))}> click me!</button>
       {/* When clicked, calls changeHandler function */}  {/* changes username to "Nikita" */}  {/* This is a simple example of how to use useState hook in React */}  {/* useState hook is used to manage state in functional components */}  {/* In this case, it manages the username state */}  {/* When the button is clicked, the state is updated to "Nikita" */}  {/* The new state value is changed to "Nikita" */} 
    </div>
  )
}

export default App;
