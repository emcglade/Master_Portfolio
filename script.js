window.addEventListener('load', () => {
    const titleElement = document.querySelector('.fun-title');
    const text = "Welcome 🤘 to Emma McGlade's Portfolio";
    titleElement.textContent = ''; // Clear the existing content
    let index = 0;

    const typingEffect = () => {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typingEffect, 100); // Adjust speed of typing (in milliseconds)
        }
    };

    typingEffect();
});
