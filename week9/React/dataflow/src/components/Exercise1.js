import { useState } from 'react';
import Image from './Image';

function Exercise1() {
    const [imageBank, setImageBank] = useState ({
        images: [
          "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
          "https://i.pinimg.com/236x/65/cc/82/65cc829f0573996670432121f36895d5.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImgIndex: 0
      })
    
      const shiftImage = function(shift) {
        let newImageBank = {...imageBank};
        newImageBank.currentImgIndex = (imageBank.currentImgIndex + newImageBank.images.length + shift) % newImageBank.images.length;
        setImageBank(newImageBank);
     }
    
     return ( 
        <Image imageBank={imageBank} shiftImage={shiftImage}/>
      );
}

export default Exercise1;