import React from "react";
// __ добавил : __
import User from './User';
import photoJessica from './Jessica.png';

class App extends React.Component {
  render() {
    // return <User name="Jessica Doe" avatar="..." email="hello@jessica.com" />;

    return <User name="Jessica Doe" avatar={photoJessica} email="hello@jessica.com" />;
  }
}
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Привет! <code>src/App.js</code> Сохрани!
//         </p>
//         <a className="App-link" href="#" target="_blank">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
