var modal 		= document.getElementById('modal');
var srchbtn 	= document.getElementById('search-btn');
var bloglink    = document.getElementById('bloglink');
var contactbtn  = document.getElementById('contact-form-btn');
var closebtn 	= document.getElementById('close-btn');
var devwidth 	= document.getElementById('devwidth');
var sectionArr 	= document.getElementsByClassName('section-wrapper');
var scrollTop 	= window.scrollY;
var scrollTopVal = document.getElementById('scrolltop');

var skillBlocks = document.getElementsByClassName('skill-block');
console.log('skillBlocks: ');
console.log(skillBlocks);

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

var docHeight = getDocHeight();

var visibleSections = new Array(sectionArr.length);

function displaySections(sections) {
   if (modal.style.display !== 'none') {
      scrollTopVal.innerHTML = "" + window.scrollY;
  }

  scrollTop = window.scrollY;

  if (scrollTop >= 0 && scrollTop < 350 && !visibleSections[0]) {
      setTimeout(function() {
         sectionArr[0].style.opacity = 1;
         sectionArr[0].style.top = '0px';
     }, 200);

      visibleSections[0] = true;
  }

  if (scrollTop >= 350 && scrollTop < 2500 && !visibleSections[1]) {
      setTimeout(function() {
         sectionArr[1].style.opacity = 1;
         sectionArr[1].style.top = '0px';
         sectionArr[1].style.left = '0px';

         setTimeout(function() {
            skillBlocks[0].style.opacity = 1;
            skillBlocks[0].style.top = '0px';
        }, 200);
         setTimeout(function() {
            skillBlocks[1].style.opacity = 1;
            skillBlocks[1].style.top = '0px';
        }, 600);
         setTimeout(function() {
            skillBlocks[2].style.opacity = 1;
            skillBlocks[2].style.top = '0px';
        }, 900);

     }, 200);

      visibleSections[1] = true;
  }

  if (scrollTop >= 1400 && !visibleSections[2]) {
      setTimeout(function() {
         sectionArr[2].style.opacity = 1;
         sectionArr[2].style.top = '0px';
     }, 200);

      visibleSections[2] = true;
  }
}

displaySections(visibleSections);

window.addEventListener('scroll', function(e) {
   if (modal.style.display !== 'none') {
      scrollTopVal.innerHTML = "" + window.scrollY;
  }

  scrollTop = window.scrollY;

  displaySections(visibleSections);

  if (scrollTop > 300) {

  }
});

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
devwidth.innerHTML = "" + w;

function displayModal() {
    modal.style.display = 'block';
   setTimeout(function() {
      modal.style.opacity = 1;
  }, 100);
   console.log("boom");
   w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   devwidth.innerHTML = "" + w;

   return false;
}

srchbtn.onclick = displayModal;
bloglink.onclick = displayModal;
contactbtn.onclick = displayModal;


closebtn.onclick = function() {
   modal.style.opacity = 0;
   setTimeout(function() {
      modal.style.display = 'none';
  }, 200);

}