
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
        $(".has-error").removeClass("has-error");
        toastr["info"]("Successfully reset all fields", "", {"positionClass": "toast-bottom-right"});
    });
    
    $("#submit-button").click(function(){
        $(".has-error").removeClass("has-error");
        if($.fn.validateCost()=== false) return;
        if($.fn.validateEntries()=== false) return;
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
             toastr["error"]("No cost was calculated.", "", {"positionClass": "toast-bottom-right"});
             return true;
    }

    $.fn.validateEntries = function(){
        var val = true;
        if( $("#username").val().length === 0){
            toastr["error"]("username field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#usernameDiv").addClass("has-error");
            val = false;
        }
        if( $("#fax").val().length === 0){
            console.log($("#fax").val());
            toastr["error"]("fax field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#faxDiv").addClass('has-error');
            val = false;
        }
        if( $("#phone").val().length === 0){
            console.log($("#phone").val());
            toastr["error"]("phone field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#phoneDiv").addClass('has-error');
            val = false;
        }
        if( $("#firstname").val().length === 0){
            toastr["error"]("firstname field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#firstnameDiv").addClass('has-error');
            val = false;
        }
        if( $("#lastname").val().length === 0){
            toastr["error"]("lastname field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#lastnameDiv").addClass('has-error');
            val = false;
        }
        if( $("#email").val().length === 0){
            toastr["error"]("email field missing.", "", {"positionClass": "toast-bottom-right"});
            $("#emailDiv").addClass('has-error');
            val = false;
        }
        return val;
    }
  });