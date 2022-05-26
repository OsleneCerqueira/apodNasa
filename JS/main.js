$("#enviar").on("click", function () {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=DUhRStXVIzN5HSKnrL8oFHe6LcrACrAQNh2WUzGQ&date=" + $("#data").val(),
        success: function (data) {

            $("#descricao_data")
                .html(data.date);

            $("#titulo")
                .html(data.title);

            $("#texto")
                .html(data.explanation);
            
                if (data.media_type == 'image') {
                    $("#imagens-apod").html(`<img class="img-apod" src="${data.url}"/>`)
                } else {
                    $("#imagens-apod").html(`<iframe class="img-apod" src="${data.url}"></iframe>`)
                }
        }
    })
})