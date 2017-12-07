
$.getJSON("https://data.cityofnewyork.us/resource/m6d4-riyp.json", function(result){
    /*    $.each(result, function(i, field){ });Optional conditional loop to retrieve JSON file */
 
var table=document.querySelector("table");

for(var i=0; i<result.length; i++){
	 var tr=$('<tr>');

		tr.append("<td>" +result[i].schooldbn+ "</td>");

		tr.append("<td>" +result[i].printedschoolname+ "</td>");
	
		tr.append("<td>" +result[i].neighborhood+ "</td>");
	
		tr.append("<td>" +result[i].address+ "</td>");

		tr.append("<td>" +result[i].telephone+ "</td>");
		
		tr.append("<td>" +result[i].name_prog1+ "</td>");
		
		tr.append("<td>" +result[i].independentwebsite+ "</td>");
	$(table).append(tr);
			}
        });
   


