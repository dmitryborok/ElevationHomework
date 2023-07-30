import Item from "./Item";

function Home(props) {
    let coeff = props.shouldDiscount ? 0.9 : 1;
    return ( <div>
        {props.store.map((item, i) => 
            <Item key={i} item={item.item} 
            price={item.price * coeff}/>)}
    </div> );
}

export default Home;