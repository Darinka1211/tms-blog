import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
    
      {/* <nav>
        
          <Link to="/posts">Posts</Link>
          <Link to="/posts/1">Post 1</Link>
          <Link to="/posts/add">Add post</Link>
          <Link to="/search">Search</Link>
        
      </nav> */}
      
    </div>
  );
}

export default App;
