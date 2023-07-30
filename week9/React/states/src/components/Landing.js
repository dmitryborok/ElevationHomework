function Landing({data}) {
    const hottestItem = data.store.filter(item => item.hottest)[0];
    return ( <div>
        <p>Welcome, {data.user}</p>
        Our hottest item is {hottestItem.item} for ${hottestItem.price}
    </div> );
}

export default Landing;