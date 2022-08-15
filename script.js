// Goal: Create a variable for the event date and today's date. Then get the values for both variables and subtract it to find out time remaining. Display the time remaining in the form of _d _h _m _s, and if the event date has past, show "Expired".

// PSEUDO-CODE:

// Create a variable for the event date and today's date
    let eventDate;
    let now;

// Create countdown event timer:
    // Create a click event on the submit button to trigger countdown
    $("#submit").on("click", function (event) {
        // Remove the page refresh when button is clicked
        event.preventDefault();
        // Convert user's submitted event date from the form to its Epoch timestamp, then convert to local time timestamp
        const userInput = $("#dateForm").val();
        eventDate = (Date.parse(userInput)) + 14400000; // <-- need to add 4 hours in ms to covert from GMT to EDT
        // Create interval to change every second or 1000ms
        setInterval (function () {
            // Get today's date
            now = new Date();
            // Find difference between today's date and event date
            const diff = eventDate - now;
            // Covert diff from Epoch timestamp to days, hours, minutes and seconds 
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const mins = Math.floor(diff / (1000 * 60));
            const secs = Math.floor(diff / 1000);
            // Calculate days, hours, mins, and secs remaining
            const d = days;
            const h = hours - (days * 24);
            const m = mins - (hours * 60);
            const s = secs - (mins * 60);
            // Display the countdown on the page
            $("#timer").text(`${d}d ${h}h ${m}m ${s}s`);
            // Display "Expired" for event dates that have passed
            if (diff <= 0) {
                $("#eventName").text("Your Event Is:"); 
                $("#timer").text("Expired"); 
                setTimeout(function(){
                    window.location.reload();
                 }, 3000);
            }
        }); 
    });
