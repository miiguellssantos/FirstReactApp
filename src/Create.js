import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Luigi')
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();
       const blog = {title, body, author}

       setIsLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added!');
            setIsLoading(false);
            history('/')
        })

        
    }
    
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}         
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}  
                />
                
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isLoading && <button>Add blog</button>}
                { isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;