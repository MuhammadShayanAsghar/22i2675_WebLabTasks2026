
//Task 2

var attendees = [];

function addAttendee(name, email, ticketType){

    var attendee = {name, email, ticketType}

    attendees.push(attendee);
}

addAttendee("shayan", "shayan@email.com", "General");
addAttendee("Shayan", "shayan1@email.com", "VIP");

function isFull(){
    let size = attendees.reduce((total) => total + 1, 0);
    if (size >= 100){ 
        console.log("is Full");
        return true;
    }
    else {
        console.log("is not Full");
        return false;
    }
}

function listAttendees(){
    attendees.forEach((attendee, registeration) => {

        console.log("Attendee ", registeration +1, attendee);

    });
}
listAttendees();
var full = isFull();
console.log(attendees);
console.log(full);
