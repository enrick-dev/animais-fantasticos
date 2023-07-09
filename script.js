
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo')
  
  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const ativoClass = 'ativo'

  if(accordionList.length) {
    accordionList[0].classList.add(ativoClass)
    accordionList[0].nextElementSibling.classList.add(ativoClass)
    
    function activeAccordion() {
      this.classList.toggle(ativoClass)
      this.nextElementSibling.classList.toggle(ativoClass)
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href);
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  
    // // formaalternativa de ter scroll suave
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave();


function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll-animation');
  
  if(sections.length) {
    const windowMetade = innerHeight * 0.7;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTopo - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else
          section.classList.remove('ativo');
      })
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();