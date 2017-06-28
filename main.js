// put script tag at the very bottom of the body

var vanillaStuff = document.getElementById("list-of-stuff");
console.log("dom element", vanillaStuff);

var jQStuff = $("#list-of-stuff");
console.log("JQ", jQStuff);

jQStuff.addClass("myList");
//append adds to bottom of li
jQStuff.append("<li>Hamburgers</li>");
//html replaces li
//jQStuff.html("<li>hamburgers</li>");

// prepend hamburgers will go on top of li

//nav through DOM super easily! no parent.node.child.node blah


//click events - works only when id is hard coded into the html
//	$(#destroyer).click(function(){
//	 $("container").hide(); or .toggle(); // toggle class = .toggleClass();
//	});

// vs below- use this syntax!

// takes three arguments. click, where, do
// when event.target = destroyer than do this
// $("document").on("click", "#destroyer", function(){
// $(".container").toggle();
// });



// does not work. jQuery 100% depends on the dom element existing in the dom
// $("body").append(`<button id="destroyer">Hide songs</button>`)


// AJAX 

// OLD WAY
// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", function(){
// 	var data = JSON.parse(this.responseText);
// 	console.log("data", data);
// });
// myRequest.open("GET", "songs.json");
// myRequest.send();

// $.ajax({
// // automatically assumes it is a get - if it is not you have to say method: "POST" etc
// 	url: "songs.json"
// // function you pass into done receives data immideatly. done is the listener the function is callback
// }).done(function(data){ 
// 	console.log(data);
// });


// $.ajax({
// 	url: "songs.json"
// })
// // done means you got 200 OK
// .done(executeAfterAjax)
// // fail checks for error- func can send message to dom or execute ajax again
// .fail(function(error){
// 	console.log(error.statusText);
// });
// function(executeAfterAjax){
// 	console.log(data.songs);
// loop through to put info into dom same as a for each. but useful for items that are not an arr
// let songs = data.songs
// function takes two arguments of the index and the song or property itself
// $.each(songs, function(index, song){
// $("#song-list").append(`<li>$[song.title]</li>`)
// })
// }

// targetting two buttons to make them do the same thing
// ^ grabs everything in the id that stats with----also a css selector!
// $(document).on("click", "button[id^='button-]",function(){
// 	$(this).parents("container").remove();
// })





























































