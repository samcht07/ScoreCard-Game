$("#search").keydown(function(){
$.getJSON("https://data.cityofnewyork.us/resource/m6d4-riyp.json", function(result){
var search = $('#search').val();
var expression = new RegExp(search, 'i');
var output;
output+="<tr>";
		output+="<th>" +"SchoolIDN"+ "</th>";
		output+="<th>" +"School Name"+ "</th>";
		output+="<th>" +"City"+ "</th>";
		output+="<th>" +"Address"+ "</th>";		
		output+="<th>" +"Name_Prog1"+ "</th>";
		output+="<th>" +"Phone"+ "</th>";
		output+="<th>" +"Website"+ "</th>";		
		output+="</tr>";

$.each(result, function(key, val){
	if((val.schooldbn.search(expression)) != -1 || (val.printedschoolname.search(expression)) != -1 ||
         (val.neighborhood.search(expression)) != -1){
		output+="<tr>";
		output+="<td id='"+key+"'>"+val.schooldbn+"</td>";
		output+="<td id='"+key+"'>"+val.printedschoolname+"</td>";
		output+="<td id='"+key+"'>"+val.neighborhood+"</td>";
		output+="<td id='"+key+"'>"+val.address+"</td>";
		output+="<td id='"+key+"'>"+val.telephone+"</td>";
		output+="<td id='"+key+"'>"+val.name_prog1+"</td>";
		output+="<td id='"+key+"'>"+val.independentwebsite+"</td>";
		output+="</tr>";
	}

});

$('tbody').html(output);
});

})


