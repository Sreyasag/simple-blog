import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  const handleSubmit = (e)=>{
    
    e.preventDefault()
    setLoading(true)
    const blog = {title, body, author}

    fetch('/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(blog)

    }).then((data)=>{
      history.push('/')
      setLoading(false)

    }).catch((err)=>{
      console.log(err);
      setLoading(false)

    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog</button>}

      </form>
    </div>
  );
}
 
export default Create;