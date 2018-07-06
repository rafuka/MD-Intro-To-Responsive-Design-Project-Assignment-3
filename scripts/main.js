var modal 		= document.getElementById('modal');
var srchbtn 	= document.getElementById('search-btn');
var bloglink    = document.getElementById('bloglink');
var contactbtn  = document.getElementById('contact-form-btn');
var closebtn 	= document.getElementById('close-btn');
var devwidth 	= document.getElementById('devwidth');
var sectionArr 	= document.getElementsByClassName('section__wrapper');
var scrollTop 	= window.scrollY || document.documentElement.scrollTop;
var scrollTopVal = document.getElementById('scrolltop');

var skillBlocks = document.getElementsByClassName('skill-block');

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
      scrollTopVal.innerHTML = "" + scrollTop;
  }

  if (scrollTop >= 0 && scrollTop < 450 ) {
      setTimeout(function() {
         sectionArr[0].style.opacity = 1;
         sectionArr[0].style.top = '0px';
     }, 200);

      visibleSections[0] = true;
  }

  if (scrollTop >= 450 && scrollTop < 1550 && !visibleSections[1]) {
      setTimeout(function() {
         sectionArr[1].style.opacity = 1;
         sectionArr[1].style.top = '0px';
     }, 200);

      visibleSections[1] = true;
  }

  if (scrollTop >= 1550 && scrollTop < 2750 && !visibleSections[2]) {
      setTimeout(function() {
         sectionArr[2].style.opacity = 1;
         sectionArr[2].style.top = '0px';
         sectionArr[2].style.left = '0px';

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

      visibleSections[2] = true;
  }

  if (scrollTop >= 2750 && !visibleSections[3]) {
      setTimeout(function() {
         sectionArr[3].style.opacity = 1;
         sectionArr[3].style.top = '0px';
     }, 200);

      visibleSections[3] = true;
  }
}

displaySections(visibleSections);

window.addEventListener('scroll', function(e) {
    
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    
   if (modal.style.display !== 'none') {
      scrollTopVal.innerHTML = "" + scrollTop;
  }

  displaySections(visibleSections);

});

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
devwidth.innerHTML = "" + w;

function displayModal() {
    modal.style.display = 'block';
   setTimeout(function() {
      modal.style.opacity = 1;
  }, 100);

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