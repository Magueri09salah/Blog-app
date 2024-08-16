import './App.css'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
// import Home from './pages/Home'
import Navbar from './components/Navbar'
// import Post from './pages/Post'
// import AddPost from './pages/AddPost'
// import UpdatePost from './pages/UpdatePost'

import { PostsList } from './features/posts/PostsList'
import { Post } from './features/posts/Post'

function App() {
 
  
  return (
    <>
      <Router>
      <Navbar />
        <div className='pages'>
        <Routes>
          <Route path="/" element={<PostsList />} /> 
          <Route path="/posts/:id" element={<Post />} /> 
        </Routes>
        
          {/* <Routes>    
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="posts/:id"
              element={<Post />}
            />
            <Route 
              path="/addPost"
              element={<AddPost />}
            />
            <Route 
              path="/updatePost"
              element={<UpdatePost />}
            />
          
          </Routes> */}
          {/* <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <PostsList />
                  </React.Fragment>
                )}
              />
              <Link to="/" />
        </Switch> */}
        </div>
      </Router>
    </>
  )
}

export default App
