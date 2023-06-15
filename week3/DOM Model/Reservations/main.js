const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}


function checkReservation() {
    const yourname = document.getElementById("name").value;
    const yournameLC = yourname.toLowerCase();
    const reactionLabel = document.getElementById("reaction")
    if (yournameLC in reservations){
        if (reservations[yournameLC].claimed) {
            reactionLabel.innerHTML = ("Sorry, it seems " + yourname + "'s reservation has already been claimed");
        } else {
            reactionLabel.innerHTML = ("Welcome " + yourname);
        }
    } else {
        // alert("Sorry, it seems there is no reservation for the name " + yourname)
        reservations[yournameLC] = {claimed: true}; // adding the new customer to reservations
        reactionLabel.innerHTML = ("Welcome, new customer " + yourname);
        console.log(reservations);
    };
    return true;

}
