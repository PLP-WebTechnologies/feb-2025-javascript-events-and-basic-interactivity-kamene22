// Change the introductory text dynamically
function changeIntroText() {
    const introText = document.getElementById('intro-text');
    introText.textContent = 'I am currently deepening my knowledge in data science and machine learning. I am working towards a career as a data scientist and building my expertise in programming languages like Python. When I am not coding, I enjoy staying active, reading self-help books, and connecting with family and friends.';
}

// Change background color dynamically
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

// Add or remove a fun fact
function toggleElement() {
    const funFact = document.getElementById('funFact');
    
    // If the fun fact is empty, add it
    if (funFact.innerHTML === '') {
        funFact.innerHTML = '<p>Fun Fact: I recently completed the 75 Hard challenge to improve my physical fitness, and it taught me the power of discipline and consistency!</p>';
    } else {
        funFact.innerHTML = '';
    }
}

// Form validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formFeedback = document.getElementById('form-feedback');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        formFeedback.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password.length < 8) {
        formFeedback.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    formFeedback.textContent = 'Form submitted successfully!';
});

// Hover effect on button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#ddd';
    });
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '';
    });
});

// Simple Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            if (content.id === tabId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
