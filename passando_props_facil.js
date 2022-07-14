import { Component } from "react";  
import "./App.css"
import { PostCard } from "./components/PostCard";

class App extends Component {

  state = {
    posts:[]
  }


  componentDidMount(){
   this.loadPosts();
  }


  loadPosts = async () =>{
   const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
   const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")


   const [posts,photos ] = await Promise.all([postResponse,photosResponse]);

   const postJson = await posts.json();
   const photosJson = await photos.json();

   const postsPhotos = postJson.map((posts, index) =>{
    return { ...posts, cover:photosJson[index].url }
   });

   this.setState({ posts:postsPhotos})

   
  }
  render(){
      const { posts } = this.state
    return(
      <section className="container">
       <div className="posts">
       {posts.map(posts => (
       <PostCard
        key={posts.id}
        title={posts.title}
        body={posts.body}
        id={posts.id}
        cover={posts.cover}
       
       />
         )
        )}
      </div>
        
      </section>
      
    )
  }
}

export default App;


=========================================================================================================================
  
  
  
  
  
export const PostCard = ({title, cover, body, id}) =>{
  
    return(
        <div  className="post">
          <img src={cover} alt={title}/>
           <div  className="posts_content">
           <h1 > {title}</h1>
           <p>{body}</p>
  
          </div>
        </div>

    )
}
