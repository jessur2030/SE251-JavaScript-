
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";

    var dateNumber = 1;
    var counter = 0;
    var table = "<table id='Mytable'>";
    while(dateNumber <=  numberOfDaysInMonth)
    {
        table += "<tr id='weekHeader'>";
        for(var c =0; c < 7; c++){
            if (counter == firstDayOfWeek  && dateNumber <=  numberOfDaysInMonth){
                table += "<td class='dayHeader'>" + dateNumber + "</td>";
                dateNumber++;
                firstDayOfWeek++;
            }else{
                table += "<td class='dayHeader Grey'></td>";
            }
            counter++ ;
        }
        table += "</tr>";
    }
    table += "</table>";


    //table += "</tr>";
    $('#results').html(table);

    
    $('#yes').click(function(){

        $('#Mytable td').addClass('Green')
        $('#Mytable td').removeClass('Red')

 });
    
    $('#no').click(function(){

        $('#Mytable td').addClass('Red')
        $('#Mytable td').removeClass('Green')

    });

    $('#Mytable td').click(function(){

        var cell = $(this);

        if (cell.hasClass('Green')){
;
        cell.addClass('Red')
        cell.removeClass('Green')

        }else if (cell.hasClass('Red')){
            cell.removeClass('Red')

        }else{
            cell.addClass('Green')
        }


    })
    

    //$('#results').html(table);
     
    
    
}


