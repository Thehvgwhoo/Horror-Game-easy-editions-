document.addEventListener('DOMContentLoaded', () => {
    const questionContainers = document.querySelectorAll('.question-container');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const jumpscare = document.getElementById('jumpscare');
    const screamSound = document.getElementById('scream-sound');
    let currentQuestion = 0;

    // Show the first question
    questionContainers[currentQuestion].classList.add('active');

    answerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const correct = e.target.getAttribute('data-correct') === 'true';

            if (correct) {
                questionContainers[currentQuestion].classList.remove('active');
                currentQuestion++;

                if (currentQuestion < questionContainers.length) {
                    questionContainers[currentQuestion].classList.add('active');
                } else {
                    alert('Congratulations! You completed the quiz.');
                }
            } else {
                jumpscare.classList.add('show');
                screamSound.play();
                setTimeout(() => {
                    jumpscare.classList.remove('show');
                }, 3000);
            }
        });
    });
});
