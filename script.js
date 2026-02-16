/* ---------------------------
   1) إعداد اللغة والترجمة
---------------------------- */

let currentLang = 'ar';

const translations = {
    ar: {
        home_title: "EL ASLE Driving School",
        home_subtitle: "خبرة منذ 2014 في تكوين السائقين باحترافية، انضباط، ونتائج ممتازة.",
        btn_book: "احجز الآن",
        btn_contact: "اتصل بنا",

        why_us_title: "لماذا تختار الأصل ؟",
        feat1_title: "خبرة أكثر من 10 سنوات",
        feat1_text: "تكوين احترافي منذ سنة 2014.",
        feat2_title: "مدربون محترفون",
        feat2_text: "فريق مؤهل.",
        feat3_title: "تكوين نظري وعملي",
        feat3_text: "دروس نظرية + تدريب عملي يومي.",
        feat4_title: "نتائج ممتازة",
        feat4_text: "نسبة نجاح عالية في الامتحانات...",

        contact_info_title: "معلومات الاتصال",
        contact_address: "📍 وهران – عين الترك – مقابل دار الشباب و مكتبة يوسفي",
        contact_phone: "📞 0776120968 / 0792437124",
        contact_hours: "⏱️ كل يوم من 08:00 إلى 20:00 (ما عدا الجمعة)",

        footer_text: "© 2024 EL ASSEL Driving School – جميع الحقوق محفوظة",

        about_title: "من نحن",
        about_subtitle: "EL ASLE Driving School – خبرة، انضباط، ونتائج مضمونة.",
        about_story_title: "قصتنا",
        about_story_text: "تأسست مدرسة EL ASLE Driving School سنة 2014 على يد المدرب قادة...",
        about_mission_title: "رسالتنا",
        about_mission_text: "نهدف إلى تكوين سائقين مسؤولين...",
        about_team_title: "فريق العمل",

        services_title: "الخدمات",
        services_subtitle: "برامج تكوين متكاملة تشمل الجانب النظري والعملي لكل الأصناف.",

        booking_title: "حجز ساعة إضافية",
        booking_subtitle: "املأ النموذج التالي لحجز ساعة إضافية للتدريب العملي.",
        form_name_label: "الاسم الكامل",
        form_phone_label: "رقم الهاتف",
        form_day_label: "اليوم المرغوب",
        form_time_label: "الساعة المرغوبة",
        form_day_select: "اختر اليوم",
        form_time_select: "اختر الساعة",
        form_submit: "إرسال الطلب عبر واتساب",

        contact_title: "اتصل بنا",
        contact_subtitle: "نحن في خدمتك للإجابة عن جميع استفساراتك.",
        btn_call: "اتصال مباشر",
        btn_whatsapp: "مراسلة عبر واتساب",
        map_title: "موقعنا على الخريطة",
        map_text: "يمكنك زيارتنا مباشرة في عين الترك – مقابل دار الشباب."
    },

    en: {
        home_title: "EL ASLE Driving School",
        home_subtitle: "Training drivers since 2014 with professionalism and excellent results.",
        btn_book: "Book Now",
        btn_contact: "Contact Us",

        why_us_title: "Why choose EL ASLE?",
        feat1_title: "Over 10 years of experience",
        feat1_text: "Professional training since 2014.",
        feat2_title: "Professional instructors",
        feat2_text: "Qualified team.",
        feat3_title: "Theory & practical training",
        feat3_text: "Theory lessons + daily practice.",
        feat4_title: "Excellent results",
        feat4_text: "High success rate.",

        contact_info_title: "Contact Information",
        contact_address: "📍 Oran – Aïn El Turck – in front of the Youth Center",
        contact_phone: "📞 0776120968 / 0792437124",
        contact_hours: "⏱️ Every day from 08:00 to 20:00 (except Friday)",

        footer_text: "© 2024 EL ASSEL Driving School – All rights reserved.",

        about_title: "About Us",
        about_subtitle: "Experience, discipline, and guaranteed results.",
        about_story_title: "Our Story",
        about_story_text: "EL ASLE Driving School was founded in 2014...",
        about_mission_title: "Our Mission",
        about_mission_text: "We aim to train responsible drivers...",
        about_team_title: "Our Team",

        services_title: "Services",
        services_subtitle: "Comprehensive training programs.",

        booking_title: "Book an Extra Hour",
        booking_subtitle: "Fill the form below to book an extra hour.",
        form_name_label: "Full Name",
        form_phone_label: "Phone Number",
        form_day_label: "Preferred Day",
        form_time_label: "Preferred Time",
        form_day_select: "Select a day",
        form_time_select: "Select a time",
        form_submit: "Send via WhatsApp",

        contact_title: "Contact Us",
        contact_subtitle: "We are here to help.",
        btn_call: "Call Now",
        btn_whatsapp: "Message on WhatsApp",
        map_title: "Our Location",
        map_text: "Visit us in Aïn El Turck."
    }
};


/* ---------------------------
   2) تطبيق الترجمة
---------------------------- */

function applyTranslations(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations("ar");
});


/* ---------------------------
   3) إرسال طلب واتساب
---------------------------- */

function sendWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const day = document.getElementById("day")?.value;
    const time = document.getElementById("time")?.value;

    if (!name || !phone || !day || !time) {
        alert(currentLang === 'ar'
            ? "الرجاء ملء جميع الحقول."
            : "Please fill in all fields.");
        return false;
    }

    const msgAr = `مرحبا، اسمي ${name}، رقمي ${phone}. أود حجز ساعة إضافية يوم ${day} على الساعة ${time}.`;
    const msgEn = `Hello, my name is ${name}, my phone number is ${phone}. I want to book an extra hour on ${day} at ${time}.`;

    const message = currentLang === 'ar' ? msgAr : msgEn;
    const phoneNumber = "213776120968";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}


/* ---------------------------
   4) تأثير تحميل الصفحة
---------------------------- */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/* ---------------------------
   5) الهيدر الذكي (يظهر/يختفي)
---------------------------- */

let lastScroll = 0;
const header = document.querySelector(".smart-header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("hide");
        header.classList.remove("show");
    } else {
        header.classList.add("show");
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});
