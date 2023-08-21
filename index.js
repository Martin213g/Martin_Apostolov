
function home() {
    console.log('You are now at Home!');
};
    

function settings2() { 
  var x = document.getElementById("hrop");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}



console.log("Welcome to Martin Apostolov's Home!")

who = 'Hi im Martin Apostolov. '

console.log(who)

function heart1(image) {
  image.src = 'img/heart.svg';
  console.log("You're liked a photo1")
}

function heart2(image) {
  image.src = 'img/heart.svg';
  console.log("You're liked a photo2")
}

function heart3(image) {
  image.src = 'img/heart.svg';
  console.log("You're liked a photo3")
}