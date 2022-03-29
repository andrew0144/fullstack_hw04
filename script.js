
$(document).ready(function(){
    var cost;
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
        if($.fn.validateCost()=== false) return;
        $.fn.validateEntries();

        toastr["success"]("Successfully Submitted!", "", {"positionClass": "toast-bottom-right"});
    });

    $.fn.validateCost = function(){
        if($("#cost").val() != false && cost > 0) return;
        else
            if(cost < 0){
                toastr["error"]("Cost was negative", "", {"positionClass": "toast-bottom-right"});
                return false;
            }
            if(cost === 0){
                toastr["error"]("Cost was zero", "", {"positionClass": "toast-bottom-right"});
                return false;
            }
             toastr["error"]("No cost was calculated. Please fill out the whole form.", "", {"positionClass": "toast-bottom-right"});
             return true;
    }

    $.fn.validateEntries = function(){
        
    }
  });