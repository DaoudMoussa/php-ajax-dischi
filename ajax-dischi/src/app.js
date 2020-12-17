
$(document).ready(function() {
    const source = $("#card-template").html();
    const template = Handlebars.compile(source);

    $.ajax({
        url: '../dischi.php',
        method: 'GET',
        data: {
            api: true
        },
        success: function(dischi) {
            dischi.forEach((disco) => {
                const context = {
                    posterSource: disco.poster,
                    title: disco.title,
                    author: disco.author,
                    year: disco.year
                }

                const card = template(context);
                $('.card-container').append(card);
            });

        },
        error: function() {
            console.log("ERRORE");
        },
    });
})
