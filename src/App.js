import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import AddPostPage from './pages/AddPostPage';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import EditPostPage from './pages/EditPostPage';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path=":id" element={<PostPage/>}/>
        <Route path=":id/edit" element={<EditPostPage/>}/>
        <Route path="new" element={<AddPostPage/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<LoginPage/>}/>

        
      </Routes>
   /</Layout>
  );
}

export default App;
