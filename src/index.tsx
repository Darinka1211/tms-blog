import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {AddPost} from "./routers/AddPost/addPost";
import {Posts} from "./routers/Posts/posts";
import {Post} from "./routers/Post/post";
import { Search } from "./routers/Search/search";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
<Routes>
   <Route path="/" element={<App/>}></Route>
   <Route path="/posts" element={<Posts/>}></Route>
   <Route path="/posts/add" element={<AddPost/>}></Route>
   <Route path="/posts/:id" element={<Post/>}></Route>
   <Route path="/search" element={<Search/>}></Route>
   <Route path="*" element={
     <main style={{padding: "1rem"}}>
       <p>404 Not Found</p>
     </main>
   }></Route>

    </Routes>
</BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();