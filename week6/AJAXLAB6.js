var Employees = null;
var Hps = null;
var HAvgps = null;

var WebAvg = 0
var DatabaseAvg = 0
var SoftwareAvg = 0
var Danalysts = [];
var Wdevelopers = [];
var Sengineers = [];
var people = null;
var DA = null;
var  Dbase = null;
var  SoftwareD = null;


$("document").ready(function(){

	//alert("HEllo world")

	$.ajax({url:" http://ict.neit.edu/evanrense/salaries.php", success:function(result){
       // console.log(result);
        
        people = JSON.parse(result);
        console.log(people)

		//teams = result;
		for(var i=0; i< people.length;i++){

            if (people[i].jobTitle == "Software Developer"){ 
            


                Sengineers.push(people[i])
			//seavg += result.data[i].salary;
        }
        
        else if (people[i].jobTitle == "Web Developer"){ 
            Wdevelopers.push(people[i])
            

        }

        else { 
            Danalysts.push(people[i]);
            
        }
        

		}


		console.log(Danalysts)
		
        console.log(Wdevelopers)
        
        console.log(Sengineers)

        WebD ();
        database();
        Software();
        green();

$("#list-database-analyst").click(DatabaseAnalyst);

$("#list-web-developer").click(WebDeveloper);

$("#list-software-engineer").click(SoftwareDeveloper);

$("#search-submit").click(search);
}


})




})



//function listEast
function DatabaseAnalyst(){

	var list =""

	for(var i=0; i< Danalysts.length;i++){

        list += Danalysts[i].name.first + " "
        list += Danalysts[i].name.last + " $"
        list += Danalysts[i].salary +  "<br/>"
        
	}

	$("#list-output").html(list);



}

//function listWest
function WebDeveloper(){

	var list =""

	for(var i=0; i< Wdevelopers.length;i++){

        list +=  Wdevelopers[i].name.first + " "
        list +=  Wdevelopers[i].name.last + " $"
        list +=  Wdevelopers[i].salary +  "<br/>"
        
	}

	$("#list-output").html(list)

}

function SoftwareDeveloper(){

	var list =""

	for(var i=0; i< Sengineers.length;i++){

        list +=  Sengineers[i].name.first + " "
        list +=  Sengineers[i].name.last + " $"
        list +=  Sengineers[i].salary +  "<br/>"
	}

	$("#list-output").html(list)

}

///******************
function search(){
    var Fname = ($("#first-name").val());
    var Lname = ($("#last-name").val());
    
	for(var i=0; i< people.length; i++){
		if (people[i].name.first ==  Fname){

            
         
        
        if(people[i].name.last ==  Lname)


        $("#search-output .output").html("$" + people[i].salary);
    }
    
}
}


////////******
function  WebD(){
    var fisrtName = ""
    var lastName = ""
    var sum = 0;
for (var i=0; i< Wdevelopers.length; i++){
sum += parseFloat(Wdevelopers[i].salary);
if ( DA < Wdevelopers[i].salary){
    
    DA = Wdevelopers[i].salary

    fisrtName =  Wdevelopers[i].name.first
    lastName = Wdevelopers[i].name.last
}
//console.log(Wdevelopers[i])

WebAvg = sum / Wdevelopers.length;
$("#web-developer-area .first").html(fisrtName);
$("#web-developer-area .last").html(lastName);
$("#web-developer-area .highest").html("$" + DA);
$("#web-developer-area .average").html("$" + WebAvg.toFixed(2));

}
};


function database(){
    var firstName = "";
    var lastName = "";
    var sum = 0;
    for (var i=0; i<Danalysts.length; i++){
        sum += parseFloat(Danalysts[i].salary);
        if ( Dbase < Danalysts[i].salary){
         
            Dbase = Danalysts[i].salary
        
            firstName =   Danalysts[i].name.first
            lastName = Danalysts[i].name.last
        
        }

DatabaseAvg = sum / Danalysts.length;
$("#database-analyst-area .first").html(firstName);
$("#database-analyst-area .last").html(lastName);
$("#database-analyst-area .analysthighest").html("$" + Dbase);
$("#database-analyst-area .averageanalyst").html("$" + DatabaseAvg.toFixed(2));



    }
    
}

function Software(){

    var firstName = ""
    var lastName = ""
    var sum = 0;
    for (var i=0; i<Sengineers.length; i++){
        sum += parseFloat(Sengineers[i].salary);

        if ( SoftwareD < Sengineers[i].salary){
         
            SoftwareD = Sengineers[i].salary
        
            firstName =   Sengineers[i].name.first
            lastName = Sengineers[i].name.last
        
        }

        SoftwareAvg = sum / Sengineers.length;
$("#software-engineer-area .first").html(firstName);
$("#software-engineer-area .last").html(lastName);
$("#software-engineer-area .highest").html("$" + SoftwareD);
$("#software-engineer-area .average").html("$" + SoftwareAvg.toFixed(2));



    }


}


function green(){
if (SoftwareAvg > DatabaseAvg && SoftwareAvg > WebAvg){
$("#software-engineer-area .average").css("green");
}
else if (DatabaseAvg > SoftwareAvg && DatabaseAvg > WebAvg){

    $("#database-analyst-area .averageanalyst").css("color","green");
}else{

    $("#web-developer-area .average").css("green"); 
}
}


