import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams()
    const {data, error, isPending } = useFetch(('/blogs/'+ id))
    const history = useHistory()

    const handleDelete = ()=>{
        fetch('/blogs/'+ id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;