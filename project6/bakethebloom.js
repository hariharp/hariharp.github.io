const results = {
  Rose: 0,
  Chocloate: 0, 
  Sunflower: 0,
  Lavender: 0,
};

// Check if the user has already voted
if (localStorage.getItem("hasVoted") === "true") {
  alert("You have already voted. Thank you!");
  disableVoting();
}

// Add event listener for form submission
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if the user has already voted
  if (localStorage.getItem("hasVoted") === "true") {
    alert("You can only vote once. Thank you!");
    return;
  }

  const flavor = document.getElementById("flavor").value;

  // Increment the selected flavor's count
  if (results[flavor] !== undefined) {
    results[flavor]++;
    updateResults();

    // Mark the user as having voted
    localStorage.setItem("hasVoted", "true");
    alert("Thank you for voting!");
    disableVoting();
  } else {
    console.error("Invalid flavor selected");
  }
});

function updateResults() {
  // Map keys to the correct DOM elements
  document.getElementById("strawberryandrosecount").textContent = results.Rose;
  document.getElementById("elderflowerandlemoncount").textContent = results.Chocloate;
  document.getElementById("chocolateandsunflowercount").textContent = results.Sunflower;
  document.getElementById("lavednerount").textContent = results.Lavender;
}

// Function to disable voting after the user has voted
function disableVoting() {
  document.getElementById("flavor").disabled = true;
  document.querySelector("button[type='submit']").disabled = true;
}
