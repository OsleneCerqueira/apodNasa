$("#enviar").on("click", function () {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=DUhRStXVIzN5HSKnrL8oFHe6LcrACrAQNh2WUzGQ&date=" + $("#data").val(),
        success: function (data) {

            $("#descricao_data")
                .html(data.date);

            $("#titulo")
                .html(data.title);

            // $("#apod_pic")
            //     .src = data.url;
            $("#apod_img").attr('src', data.url);

            $("#texto")
                .html(data.explanation);
            // return data;
        }
    })
})