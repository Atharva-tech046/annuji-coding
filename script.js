const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const videoContainer = document.getElementById("videoContainer");

// Move "No" button on hover
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show message and play video when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    message.innerHTML = "Yayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy😘😘😘😘😘😘😘!";
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://i.pinimg.com/originals/9c/99/55/9c99559a103505c1341b815df6f2603b.gif" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://i.pinimg.com/originals/b9/f8/bf/b9f8bfe0a64cd793703b29c1b88798a6.gif" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
    `;
});
