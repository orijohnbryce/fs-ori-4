// document.getElementById("title").style.display = "none";

// $("#title").hide();
// $("#title").css("color", "red");

// console.log($(".my-class").first().hide())


$("#btn").click(() => {
    console.log("Btn clicked");
})

$("#btn").hover(function () {
    $(this).toggleClass("btn-class");
    // console.log("hover");
})

$("#msg").text("hello")

const ne = document.createElement("p")
ne.textContent = "yo"
$("#res-div").append(ne)
$("#res-div").append("<p>test</p>")
// $("#res-div").append("<h3> test </h3>")

// $(".my-class").toggleClass()
$("#msg").removeClass("my-class");

$("#btn").addClass("my-class");

// $("#title").fadeOut(2000)
// $("#title").fadeIn(2000)

// $("#btn").css("position", "relative")
// $("#btn").animate({left: "250px"})
// $("#btn").animate({left: "250px"}, "slow")

// $.ajax({
//     url: "https://official-joke-api.appspot.com/random_joke",
//     method: "GET",
//     success: (res) => {
//         console.log(res);
//     },
//     error: (e) => {
//         console.log(e);
//     },
// })

// $.get("https://official-joke-api.appspot.com/random_joke", (res) => {
//     console.log(res);
// }).fail(()=>{})
// $.post("https://official-joke-api.appspot.com/random_joke",{data: "123"}, (res) => {
//     console.log(res);
// }).fail(()=>{})


///////////////////////////

const p = $("#btn").parent(); // jquery format
$("#btn").parent()[0]; // standard JS format
// console.log(p);

const c = $("#res-div").children()[1].style.color = "pink";

$("button").last().hide()

$("#title").delay(2000).fadeOut();  // not works as expected
$("#title").delay(2000).css("border", "4px solid pink");  // not works as expected

$("#res-div").empty() // remove all children
