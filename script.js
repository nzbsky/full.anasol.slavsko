     // Плавна прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Зміна навігації при скролі
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Обробка форми бронювання
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Тут можна додати відправку форми на сервер
            alert('Дякуємо за ваше бронювання! Ми зв\'яжемося з вами для підтвердження.');
            this.reset();
        });
        
        // Анімації при скролі
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });