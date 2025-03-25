// particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#64ffda"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#64ffda",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// typing animation
document.addEventListener('DOMContentLoaded', function() {
  const typingAnimationElement = document.getElementById('typing-animation');
  const cursor = document.querySelector('.cursor');
  
  // create an array of text to display
  const typingTexts = [
    'Software Developer Engineer',
		'Student at ASU',
    'Web Developer',
    'Passion Learner',
    'Certified Public Accountant',
    'Enrolled Agent'
  ];
  
  let currentWordIndex = 0;
  let isAnimating = false;

  // main animation function: typing, selecting and deleting
  async function animateTypingWithSelectDelete() {
    if (isAnimating) return;
    isAnimating = true;
    
    while (true) {
      const text = typingTexts[currentWordIndex];
      cursor.style.display = 'inline-block';
      for (let i = 0; i < text.length; i++) {
        typingAnimationElement.textContent += text[i];
        await sleep(100);
      }
      await sleep(800);
      typingAnimationElement.classList.add('selected');
      await sleep(800);
      typingAnimationElement.textContent = '';
      typingAnimationElement.classList.remove('selected');
      await sleep(400);
      currentWordIndex = (currentWordIndex + 1) % typingTexts.length;
    }
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  animateTypingWithSelectDelete();
});

// terminal text and animation
const terminalText = `> Welcome to my portfolio!
> Loading...`;

const terminalInfo = `
> Name: Ying-Han (Hank) Chen
> Occupation: Software Developer Engineer
> Skills: AI/ML, Web Development
> Status: Ready for new challenges
> Feel free to explore my portfolio!`;

let i = 0;
const terminalElement = document.getElementById('terminal-text');

// typing effect function
function typeTerminal(text, callback) {
  if (i < text.length) {
    terminalElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeTerminal(text, callback), Math.random() * 40 + 20);
  } else {
    i = 0; // 重置計數器
    if (callback) callback();
  }
}

// simulate loading effect
function simulateLoading() {
  return new Promise(resolve => {
    let dots = 0;
    const loadingInterval = setInterval(() => {
      const loadingText = terminalElement.innerHTML;
      const baseText = loadingText.replace(/\.+$/, '');
      dots = (dots + 1) % 4;
      terminalElement.innerHTML = baseText + '.'.repeat(dots);
    }, 500);
    setTimeout(() => {
      clearInterval(loadingInterval);
      resolve();
    }, 3000);
  });
}

  // 初始化終端機動畫
document.addEventListener('DOMContentLoaded', async function() {
  typeTerminal(terminalText, async () => {
    await simulateLoading();
    const lines = terminalElement.innerHTML.split('\n');
    terminalElement.innerHTML = lines[0] + '\n';
    typeTerminal(terminalInfo);
  });
});

// projects filter
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 