////////////////////////////////////////////////////////////////////////////////////////////////
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js" integrity="sha512-WJXVjqeINVpi5XXJ2jn0BSCfp0y80IKrYh731gLRnkAS9TKc5KNt/OfLtu+fCueqdWniouJ1ubM+VI/hbo7POQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
///////////////////////////////////////////////////////////////////////////////////////////////


<script>

var x = document.getElementById('ASCII');

const density = 'N@#$9876543210?!abc;:+=-,._ ';

let video; 
let asciiDiv;



function setup() {
	noCanvas(); 
  video = createCapture (VIDEO)
  video.size(48, 48);
  asciiDiv = createDiv();
 }
  
function draw() {
  video.loadPixels();
  	let asciiImage = '';
 
  for (let j=0; j<gloria.width; j+=1) {
 		for (let i=0; i<gloria.height; i+=1) {
  		const pixelIndex = i + j * gloria. width * 4;
    	const r = gloria.pixels[pixelIndex + 0];
    	const g = gloria.pixels[pixelIndex + 1];
    	const b = gloria.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      //square(i*w, j*h, w);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0)); 
      
      const c = density.charAt(charIndex); 
      if (c == " ") asciiImage += "&nbsp;"; 
      else asciiImage += c;      
    }
    asciiImage += '<br/>';
  } 
  asciiDiv.html(asciiImage); 
 }
</script>