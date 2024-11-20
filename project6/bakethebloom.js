let votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    wildcard: 0,
  };
  
  // Check if user already voted
  function hasVoted() {
    return localStorage.getItem('voted') === 'true';
  }
  
  // Function to handle vote
  function vote(option) {
    if (hasVoted()) {
      alert("You've already voted! Thank you for participating.");
      return;
    }
    
    votes[option] += 1;
    localStorage.setItem('voted', 'true');
    localStorage.setItem('votes', JSON.stringify(votes));
    updateProgressBars();
    alert("Thank you for voting! Watch the progress bars update!");
  }
  
  // Function to update progress bars
  function updateProgressBars() {
    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
    
    Object.keys(votes).forEach(option => {
      const percentage = (votes[option] / totalVotes) * 100;
      document.getElementById(`progress-${option}`).style.width = `${percentage}%`;
    });
  }
  
  // Load votes and progress on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedVotes = localStorage.getItem('votes');
    if (savedVotes) {
      votes = JSON.parse(savedVotes);
    }
    updateProgressBars();
    startCountdown();
  });
  
  // Countdown timer (ends on Friday at midnight)
  function startCountdown() {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + (5 - deadline.getDay()) % 7); // Set to next Friday
    deadline.setHours(24, 0, 0, 0);
  
    function updateCountdown() {
      const now = new Date();
      const timeLeft = deadline - now;
      
      if (timeLeft <= 0) {
        document.getElementById("countdown").textContent = "Voting has ended!";
        return;
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      
      document.getElementById("time-left").textContent = `${days}d ${hours}h ${minutes}m`;
    }
  
    setInterval(updateCountdown, 60000); // Update every minute
  }
  