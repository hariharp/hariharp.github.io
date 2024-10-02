// Messages for each image
const messages = [
    "Hey girlyyy, you've got Downtown Girl aesthetic, get ready for a fun fall ahead! You’re about to read a lot more, think bookstores, park benches, comfy trees and so many stories! You’re going to be chanelling main character energy! Keep your eyes peeled for hidden bookstores, cute cafes and fun shops that’ll become your new obsession.✨🌆",
    "You’ve got the dark academia aesthetic, so channel it into those late-night study sessions! This fall, is all about romanticizing your education—sip your coffee, wrap yourself in a cozy blanket, and get those A's. Get those Notion calendars ready and make your study space cute! 📚✨ It’s time to be an academic weapon—go crush those exams! 🖤",
    "Okkkkk corporate girly, you’re serving major office siren vibes! 💼✨ This fall is all about blending power and femininity—think tailored blazers, bold lip colors, and killer heels. Strut in like the boss you are and make your mark! 💋👩‍💼",
    "It is time to get the heated blanket out, cozy fall is here. 🍂✨ Think chunky sweaters, and warm mugs of pumpkin spice lattes. Go on those hot girl walks through crunchy leaves. This fall is all about snuggles, comfort, and cozy moments! 🍁☕️",
    "Spooky season is upon us! 🎃👻 Think haunted vibes, and flickering candlelight. Get your pumpkins ready for carving and find your favorite horror movies! 💀🍂✨",
  ];
  
  // Function to display message
  function showMessage(imageNumber) {
    const message = messages[imageNumber - 1];
    document.getElementById('message').textContent = message;
  }
  