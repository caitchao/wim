function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Button
var button = $('#button');
var caption = $('.caption');

button.on("click", doSomething);

var pictures = ["https://i.guim.co.uk/img/media/a4d19fc54a441fe9db182895c0873bd5774b39fc/0_0_5043_4055/master/5043.jpg?width=300&quality=85&auto=format&fit=max&s=1e2cc8eac3a60e6f1fba445edbd1cf37",
"http://ucsdguardian.org/wp-content/uploads/2017/10/Princess-Bride-IMG-752x440.jpeg", "https://www.thecinemaholic.com/wp-content/uploads/2017/11/guy-gets-the-girl-1024x500.jpeg",
"https://www.indiewire.com/wp-content/uploads/2017/05/willis.jpg?w=780", "https://www.totallifecounseling.com/wp-content/uploads/2009/03/taken-grace-movie.jpg"]
var captions = {"https://i.guim.co.uk/img/media/a4d19fc54a441fe9db182895c0873bd5774b39fc/0_0_5043_4055/master/5043.jpg?width=300&quality=85&auto=format&fit=max&s=1e2cc8eac3a60e6f1fba445edbd1cf37":
"A Fistful of Dollars", "http://ucsdguardian.org/wp-content/uploads/2017/10/Princess-Bride-IMG-752x440.jpeg": "The Princess Bride",
"https://www.thecinemaholic.com/wp-content/uploads/2017/11/guy-gets-the-girl-1024x500.jpeg": "Spider Man", "https://www.indiewire.com/wp-content/uploads/2017/05/willis.jpg?w=780": "Sin City",
"https://www.totallifecounseling.com/wp-content/uploads/2009/03/taken-grace-movie.jpg": "Taken"}
function doSomething(){
  randomNum = Math.random() * pictures.length;
  random = Math.floor(randomNum);
  randomImg = pictures[random];
  cap = captions[randomImg];
  document.getElementById("tropeimg").src = randomImg;
  caption.text(cap);
  console.log("hello");
}
