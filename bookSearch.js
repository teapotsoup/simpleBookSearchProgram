const formForInput = document.querySelector("#formForInput");
const bookTitleInput = document.querySelector("#bookInput");
formForInput.addEventListener("submit", (e) => {
    e.preventDefault();
});


$(document).ready(() => {
    $("#formForInput").submit(() => {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $("#bookInput").val() },
            headers: { Authorization: "KakaoAK 38755547c00e8bea383cbe07af586078" }
            //38755547c00e8bea383cbe07af586078
            //https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038%3Ftimestamp%3D20220101153750
        })
            .done(function (msg) {
                console.log(msg);
                const bookTitle = document.querySelector("#bookTitle");
                const bookImg = document.querySelector("#bookImg");
                bookTitle.innerHTML = msg.documents[0].title;
                bookImg.src = msg.documents[0].thumbnail;
            });
    });
});
