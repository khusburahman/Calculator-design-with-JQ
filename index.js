function insertNumber(number){
   var existingNUmbers=$("#result").val();
   $("#result").val(existingNUmbers + number)
}

function ClearResult(){
    $("#result").val('')

}
function calculate(){
    var result=eval( $("#result").val())
    $("#result").val(result)
}


function DeleteNumbers(){
    var value= $("#result").val()
    if(value != ''){
     $("#result").val(value.slice(0,-1));
    }
}