

const Post = ({params}) => {
    
    return (
      <div>
        <h1>Blog Post {params.id}</h1>
        <p>This is the content for blog post {params.id}.</p>
      </div>
    );
  };
  
  export default Post;