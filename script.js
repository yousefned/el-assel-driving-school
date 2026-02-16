let currentLang = 'ar';

const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "الخدمات",
        nav_booking: "الحجز",
        nav_contact: "اتصل بنا",

        home_title: "EL ASLE Driving School",
        home_subtitle: "خبرة منذ 2014 في تكوين السائقين باحترافية، انضباط، ونتائج ممتازة.",
        btn_book: "احجز الآن",
        btn_contact: "اتصل بنا",

        why_us_title: "لماذا تختار EL ASLE؟",
        feat1_title: "خبرة أكثر من 10 سنوات",
        feat1_text: "تكوين احترافي منذ سنة 2014.",
        feat2_title: "مدربون محترفون",
        feat2_text: "فريق مؤهل.",
        feat3_title: "تكوين نظري وعملي",
        feat3_text: "دروس نظرية + تدريب عملي يومي.",
        feat4_title: "نتائج ممتازة",
        feat4_text: "نسبة نجاح عالية في الامتحانات...",

        contact_info_title: "معلومات الاتصال",
        contact_info_title2: "معلومات الاتصال",
        contact_address: "📍 وهران – عين الترك – مقابل دار الشباب و مكتبة يوسفي",
        contact_phone: "📞 0776120968 / 0792437124",
        contact_hours: "⏱️ كل يوم من 08:00 إلى 20:00 (ما عدا الجمعة)",

        footer_text: "© 2024 EL ASLE Driving School – جميع الحقوق محفوظة",

        about_title: "من نحن",
        about_subtitle: "EL ASLE Driving School – خبرة، انضباط، ونتائج مضمونة.",
        about_story_title: "قصتنا",
        about_story_text: "تأسست مدرسة EL ASLE Driving School سنة 2014 على يد المدرب قادة، بهدف تقديم تكوين احترافي يجمع بين الخبرة، الانضباط، والنتائج المضمونة. بفضل برامج تدريبية متكاملة تشمل الجانب النظري والعملي، أصبحت المدرسة واحدة من أبرز مدارس تعليم السياقة في عين الترك – وهران.",
        about_mission_title: "رسالتنا",
        about_mission_text: "نهدف إلى تكوين سائقين مسؤولين، يحترمون قانون المرور، ويقودون بثقة وأمان على الطريق. نركز على الجانب التطبيقي والنفسي للسائق، لضمان جاهزيته الكاملة قبل الامتحان وبعده.",
        about_team_title: "فريق العمل",
        coach1_name: "نجادي قادة",
        coach1_role: "مدرب رئيسي – خبرة طويلة في التدريب العملي وتكوين السائقين.",
        coach2_name: "نجادي عبد المجيد",
        coach2_role: "مدرب تطبيقي – متخصص في مرافقة المتدربين في الحصص العملية.",

        services_title: "الخدمات",
        services_subtitle: "برامج تكوين متكاملة تشمل الجانب النظري والعملي لكل الأصناف.",
        service1_title: "تعليم سياقة كل الأصناف",
        service1_text: "نقدم تكوينًا في سياقة السيارات الخفيفة، مع إمكانية إضافة أصناف أخرى حسب الطلب. التركيز يكون على التحكم في المركبة، احترام قانون المرور، والتصرف السليم في الطريق.",
        service2_title: "الدروس النظرية (Code)",
        service2_text: "تقدم الدروس النظرية أيام الثلاثاء، الأربعاء، والسبت من الساعة 17:00 إلى 18:00. تشمل شرح قانون المرور، الإشارات، الأولويات، ونصائح للنجاح في الامتحان النظري.",
        service3_title: "التدريب العملي",
        service3_text: "التدريب العملي متوفر يوميًا من 08:00 إلى 12:00 ومن 13:00 إلى 18:00، ما عدا يوم الجمعة. يتم التكوين على الطريق وفي مختلف الظروف لضمان جاهزية المتدرب.",
        service4_title: "ساعات إضافية",
        service4_text: "نوفر ساعات إضافية للتدريب العملي بسعر 1000 دج للساعة، مخصصة للمتدربين الذين يرغبون في تعزيز ثقتهم قبل الامتحان.",

        booking_title: "حجز ساعة إضافية",
        booking_subtitle: "املأ النموذج التالي لحجز ساعة إضافية للتدريب العملي.",
        form_name_label: "الاسم الكامل",
        form_phone_label: "رقم الهاتف",
        form_day_label: "اليوم المرغوب",
        form_time_label: "الساعة المرغوبة",
        form_day_select: "اختر اليوم",
        form_time_select: "اختر الساعة",
        day_sat: "السبت",
        day_sun: "الأحد",
        day_mon: "الاثنين",
        day_tue: "الثلاثاء",
        day_wed: "الأربعاء",
        day_thu: "الخميس",
        form_submit: "إرسال الطلب عبر واتساب",

        contact_title: "اتصل بنا",
        contact_subtitle: "نحن في خدمتك للإجابة عن جميع استفساراتك.",
        btn_call: "اتصال مباشر",
        btn_whatsapp: "مراسلة عبر واتساب",
        map_title: "موقعنا على الخريطة",
        map_text: "يمكنك زيارتنا مباشرة في عين الترك – مقابل دار الشباب."
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_booking: "Booking",
        nav_contact: "Contact",

        home_title: "EL ASLE Driving School",
        home_subtitle: "Training drivers since 2014 with professionalism, discipline, and excellent results.",
        btn_book: "Book Now",
        btn_contact: "Contact Us",

        why_us_title: "Why choose EL ASLE?",
        feat1_title: "Over 10 years of experience",
        feat1_text: "Professional training since 2014.",
        feat2_title: "Professional instructors",
        feat2_text: "Qualified team led by Kadda and Abdelmadjid.",
        feat3_title: "Theory and practical training",
        feat3_text: "Theory lessons + daily practical sessions.",
        feat4_title: "Excellent results",
        feat4_text: "High success rate in exams.",

        contact_info_title: "Contact Information",
        contact_info_title2: "Contact Information",
        contact_address: "📍 Oran – Aïn El Turck – in front of the Youth Center ",
        contact_phone: "📞 0776120968 / 0792437124",
        contact_hours: "⏱️ Every day from 08:00 to 20:00 (except Friday)",

        footer_text: "© 2024 EL ASSEL Driving School – All rights reserved.",

        about_title: "About Us",
        about_subtitle: "EL ASLE Driving School – Experience, discipline, and guaranteed results.",
        about_story_title: "Our Story",
        about_story_text: "EL ASSEL Driving School was founded in 2014 by instructor Kadda, with the goal of providing professional training that combines experience, discipline, and guaranteed results. Thanks to comprehensive programs covering both theory and practice, the school has become one of the leading driving schools in Aïn El Turck – Oran.",
        about_mission_title: "Our Mission",
        about_mission_text: "We aim to train responsible drivers who respect traffic laws and drive with confidence and safety. We focus on both the practical and psychological aspects of driving to ensure full readiness before and after the exam.",
        about_team_title: "Our Team",
        coach1_name: "Nedjadi Kadda",
        coach1_role: "Head instructor – extensive experience in practical training.",
        coach2_name: "Nedjadi Abdelmadjid",
        coach2_role: "Practical instructor – specialized in accompanying trainees during driving sessions.",

        services_title: "Services",
        services_subtitle: "Comprehensive training programs covering theory and practice for all categories.",
        service1_title: "Driving lessons (all categories)",
        service1_text: "We provide training for light vehicles, with the possibility to add more categories upon request. Focus is on vehicle control, traffic law, and correct behavior on the road.",
        service2_title: "Theory lessons (Code)",
        service2_text: "Theory lessons are offered on Tuesday, Wednesday, and Saturday from 17:00 to 18:00. They include traffic law, signs, priorities, and tips to pass the theory exam.",
        service3_title: "Practical training",
        service3_text: "Practical training is available daily from 08:00 to 12:00 and from 13:00 to 18:00, except Friday. Training is done on the road and in various conditions to ensure full readiness.",
        service4_title: "Extra hours",
        service4_text: "We offer extra practical training hours at 1000 DZD per hour, for trainees who want to boost their confidence before the exam.",

        booking_title: "Book an Extra Hour",
        booking_subtitle: "Fill in the form below to book an extra practical training hour.",
        form_name_label: "Full Name",
        form_phone_label: "Phone Number",
        form_day_label: "Preferred Day",
        form_time_label: "Preferred Time",
        form_day_select: "Select a day",
        form_time_select: "Select a time",
        day_sat: "Saturday",
        day_sun: "Sunday",
        day_mon: "Monday",
        day_tue: "Tuesday",
        day_wed: "Wednesday",
        day_thu: "Thursday",
        form_submit: "Send request via WhatsApp",

        contact_title: "Contact Us",
        contact_subtitle: "We are here to answer all your questions.",
        btn_call: "Call Now",
        btn_whatsapp: "Message on WhatsApp",
        map_title: "Our Location",
        map_text: "You can visit us directly in Aïn El Turck – in front of the Youth Center."
    }
};

