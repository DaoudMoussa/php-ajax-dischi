
$(document).ready(function() {


    getAndPrintDischi($('#genres-selector').val(), true);

    $('#genres-selector').change(function() {
        getAndPrintDischi($('#genres-selector').val());
    });
})

function getAndPrintDischi(genre, firstCharge = false) {
    let genres = []
    const cardSource = $("#card-template").html();
    const cardTemplate = Handlebars.compile(cardSource);

    const genreSource = $("#genres-template").html();
    const genreTemplate = Handlebars.compile(genreSource);

    $.ajax({
        url: '../dischi.php',
        method: 'GET',
        data: { genreFilter: $('#genres-selector').val() },
        success: function(dischi) {
            $('.card-container').empty();

            dischi.forEach((disco) => {
                const cardContext = {
                    posterSource: disco.poster,
                    title: disco.title,
                    author: disco.author,
                    year: disco.year
                }

                const card = cardTemplate(cardContext);
                $('.card-container').append(card);

                if(firstCharge && !genres.includes(disco.genre)) {
                    genres.push(disco.genre);
                    const optionContext = { genre: disco.genre }

                    const option = genreTemplate(optionContext);
                    $('#genres-selector').append(option);
                }
            });
        },
        error: function() {
            console.log("ERRORE");
        },
    });
}
