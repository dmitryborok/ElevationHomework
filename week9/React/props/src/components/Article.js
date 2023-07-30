function Article(props) {
    return ( 
        <div>{props.article.type} {props.article.color} {props.article.size}</div>
     );
}

export default Article;