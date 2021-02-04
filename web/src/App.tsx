import React,{useState, useEffect} from 'react';
import api from './server/api';

interface IPosts {
  title: string;
  content: string;
}
 
function App() {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    api.get('/posts').then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
  }, [])

  return(
    <div>
      <h1>asdads</h1>
      {posts && posts.map(element => (
        <>
          <h1>{element.title}</h1>
          <p>{element.content}</p>
        </>
      ))}
    </div>
  )
}

export default App;
