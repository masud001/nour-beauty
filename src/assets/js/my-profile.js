document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.getElementById('profile-intro');
    const questionContainer = document.getElementById('question-container');
    const startBtn = document.getElementById('start-questionnaire-btn');
    const steps = document.querySelectorAll('.question-step');
    const currentStepIndicator = document.getElementById('current-step-display');

    let currentStep = 0; // 0-indexed (0 = step 1)

    if (startBtn) {
        startBtn.addEventListener('click', function () {
            introSection.classList.add('d-none');
            questionContainer.classList.remove('d-none');
            showStep(0);
        });
    }

    // Attach event listeners to Next/Back buttons dynamically
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => {
            nextStep();
        });
    });

    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', () => {
            prevStep();
        });
    });

    function showStep(index) {
        // Validation bound
        if (index < 0) index = 0;
        if (index >= steps.length) index = steps.length - 1;

        console.log(`Showing step ${index}`); // Debug

        // Hide all steps
        steps.forEach(step => step.classList.add('d-none'));

        // Show current step
        steps[index].classList.remove('d-none');

        // Update state
        currentStep = index;

        // Update indicator text
        if (currentStepIndicator) {
            currentStepIndicator.textContent = `Question ${currentStep + 1} of ${steps.length}`;
        }
    }

    function nextStep() {
        if (currentStep >= steps.length - 1) {
            // Reached the end
            completeQuestionnaire();
        } else {
            showStep(currentStep + 1);
        }
    }

    function completeQuestionnaire() {
        questionContainer.classList.add('d-none');
        const completionMessage = document.getElementById('completion-message');
        if (completionMessage) {
            completionMessage.classList.remove('d-none');
        }
    }

    function prevStep() {
        showStep(currentStep - 1);
    }
});
