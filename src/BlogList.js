import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    const handleDelete = props.handleDelete

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b)=>{
                return <div className="blog-preview" key={b._id} >
                    <Link to={`/blogs/${b._id}`}>
                        <h2>{b.title}</h2>
                        <p>{b.author}</p>
                    </Link>
                </div>
            })}
        </div>
    );
}

export default BlogList;