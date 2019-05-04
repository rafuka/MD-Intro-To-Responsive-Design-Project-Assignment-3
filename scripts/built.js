var accordion = document.querySelector('.aria-accordion');

if (accordion) {
  accordion.focus();

  function activateTab(tab, tabPanel) {
    tab.setAttribute('aria-selected', true);
    tabPanel.setAttribute('aria-expanded', true);
    tabPanel.setAttribute('aria-hidden', false);
  }

  function deactivateTab(tab, tabPanel) {
    tab.setAttribute('aria-selected', false);
    tabPanel.setAttribute('aria-hidden', true);
    tabPanel.setAttribute('aria-expanded', false);
  }

  function toggleTab(event) {
    if (event.target.getAttribute('aria-controls')) {
      var tab = event.target;
      var tabPanelId = event.target.getAttribute('aria-controls');
      var tabPanel = document.getElementById(tabPanelId);
      if (event.target.getAttribute('aria-selected') == 'true') {
        deactivateTab(tab, tabPanel);
      }
      else {
        activateTab(tab, tabPanel);
      }
    }
  }

  function handleKey(event) {
    var key = event.keyCode,
      currentTab = event.target,
      currentPanelId = currentTab.getAttribute('aria-controls'),
      currentPanel = document.getElementById(currentPanelId),
      targetPanel,
      targetTab;

    if (key === 37 || key === 38) {
      // left/up arrow

      targetPanel = currentTab.previousElementSibling;

      if (targetPanel) {
        targetTab = targetPanel.previousElementSibling;
      }
      else {
        targetPanel = currentTab.parentElement.lastElementChild;
        targetTab = targetPanel.previousElementSibling;
      }

      targetTab.focus();

    } else if (key === 40 || key === 39) {
      // right/down arrows
      targetTab = currentPanel.nextElementSibling;

      if (targetTab) {
        targetPanel = targetTab.nextElementSibling;
      }
      else {
        targetTab = currentTab.parentElement.firstElementChild;
        targetPanel = targetTab.nextElementSibling;
      }

      targetTab.focus();

    } else if (key === 32 || key === 13) {
      // spacebar
      targetTab = currentTab;
      targetPanel = currentPanel;
      if (targetPanel) {
        if (targetPanel.getAttribute('aria-expanded') === 'true') {
          deactivateTab(targetTab, targetPanel);
        }
        else {
          activateTab(targetTab, targetPanel);
        }
      }
    }

    if (targetTab) {

    }
  }
  accordion.addEventListener('click', toggleTab);
  accordion.addEventListener('keydown', handleKey, false);
}


var calculator = document.getElementById("calculator");
		var screen = document.getElementById("screen");
		var scrhst = document.getElementById("history");
		var op = null;
		var lastOp = false;
		var val1 = null;
		var val2 = null;


		function calculate(val1, op, val2) {
			switch(op) {
				case "plus":
					return +val1 + +val2;
					break;
				case "minus":
					return +val1 - +val2;
					break;
				case "mult":
					return +val1 * +val2;
					break;
				case "div":
					return +val1 / +val2;
					break;
			}
		}

		function numberPressed(number) {
			if (val2) {
				val2 += number;
				screen.value += number;
				scrhst.value += number;
			}
			else if (op) {
				val2 = number;
				screen.value = number;
				scrhst.value += number;
			}
			else if (val1) {
				val1 += number;
				screen.value += number;
				scrhst.value += number;
			}
			else {
				val1 = number;
				screen.value = number;
				scrhst.value = number;
			}
		}

		function opPressed(opval, element) {
			if (opval === "del") {
				if (val2) {
					if (val2.length > 1) {
						val2 = val2.substr(0, val2.length - 1);
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
						screen.value = screen.value.substr(0, screen.value.length - 1);
					}
					else {
						val2 = null;
						screen.value = '0';
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
					}
				}
				else if (op) {
					op = null;
					scrhst.value = scrhst.value.substr(0, scrhst.value.length - 3);
				}
				else if (val1) {
					if (val1.length > 1) {
						val1 = val1.substr(0, val1.length - 1);
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
						screen.value = screen.value.substr(0, screen.value.length - 1);
					}
				}
			}

			else if (opval === "clear") {
				val1 = null;
				op = null;
				val2 = null;
				screen.value = 0;
				scrhst.value = 0;
			}
			else if (opval === "equal") {
				if (val2) {
					val1 = calculate(val1, op, val2);
					val2 = null;
					op = null;
					screen.value = val1;
					scrhst.value = val1;
				}
			}
			else if (val2) {
				val1 = calculate(val1, op, val2);
				val2 = null;
				op = opval;
				screen.value = val1;
				scrhst.value += " " + element.innerHTML + " ";
			}
			else if (op) {
				if (op !== opval) {
					op = opval;
					scrhst.value = scrhst.value.substr(0, scrhst.value.length - 3) + " " + element.innerHTML + " ";
				}
				
			}
			else if (val1) {
				op = opval;
				scrhst.value = scrhst.value + " " + element.innerHTML + " ";
			}
		}

		calculator.addEventListener('click', function(e) {
			
			var element = e.target;

			if (element.classList.contains('calc-btn')) {

				if (element.classList.contains('num')) {
					numberPressed(element.innerHTML);
				}
				else {
					opPressed(element.id, element);
				}
			}
		});



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