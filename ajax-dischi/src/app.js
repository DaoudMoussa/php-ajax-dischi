const source = $("#card-template").html();
const template = Handlebars.compile(source);

$(document).ready(function() {
    $.ajax({
        url: './../../dischi.php',
        method: 'GET',
        success: function() {
            console.log("ok");
        },
        error: function() {
            console.log("not ok");
        },
    });
})
