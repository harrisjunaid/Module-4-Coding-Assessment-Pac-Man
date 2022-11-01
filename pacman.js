//Global
var pos = 0;  //PacMan image position variable initialized to 0
let pageWidth = window.innerWidth;  //width of the webpage (used to calculate when Pac-Man needs to turn around)
    console.log('window.innerWidth: ',pageWidth);
const pacArray = [  //array of PacMan movement images
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
var direction = 0;  //PacMan direction "0 is L to R" & "1 is R to L"
var focus = 0;  // This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1

// This function is called on mouse click.
//Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) { //"1 is R to L"
    pos -= 20;     //movement to L
    //document.getElementById('PacMan').style.left
                                    img.style.left = pos + 'px';  //passing position to document.getElementById('PacMan')
  } else {         //"0 is L to R"
    pos += 20;     //movement to R
    //document.getElementById('PacMan').style.left
                                    img.style.left = pos + 'px';
  }
}
// TODO: Add a Javascript setInterval() method that will call the Run() function above every 300 milliseconds. 
////////Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 
function callRun(){
  setInterval(Run,300);
}
// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) { // TODO: Complete this to reverse direction upon hitting screen edge
  
  console.log('1 direction: ',direction);
  console.log('2  imgWidth: ',imgWidth);
  console.log('3       pos: ',pos);
  console.log('4 pageWidth: ',pageWidth);

  switch (direction) {
    case 0: //"0 is L to R"
      if(pos+imgWidth>pageWidth)direction = 1;
      break;
    case 1:
      if(pos+imgWidth<0)direction = 0;
      break;
    default:
      break;
  }

  return direction;
}

callRun();
//Please do not change
module.exports = checkPageBounds;
