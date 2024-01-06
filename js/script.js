const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel')

// Tabs Menu Event Listener

tabs.forEach((tab) => (tab.addEventListener('click',onTabClick)))

function onTabClick(e) { 

    //Deactivate All Tabs
    tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-softRed','md:border-b-0','border-b-4')
    })

    //Hide All Panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    //Activate A New Tab and Panel based on Target
    e.target.classList.add('border-b-4','border-softRed')

    const classString = e.target.getAttribute('data-target');
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}

