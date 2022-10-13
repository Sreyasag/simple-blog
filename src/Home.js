import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, loading , error} = useFetch('/blogs')
  
    return ( 
        <div className="home">
            {/* {loading ? <div>loading...</div>:''} */}
            {loading && <div>loading...</div>}
            {data && <BlogList blogs={data} title="All blogs" ></BlogList>}
            {error && <div>{error.message}</div>}
        </div>
     );
}
 
export default Home;