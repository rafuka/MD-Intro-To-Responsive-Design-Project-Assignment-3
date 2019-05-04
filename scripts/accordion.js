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