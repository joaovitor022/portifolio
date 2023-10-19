const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})



//conehecimento 
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })

  const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
})

// email

document.getElementById('emailLink').addEventListener('click', function(event) {
  event.preventDefault();
  var email = 'jvdesenvolvedorfull@gmail.com'; 
  window.location.href = 'mailto:' + email;
});