document.addEventListener('DOMContentLoaded', () => {
    const yearInput = document.getElementById('yearInput');
    const checkBtn = document.getElementById('checkBtn');
    const resultContainer = document.getElementById('resultContainer');
    const welcomeState = document.getElementById('welcomeState');
    const resultIcon = document.getElementById('resultIcon');
    const resultText = document.getElementById('resultText');
    const resultSubtext = document.getElementById('resultSubtext');
    const calendarGrid = document.getElementById('calendarGrid');
    const displayYear = document.getElementById('displayYear');

    checkBtn.addEventListener('click', () => {
        checkLeapYear();
    });

    yearInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkLeapYear();
        }
    });

    function checkLeapYear() {
        const year = parseInt(yearInput.value);

        if (isNaN(year) || year < 0) {
            alert('Please enter a valid positive year.');
            return;
        }

        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        // UI Update
        welcomeState.classList.add('d-none');
        resultContainer.classList.remove('d-none');
        resultContainer.classList.add('fade-in-up'); // Custom animation class if we added it, or just rely on CSS
        
        displayYear.textContent = year;

        if (isLeap) {
            resultIcon.innerHTML = '<i class="fas fa-check-circle leap-success" style="font-size: 4rem;"></i>';
            resultText.textContent = `${year} is a Leap Year!`;
            resultText.className = 'fw-bold mb-1 text-white';
            resultSubtext.textContent = 'February has 29 days.';
        } else {
            resultIcon.innerHTML = '<i class="fas fa-times-circle leap-fail" style="font-size: 4rem;"></i>';
            resultText.textContent = `${year} is NOT a Leap Year`;
            resultText.className = 'fw-bold mb-1 text-white';
            resultSubtext.textContent = 'February has 28 days.';
        }

        generateCalendar(year, isLeap);
    }

    function generateCalendar(year, isLeap) {
        calendarGrid.innerHTML = '';

        // Days of week header
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        days.forEach(day => {
            const el = document.createElement('div');
            el.className = 'calendar-header';
            el.textContent = day;
            calendarGrid.appendChild(el);
        });

        // February is month 1 (0-indexed)
        const firstDayOfFeb = new Date(year, 1, 1).getDay();
        const daysInFeb = isLeap ? 29 : 28;

        // Empty slots for previous month
        for (let i = 0; i < firstDayOfFeb; i++) {
            const el = document.createElement('div');
            el.className = 'calendar-day empty';
            calendarGrid.appendChild(el);
        }

        // Days of February
        for (let i = 1; i <= daysInFeb; i++) {
            const el = document.createElement('div');
            el.className = 'calendar-day';
            el.textContent = i;
            
            // Interaction effect (visual only)
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'scale(1.1)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1)';
            });

            // Highlight 29th if leap year
            if (isLeap && i === 29) {
                el.classList.add('active-day');
                el.title = "Leap Day!";
            }

            calendarGrid.appendChild(el);
        }
    }
});
