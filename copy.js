// В ЭТОМ КОДЕ ИСПОЛЬЗУЮТСЯ ПЛАВНЫЕ ПОЯВЛЕНИЯ ВМЕСТЕ С БУФЕРОМ ОБМЕНА ИЗ-ЗА ПЕРЕГЗРУЗКИ ОСНОВНОГО ФАЙЛА SCRIPT.JS


// копирование ключей
document.querySelectorAll('.copy').forEach(button => {
    button.addEventListener('click', function() {
        const codeElement = this.parentElement.querySelector('.code p');
        const codeText = codeElement.innerText;

        navigator.clipboard.writeText(codeText).then(() => {
            this.innerText = 'Успешно';

            setTimeout(() => {
                this.innerText = 'Скопировать';
            }, 2000);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    });
});

// плавное появления
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-hello, .animate-key, .animate-container_footer, .animate-icons');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


// плавное появления СКАЧАТЬ ПО
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-hello, .animate-download, .animate-enter_id');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
