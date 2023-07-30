import Article from "./Article";

function Wardrobe(props) {
    return ( 
        <div>
            {props.articles.filter(a => a.color=="blue")
                    .map((a, i) => <Article key={"dds" + i} article={a}/>)}
        </div>
     );
}

export default Wardrobe;