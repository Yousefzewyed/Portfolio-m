// welcome screen
window.addEventListener('load', () => {
// // //   // الصفحة تطلع فوق خالص أول ما تعمل ريلود
 window.scrollTo(0, 0);

const preloader = document.getElementById('preloader');


   setTimeout(() => {
preloader.style.opacity = '0';
 setTimeout(() => {
 preloader.style.visibility = 'hidden';
}, 400);
 }, 800);
});
document.addEventListener("DOMContentLoaded", function() {

//  background
  VANTA.NET({
  el: "#vanta-bg",
  mouseControls: false, // زي ما طلبت مقفولة عشان الهدوء
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  // --- التعديل هنا لتقريب اللون من الـ Gradient ---
  color: 0x6366f1,          // لون أزرق نيلي هادي يتماشى مع البداية والنهاية
  backgroundColor: 0x0b1120, // الخلفية الداكنة بتخلي الـ Gradient ينطق
  points: 8.00,             // العدد سمبل زي ما اتفقنا
  maxDistance: 25.00,
  spacing: 20.00
});
  // 3. حركة الإخفاء والظهور (Scroll Reveal)
  const reveals = document.querySelectorAll(".reveal");
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

  const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    scrollObserver.observe(reveal);
  });

  // 4. إغلاق قائمة الموبايل عند الضغط على أي رابط
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('menu-toggle');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });


const contactForm = document.querySelector('form'); // تأكد إن ده الفورم الصح

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // بنوقف التحميل التقليدي عشان نبعت بـ AJAX

    const formData = new FormData(this);
    const toast = document.getElementById('custom-toast');

    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // 1. تصفير الفورم
            this.reset();
            
            // 2. إظهار الرسالة الشيك (Toast)
            toast.classList.add('show');
            
            // 3. إخفاء الرسالة بعد 4 ثواني
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
            
            console.log("Success: Message sent to Formspree!");
        } else {
            alert("حدث خطأ ما، حاول مرة أخرى!");
        }
    } catch (error) {
        alert("تأكد من اتصالك بالإنترنت!");
    }
});
 function showToast() {
     const toast = document.getElementById('custom-toast');
    toast.classList.add('show');
     setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

});