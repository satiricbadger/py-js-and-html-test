

$(document).ready(function(){

    //Two methods, .ajax or xhttp onload

    $(".(class name here)").click(function(){
        var a;
        $.ajax({
            url: "INSERT LINK HERE",
            success: function (data){
                a = Name.value;
                console.log(data[a]);
            }
        });
    });
    $(".(class name here))").click(function(){
        //Request here <-
        var xhttp = new XMLHttpRequest();
        xhttp.open("INSERT TYPE OF METHOD HERE(GET,POST,PUT,DELETE)", "INSERT LINK HERE");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname}; //JSON INPUT HERE AND OPTIONAL
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {      

        };
    });

});