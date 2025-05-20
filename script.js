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