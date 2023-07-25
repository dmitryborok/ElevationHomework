import {FINANCE, WEATHER, EMOTIONS} from "./consts.js"

const handleComplaints = function(complaint) {
    let s;
    switch (complaint.type) {
        case FINANCE: 
            s =  "Money doesn’t grow on trees, you know.";
            break;
        case WEATHER: 
            s =  "It is the way of nature. Not much to be done.";
            break;
        case EMOTIONS: 
            s =  "It’ll pass, as all things do, with time.";
            break;


    }
    console.log(s);
}

export { handleComplaints };