function applyTranslations(lang) {
    currentLang = lang;

    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // placeholders
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    if (nameInput) {
        nameInput.placeholder = lang === 'ar'
            ? nameInput.getAttribute("data-placeholder-ar")
            : nameInput.getAttribute("data-placeholder-en");
    }
    if (phoneInput) {
        phoneInput.placeholder = lang === 'ar'
            ? phoneInput.getAttribute("data-placeholder-ar")
            : phoneInput.getAttribute("data-placeholder-en");
    }

    if (lang === 'ar') {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
    }

    const arBtn = document.getElementById("ar-btn");
    const enBtn = document.getElementById("en-btn");
    if (arBtn && enBtn) {
        if (lang === 'ar') {
            arBtn.classList.add("active-lang");
            enBtn.classList.remove("active-lang");
        } else {
            enBtn.classList.add("active-lang");
            arBtn.classList.remove("active-lang");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const arBtn = document.getElementById("ar-btn");
    const enBtn = document.getElementById("en-btn");

    if (arBtn && enBtn) {
        arBtn.addEventListener("click", () => applyTranslations('ar'));
        enBtn.addEventListener("click", () => applyTranslations('en'));
    }

    applyTranslations('ar');
});

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

    const msgAr = `مرحبا، اسمي ${name}، رقمي ${phone}. أود حجز ساعة إضافية للتدريب العملي يوم ${day} على الساعة ${time}.`;
    const msgEn = `Hello, my name is ${name}, my phone number is ${phone}. I would like to book an extra practical training hour on ${day} at ${time}.`;

    const message = currentLang === 'ar' ? msgAr : msgEn;

    const phoneNumber = "213776120968";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    return false;
}
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
