/* ============================================
   THE LYOHESS - Main JavaScript
   Premium Decorative Finishes
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      contact: 'Contacto'
    },
    // Hero
    hero: {
      title: 'Acabamentos Decorativos de Alta Qualidade',
      subtitle: 'Microcimento, Marmorinos e Revestimentos de Cal',
      cta_projects: 'Ver Projetos',
      cta_contact: 'Contacte-nos',
      scroll: 'Scroll'
    },
    // About
    about: {
      title: 'Sobre Nós',
      subtitle: '12 Anos de Excelência',
      p1: 'A The Lyohess é uma empresa especializada em acabamentos decorativos premium, com 12 anos de experiência no mercado Europeu.',
      p2: 'Atuamos em Portugal, Espanha e Itália, oferecendo soluções de alta qualidade em microcimento, marmorinos, revestimentos de cal e pintura decorativa.',
      p3: 'O nosso compromisso é transformar espaços através de técnicas artesanais e materiais de excelência, criando ambientes únicos e sofisticados.',
      stat_years: 'Anos de Experiência',
      stat_projects: 'Projetos Realizados',
      stat_countries: 'Países'
    },
    // Services
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Soluções premium para transformar o seu espaço',
      microcement: {
        title: 'Microcimento',
        desc: 'Revestimento contínuo versátil para pavimentos e paredes, com acabamento moderno e durável.'
      },
      marmorino: {
        title: 'Marmorinos',
        desc: 'Efeito mármore premium com técnicas artesanais italianas para um acabamento sofisticado.'
      },
      lime: {
        title: 'Revestimento de Cal',
        desc: 'Acabamentos naturais e respiráveis com cal de alta qualidade, ideais para restauros.'
      },
      decorative: {
        title: 'Pintura Decorativa',
        desc: 'Técnicas decorativas exclusivas para criar texturas e efeitos únicos nas suas paredes.'
      },
      facade: {
        title: 'Capoto e Fachadas',
        desc: 'Isolamento térmico exterior e reabilitação de fachadas com materiais de primeira qualidade.'
      },
      painting: {
        title: 'Pintura Interior e Exterior',
        desc: 'Serviços completos de pintura profissional para interiores e exteriores.'
      },
      renovation: {
        title: 'Remodelações',
        desc: 'Remodelações a nível geral, desde pequenas intervenções a projetos completos.'
      }
    },
    // Projects
    projects: {
      title: 'Os Nossos Projetos',
      subtitle: 'Deixamos o trabalho falar por si',
      filter_all: 'Todos',
      filter_microcement: 'Microcimento',
      filter_marmorino: 'Marmorino',
      filter_lime: 'Cal',
      filter_decorative: 'Decorativo',
      view: 'Ver Projeto'
    },
    // Contact
    contact: {
      title: 'Contacte-nos',
      subtitle: 'Estamos prontos para transformar o seu espaço',
      info_title: 'Informações de Contacto',
      info_desc: 'Entre em contacto connosco para um orçamento gratuito ou para saber mais sobre os nossos serviços.',
      email_label: 'Email',
      phone_label: 'Telefone',
      location_label: 'Localização',
      location_value: 'Portugal, Espanha e Itália',
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        subject: 'Assunto',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar. Tente novamente.'
      }
    },
    // Footer
    footer: {
      desc: 'Especialistas em acabamentos decorativos premium com 12 anos de experiência no mercado Europeu.',
      nav_title: 'Navegação',
      services_title: 'Serviços',
      contact_title: 'Contacto',
      copyright: '© 2024 The Lyohess. Todos os direitos reservados.'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'High-End Decorative Finishes',
      subtitle: 'Microcement, Marmorino and Lime Coatings',
      cta_projects: 'View Projects',
      cta_contact: 'Contact Us',
      scroll: 'Scroll'
    },
    // About
    about: {
      title: 'About Us',
      subtitle: '12 Years of Excellence',
      p1: 'The Lyohess is a company specialized in premium decorative finishes, with 12 years of experience in the European market.',
      p2: 'We operate in Portugal, Spain and Italy, offering high-quality solutions in microcement, marmorino, lime coatings and decorative painting.',
      p3: 'Our commitment is to transform spaces through artisanal techniques and excellent materials, creating unique and sophisticated environments.',
      stat_years: 'Years of Experience',
      stat_projects: 'Completed Projects',
      stat_countries: 'Countries'
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Premium solutions to transform your space',
      microcement: {
        title: 'Microcement',
        desc: 'Versatile continuous coating for floors and walls, with a modern and durable finish.'
      },
      marmorino: {
        title: 'Marmorino',
        desc: 'Premium marble effect with Italian artisanal techniques for a sophisticated finish.'
      },
      lime: {
        title: 'Lime Coating',
        desc: 'Natural and breathable finishes with high-quality lime, ideal for restorations.'
      },
      decorative: {
        title: 'Decorative Painting',
        desc: 'Exclusive decorative techniques to create unique textures and effects on your walls.'
      },
      facade: {
        title: 'ETICS & Facades',
        desc: 'External thermal insulation and facade rehabilitation with premium materials.'
      },
      painting: {
        title: 'Interior & Exterior Painting',
        desc: 'Complete professional painting services for interiors and exteriors.'
      },
      renovation: {
        title: 'Renovations',
        desc: 'General renovations, from small interventions to complete projects.'
      }
    },
    // Projects
    projects: {
      title: 'Our Projects',
      subtitle: 'We let the work speak for itself',
      filter_all: 'All',
      filter_microcement: 'Microcement',
      filter_marmorino: 'Marmorino',
      filter_lime: 'Lime',
      filter_decorative: 'Decorative',
      view: 'View Project'
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to transform your space',
      info_title: 'Contact Information',
      info_desc: 'Get in touch with us for a free quote or to learn more about our services.',
      email_label: 'Email',
      phone_label: 'Phone',
      location_label: 'Location',
      location_value: 'Portugal, Spain and Italy',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending. Please try again.'
      }
    },
    // Footer
    footer: {
      desc: 'Specialists in premium decorative finishes with 12 years of experience in the European market.',
      nav_title: 'Navigation',
      services_title: 'Services',
      contact_title: 'Contact',
      copyright: '© 2024 The Lyohess. All rights reserved.'
    }
  }
};

// ============================================
// STATE
// ============================================
let currentLang = localStorage.getItem('lyohess-lang') || 'pt';

// ============================================
// DOM ELEMENTS
// ============================================
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const langBtns = document.querySelectorAll('.lang-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxImg = document.querySelector('.lightbox-content img');
const contactForm = document.querySelector('.contact-form');
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');

// ============================================
// LANGUAGE SYSTEM
// ============================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lyohess-lang', lang);
  
  // Update active button
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = getNestedTranslation(translations[lang], key);
    if (translation) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Update document language
  document.documentElement.lang = lang;
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function handleScroll() {
  const scrolled = window.scrollY > 50;
  header.classList.toggle('scrolled', scrolled);
  
  // Update active nav link based on section
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  
  // Animate hamburger
  const spans = menuToggle.querySelectorAll('span');
  if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
  const spans = menuToggle.querySelectorAll('span');
  spans[0].style.transform = 'none';
  spans[1].style.opacity = '1';
  spans[2].style.transform = 'none';
}

// ============================================
// SMOOTH SCROLL
// ============================================
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  
  if (targetSection) {
    closeMobileMenu();
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================
// PROJECT FILTER
// ============================================
function filterProjects(category) {
  // Update active filter button
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  
  // Filter projects with animation
  projectItems.forEach(item => {
    const itemCategory = item.dataset.category;
    const shouldShow = category === 'all' || itemCategory === category;
    
    if (shouldShow) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }, 50);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

// ============================================
// LIGHTBOX
// ============================================
function openLightbox(imgSrc) {
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightboxFunc() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// ============================================
// CONTACT FORM
// ============================================
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Validate
  let isValid = true;
  const requiredFields = ['name', 'email', 'message'];
  
  requiredFields.forEach(field => {
    const input = contactForm.querySelector(`[name="${field}"]`);
    if (!data[field] || data[field].trim() === '') {
      input.style.borderColor = '#e74c3c';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
  });
  
  // Email validation
  const emailInput = contactForm.querySelector('[name="email"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    emailInput.style.borderColor = '#e74c3c';
    isValid = false;
  }
  
  if (isValid) {
    // Show success message (in real app, send to backend)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = translations[currentLang].contact.form.success;
    submitBtn.style.background = '#27ae60';
    submitBtn.disabled = true;
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  }
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Counter observer
const counterSection = document.querySelector('.about-stats');
if (counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterObserver.observe(counterSection);
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  
  // Mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
  
  // Language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
  
  // Project filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterProjects(btn.dataset.filter);
    });
  });
  
  // Project items (lightbox)
  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        openLightbox(img.src);
      }
    });
  });
  
  // Lightbox close
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightboxFunc);
  }
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightboxFunc();
      }
    });
  }
  
  // ESC key to close lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
      closeLightboxFunc();
    }
  });
  
  // Contact form
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Scroll reveal
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  
  // Close mobile menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
});

// ============================================
// PRELOADER (Optional)
// ============================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
