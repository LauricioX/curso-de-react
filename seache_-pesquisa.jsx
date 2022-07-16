app

import { Component } from "react"; 

import "./App.css"

import { loadPosts } from "../FunctionsOut/loadPosts"
import  Post from "../components/Posts/index"
import { Button } from "../components/Button";
import { Input }  from "../components/Input";

class App extends Component {

  state = {
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage:4,
    searchValues:""
  }


 async componentDidMount(){
  await  this.loadPosts();
  }


  loadPosts = async () =>{
  const { page,postsPerPage } = this.state;


   const postsPhotos = await loadPosts();
   this.setState({
     posts:postsPhotos.slice(page,postsPerPage),
     allPosts:postsPhotos
    })

   
  }

loadMorePosts = () =>{
  const {
    page,
    postsPerPage,
    allPosts,
    posts
  } = this.state

  const nextPage = page + postsPerPage;
  const nextPosts = allPosts.slice(nextPage,nextPage + postsPerPage)
  posts.push(...nextPosts);

  this.setState(
    { posts,page: nextPage }
  )
}


handleChange = (e) =>{
 const { value } = e.target
 this.setState( {searchValues:value})
}


  render(){
      const { posts , page, postsPerPage, allPosts, searchValues } = this.state;
      const noMorePosts = page + postsPerPage >= allPosts.length;

      const filteredPosts  = !!searchValues ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValues.toLowerCase()
        );
      })
      : posts;


    return(
      <section className="container">
        {!!searchValues &&  (
          <>
        <h1> serach value {searchValues}</h1>
          </>
        )}
        <br/>
        <Input  handleChange={this.handleChange} searchValues={searchValues}/>

       
        {filteredPosts.length > 0 && (
       <Post post={filteredPosts}/>

        )}
        {filteredPosts.length  === 0 && (
         <p>nao existem posts</p>
        )}

       {!searchValues && (
       <Button disabled={noMorePosts} onClick={this.loadMorePosts} text="ler mais"/>

       )}
      </section>
      
    )
  }
}

export default App;




============================================
  
  
  
  posts

import  { PostCard } from "../PostCard"
import "./styles.css"

export default function Post({ post }){
    return(
        <div className="posts">
        {post.map(posts => (
        <PostCard 
        key={posts.id}
        title={posts.title}
        body={posts.body}
        id={posts.id}
        cover={posts.cover}
        />
        
        ))}
        </div>
    )

  
}



==========================================================
  
  post Card
  
  
  export const PostCard = ({id, title,body,cover}) => {
    return(
       <div  className="post">
       <img src={cover} alt={title}/>
        <div  className="posts_content">
        <h1 > {id} {title}</h1>
        <p>{body}</p>

       </div>
     </div>

    )
}
  


==========================================
  input search
  
  import "./styles.css"
export const Input = ({searchValues,handleChange}) =>{
    
    return(
        <div className="container__input">
         <input placeholder="pesquisar" value={searchValues} onChange={handleChange} type="search"/>
        </div>
    )
}



=============================================================
  
  
  
  import { Component } from "react";
import "./styles.css"

export class Button extends Component{
  

    render(){
        const { text, onClick,disabled } = this.props
        return(
         <button disabled={disabled} onClick={onClick}>{text}</button>
        )
    }
}



