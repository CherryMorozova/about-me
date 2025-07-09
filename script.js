
// Обновление значения range
document.getElementById('demo_a').addEventListener('input', function() {
  document.getElementById('demo_a_value').textContent = this.value;
});


// Обновление отображаемого значения цвета
document.getElementById('demo_color').addEventListener('input', function() {
    document.getElementById('color-value').textContent = this.value;
  });


  // Добавляем визуализацию tabindex для демо
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('[tabindex]');
    focusableElements.forEach(el => {
      el.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 0 2px #4CAF50';
      });
      el.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
      });
    });
  });

  // Реализация для демо-формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demoForm');
    const clearBtn = document.getElementById('demo_clear');
    
    // Сохранение данных
    form.addEventListener('input', function(e) {
      const formData = {
        name: document.getElementById('demo_name').value,
        email: document.getElementById('demo_email').value,
        message: document.getElementById('demo_message').value
      };
      localStorage.setItem('demoFormData', JSON.stringify(formData));
    });
    
    // Восстановление данных
    const savedData = localStorage.getItem('demoFormData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById('demo_name').value = formData.name || '';
      document.getElementById('demo_email').value = formData.email || '';
      document.getElementById('demo_message').value = formData.message || '';
    }
    
    // Очистка
    clearBtn.addEventListener('click', function() {
      localStorage.removeItem('demoFormData');
      form.reset();
    });
    
    // Очистка при отправке (для демо)
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.removeItem('demoFormData');
      alert('Форма отправлена! Данные очищены.');
      form.reset();
    });
  });

  // Обработчик для демо-кнопки
document.getElementById('demoJsBtn').addEventListener('click', function() {
    this.innerHTML = '<span style="color:green">✓</span> Нажато!';
    setTimeout(() => {
      this.innerHTML = '<span style="color:red">★</span> Нажми меня';
    }, 1000);
  });

  function toggleMenu() {
    const nav = document.getElementById("nav");
    const expanded = nav.classList.toggle("open");
    document.querySelector(".burger").setAttribute("aria-expanded", expanded);
  }