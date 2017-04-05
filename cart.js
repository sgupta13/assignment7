$(document).ready(function() {
$("input[name='payment-choice']:radio").change(
	function(){
		if ($("#credit-card").is(":checked")) {
			$("#payment").empty();
			var txt1 = 'Card Number:<input type="number" name="cardNum" maxlength="16" size="16"></input>';
			var txt2 = 'Expiration:<input type="number" name="expMon" maxlength="2" size="2"></input>/<input type="number" name="expYr" maxlength="2" size="2"></input>';
			var txt3 = '3-digit security number:<input type="number" name="secNum" maxlength="3" size="3"></input>';
			$("#payment").append(txt1,txt2,txt3);
		} else if ($("#wire-transfer").is(":checked")) {
			$("#payment").empty();
			$("#payment").append("Transfer the amount to: reg. $957.00, to account 0009286322 (in English)");
		}
	});
   $('.removable').children('li').draggable({
    revert: true
    });

   $('.trash').droppable({
    drop: function(event, ui){
      if (confirm("Do you want to delete this item?")) {
        ui.draggable.remove();
      }
      return false;
    }
   });
});

function loadItem(item){
  var xhttp = new XMLHttpRequest();
  if (item == 1){
    xhttp.open("GET", "cooker.txt", true);
  } else if (item == 2){
    xhttp.open("GET", "cuttingkit.txt", true);
  } else if (item == 3){
    xhttp.open("GET", "floormate.txt", true);
  } else if (item == 4){
    xhttp.open("GET", "oliveshampoo.txt", true);
  } else if (item == 5){
    xhttp.open("GET", "olivetreat.txt", true);
  }

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200){
      if (item == 1){
        document.getElementById("cooker").innerHTML = xhttp.responseText;
      } else if (item == 2){
        document.getElementById("cuttingkit").innerHTML = xhttp.responseText;
      } else if (item == 3){
        document.getElementById("floormate").innerHTML = xhttp.responseText;
      } else if (item == 4){
        document.getElementById("oliveshampoo").innerHTML = xhttp.responseText;
      } else if (item == 5){
        document.getElementById("olivetreat").innerHTML = xhttp.responseText;
      } 
    }
  };
  xhttp.send();
}