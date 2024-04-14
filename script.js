document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const heading = document.querySelector('h1');
    const subheading = document.querySelector('h2');
    const image = document.getElementById('image');

    const imageUrls = [
        '1.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
    ];

    noButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount < 5) {
            heading.textContent = "Soch lo acche se?";
            subheading.textContent = `Maa Kasam".`;
            image.src = imageUrls[clickCount];
        }
        if (clickCount === 4) {
            heading.textContent = "Sallu bhai aapki hai meri nahi";
            subheading.textContent = `honi bhi chyie varna maa ka baap ka sabka badla lega tera faizal`;
            noButton.style.display = "none"; 
            yesButton.style.display = "inline-block";
        }
    });

    yesButton.addEventListener('click', () => {
        heading.textContent = "Hehe I knew it!";
        subheading.textContent = "I love you";
        image.src = "2.png";
        yesButton.disabled = true;
        noButton.disabled = true;
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});
