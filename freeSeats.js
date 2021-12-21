freeSeats = [15,20,25,30];
desiredSeat = 50;

function availableSeats(){
        if(freeSeats.indexOf(desiredSeat)>=0){
            console.log("Congratulations, seat number " + desiredSeat + " is available")
        }else{
            console.log("Sorry, seat number "+ desiredSeat +  " is busy, but there are still " + freeSeats.length + " available seats")
        }
    
}
console.log(availableSeats())
