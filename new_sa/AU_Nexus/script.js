// Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
  }
  // Mobile Menu Toggle
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

  
  // Smooth Scrolling
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.remove('active');
    }
  }
  
  // Events Data
  const upcomingEvents = [
    {
      title: "Kaggle Kickstart",
      date: "Feb 05, 2025",
      description: "Learn the fundamentals of data science and machine learning.",
    },
  ];
  
  const completedEvents = [
    {
      title: "Data Dive",
      date: "December 20, 2023",
      description: "Explore the Depth of Data in Health and Finance Domains of Data science.",
    },
  ];
  
  // Events Tab Switching
  function switchTab(tab) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
  
    const events = tab === 'upcoming' ? upcomingEvents : completedEvents;
    renderEvents(events, tab === 'completed');
  }
  
  // Render Events
  function renderEvents(events, isCompleted) {
    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = events.map((event, index) => `
      <div class="event-card" style="animation: fadeUp 0.5s ease-out ${index * 0.1}s forwards;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">${event.title}</h3>
            <p style="color: #666; margin-bottom: 1rem;">${event.description}</p>
            <div style="display: flex; align-items: center; color: #666;">
              <span style="margin-right: 0.5rem;">📅</span>
              <span>${event.date}</span>
            </div>
          </div>
          ${isCompleted ? '<span style="color: #22c55e;">✓</span>' : ''}
        </div>
      </div>
    `).join('');
  }
  
  // Video Player
  function togglePlay() {
    const video = document.querySelector('video');
    const playButton = document.querySelector('.play-button');
    const playIcon = document.querySelector('.play-icon');
  
    if (video.paused) {
      video.play();
      playIcon.textContent = '⏸';
    } else {
      video.pause();
      playIcon.textContent = '▶';
    }
  }
  
  // Initialize Events
  document.addEventListener('DOMContentLoaded', () => {
    renderEvents(upcomingEvents, false);
  });