function Image(props) {
    return (<div>
                <button onClick={() => props.shiftImage(-1)}>Prev</button>
                <img src={props.imageBank.images[props.imageBank.currentImgIndex]}/>
                <button onClick={() => props.shiftImage(+1)}>Next</button>
            </div> )
}

export default Image;