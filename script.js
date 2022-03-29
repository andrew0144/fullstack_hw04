
$(document).ready(function(){
    var cost = -1;
    $("#check-in, #check-out, #adults").change(function(){
        var checkin = new Date($("#check-in").val());
        var checkout = new Date($("#check-out").val());
        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
        // Calculating the time difference between two dates
        const diffInTime = checkout.getTime() - checkin.getTime();
        const numDays = Math.round(diffInTime / oneDay);
        $("#days").val(numDays);

        cost =  150 * $("#adults").val() * numDays;
        $("#cost").val("$"+ cost);
    });

    $("#reset-button").click(function(){
        toastr["info"]("Successfully reset all fields", "", {"positionClass": "toast-bottom-right"});
    });
    
    $("#submit-button").click(function(){
        $.fn.validateCost();
        
    });

    $.fn.validateCost = function(){
        console.log(typeof cost);
        if($("#cost").val() != false && cost >= 0) return;
        else
            toastr["error"]("No cost was calculated. Please fill out the whole form.", "", {"positionClass": "toast-bottom-right"})
    }
  });