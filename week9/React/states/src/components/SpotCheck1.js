import React from 'react';

const SpotCheck1 = () => {
    const logHover = function() {
          console.log("Button hovered");
    }
    return (
        <button onMouseOver={logHover}>Test</button>
    )
}

export default SpotCheck1;