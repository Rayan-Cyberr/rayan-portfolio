/* Rayan Cybersecurity Portfolio
 * Client-side interactions only. No secrets, API keys, or backend credentials belong here.
 */

const skillModal = document.getElementById("skillModal");
const projectModal = document.getElementById("projectModal");
const imagePreview = document.getElementById("imagePreview");
const imagePreviewImage = document.getElementById("imagePreviewImage");

const skillModalTitle = document.getElementById("skillModalTitle");
const skillModalDesc = document.getElementById("skillModalDesc");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalSubtitle = document.getElementById("projectModalSubtitle");
const projectModalTags = document.getElementById("projectModalTags");
const projectGallery = document.getElementById("projectGallery");
const projectActions = document.getElementById("projectActions");
const projectModalBody = document.getElementById("projectModalBody");

const projectsData = {
    malware: {
        title: "Malware Analysis Lab",
        subtitle: "Graduation Project · Imam Muhammad ibn Saud Islamic University · Team of 4",
        tags: ["VirtualBox", "FLARE VM", "REMnux", "Wireshark", "ProcMon", "VirusTotal", "INetSim"],
        gallery: [
            { src: "assets/gallery/malware-cover.png", alt: "Malware Analysis Lab project cover", caption: "Project cover" },
            { src: "assets/gallery/malware-tools-overview.png", alt: "Static and dynamic malware analysis tools used", caption: "Tools overview" },
            { src: "assets/gallery/malware-lab-setup.png", alt: "Malware analysis system design and lab requirements", caption: "Isolated lab design" },
            { src: "assets/gallery/malware-test-results.png", alt: "Malware analysis testing and results", caption: "Testing and results" }
        ],
        sections: [
            {
                heading: "Overview",
                text: "Modern malware is built to evade regular antivirus tools and often hides its behavior until it runs. Our team built a fully isolated lab to safely detonate real malware samples, observe exactly what they do, and pull out indicators of compromise (IOCs) without any risk to a real system."
            },
            {
                heading: "What I worked on",
                list: [
                    "Set up a Windows victim VM (FLARE VM) and a Linux analysis VM (REMnux) inside VirtualBox",
                    "Isolated the lab network from the host: custom DHCP range, and rerouted DNS through INetSim on REMnux so the malware believes it has internet access while staying fully contained",
                    "Took a snapshot before every step so we could always roll back to a clean state",
                    "Ran static analysis with PEview and FLOSS to inspect the file structure and pull out hidden/obfuscated strings, then checked the sample against VirusTotal",
                    "Ran dynamic analysis by executing the sample and watching it live with ProcMon (file/registry changes) and Wireshark (network traffic, including its HTTP requests)",
                    "Pulled the sample's SHA256 and MD5 hashes via command line for identification and reporting"
                ]
            },
            {
                heading: "Outcome",
                text: "We successfully documented the sample's behavior end-to-end — from the files it touched, to the network requests it made — and produced a clear IOC report. It gave me real hands-on experience with the exact workflow a malware analyst uses day to day."
            }
        ]
    },
    cti: {
        title: "Cyber Threat Intelligence Report",
        subtitle: "Tuwaiq Academy Project · Team of 4",
        tags: ["OSINT", "Threat Intelligence", "Attack Surface Mapping", "Risk Reporting"],
        gallery: [
            { src: "assets/gallery/cti-cover.png", alt: "Cyber Threat Intelligence report cover", caption: "Report cover" },
            { src: "assets/gallery/cti-attack-vectors.png", alt: "Main cyber attack vectors identified in the assessment", caption: "Key attack vectors" },
            { src: "assets/gallery/cti-threat-assessment.png", alt: "Threat and risk assessment ranking", caption: "Threat & risk assessment" },
            { src: "assets/gallery/cti-recommendations.png", alt: "Immediate and long-term cybersecurity recommendations", caption: "Recommendations" }
        ],
        sections: [
            {
                heading: "The scenario",
                text: "Our team played the role of a CTI consulting company. A client had just received a job offer from a university in an unfamiliar city and country, and wanted an independent risk assessment before accepting — covering the university's digital reputation, the safety of the destination city, and its exposure to cyberattacks."
            },
            {
                heading: "What I worked on",
                list: [
                    "Ran OSINT research on the university's leadership using public search platforms, uncovering exposed personal emails and phone numbers that could enable targeted phishing or social engineering",
                    "Reviewed recent news coverage and public breach-tracking sites, surfacing past incidents such as a third-party ransomware breach and personal email leaks tied to a data breach",
                    "Mapped the university's external attack surface using Shodan, identifying open ports (SSH, Kerberos, HTTPS) that represent potential entry points if credentials are ever weak",
                    "Compared candidate destination cities on safety, political stability, infrastructure, and healthcare access to advise on the safest choice for international travel",
                    "Compiled a full risk register (critical / high / medium) covering ransomware, phishing, exposed ports, and reputational risk, each with a recommended response"
                ]
            },
            {
                heading: "Outcome",
                text: "We delivered a full intelligence report with an executive summary, a ranked risk assessment, and a prioritized action plan split into immediate (0-30 day) and long-term (1-12 month) recommendations — plus a clear final recommendation on both the safest destination and the cybersecurity steps the university should take first."
            }
        ]
    },
    portfolio: {
        title: "This Portfolio Website",
        subtitle: "Personal Project · Solo",
        tags: ["HTML", "CSS", "JavaScript"],
        gallery: [
            { src: "assets/rayan-cyber-hero.png", alt: "Rayan cybersecurity portfolio hero section", caption: "Portfolio hero section" }
        ],
        sections: [
            {
                heading: "Overview",
                text: "My personal portfolio, built from scratch to present myself to employers: who I am, what I've trained in, the skills I bring, and the projects I've worked on."
            },
            {
                heading: "What's in it",
                list: [
                    "A hero section introducing me and my focus area",
                    "An about section with my background and education",
                    "A categorized, interactive skills section with quick explanations for each skill",
                    "A timeline of my practical experience",
                    "This projects section you're looking at right now"
                ]
            }
        ]
    }
};

/* ---------- Bilingual UI ---------- */
const languageButtons = document.querySelectorAll(".language-button");
let currentLanguage = localStorage.getItem("rayan-language") || "en";

const translations = {
    en: {
        "nav.about": "About Me", "nav.skills": "Skills", "nav.experience": "Experience",
        "nav.certifications": "Certifications", "nav.projects": "Projects", "nav.contact": "Contact",
        "hero.badge": "SOC Analyst | Cybersecurity Graduate", "hero.greeting": "I'm Rayan", "hero.title": "Cybersecurity",
        "hero.subtitle": "CompTIA Security+ | SIEM Monitoring | Incident Response", "hero.hire": "Hire me",
        "hero.viewCv": "View CV", "hero.downloadCv": "Download CV",
        "terminal.whoami": "Cybersecurity Graduate · SOC Trainee", "terminal.focus": "SOC · SIEM · Blue Team · Malware Analysis",
        "terminal.status": "Open to opportunities",
        "about.about": "About", "about.me": "me",
        "about.bio": "Hey, I'm Rayan, a Cybersecurity graduate from Imam Muhammad ibn Saud Islamic University (GPA 4.61/5). I gained hands-on SOC experience through training at SDAIA, where I monitored and analyzed security alerts using SIEM tools, investigated logs for suspicious activity, and built use cases and dashboards to improve monitoring and reporting. I hold a CompTIA Security+ certification and built a malware analysis lab as my graduation project using REMnux and FLARE VM. Now looking to start my career as an entry-level SOC analyst.",
        "common.my": "My", "skills.title": "Skills", "skills.subtitle": "Core areas I've worked in, and the tools I use to get the job done.",
        "skillCats.cybersecurity": "Cybersecurity", "skillCats.tools": "Tools", "skillCats.technical": "Technical",
        "experience.title": "Experience", "experience.subtitle": "Where I trained, and the hands-on experience I built along the way.",
        "experience.date": "Aug – Dec 2025", "experience.location": "Riyadh, Saudi Arabia", "experience.role": "SOC Trainee",
        "projects.title": "Projects", "projects.subtitle": "A few things I've built and worked on.",
        "projects.caseStudy": "Case study", "projects.viewDetails": "View Details",
        "certifications.title": "Certifications", "certifications.subtitle": "Credentials and focused training that support my cybersecurity journey.",
        "certifications.certificate": "Certificate", "certifications.viewCertificate": "View certificate", "certifications.professionalTraining": "Professional training",
        "contact.kicker": "Open to opportunities", "contact.lets": "Let's", "contact.connect": "connect",
        "contact.text": "Have an opportunity, a security project, or just want to talk cybersecurity? You can reach me directly through email or LinkedIn.",
        "contact.emailLabel": "Email me", "contact.linkedinLabel": "Connect on LinkedIn"
    },
    ar: {
        "nav.about": "نبذة عني", "nav.skills": "المهارات", "nav.experience": "الخبرة",
        "nav.certifications": "الشهادات", "nav.projects": "المشاريع", "nav.contact": "تواصل معي",
        "hero.badge": "محلل SOC | خريج أمن سيبراني", "hero.greeting": "أنا ريان", "hero.title": "الأمن السيبراني",
        "hero.subtitle": "CompTIA Security+ | مراقبة SIEM | الاستجابة للحوادث", "hero.hire": "نبذة عني",
        "hero.viewCv": "عرض السيرة الذاتية", "hero.downloadCv": "تحميل السيرة الذاتية",
        "terminal.whoami": "خريج أمن سيبراني · متدرب SOC", "terminal.focus": "SOC · SIEM · Blue Team · تحليل البرمجيات الخبيثة",
        "terminal.status": "متاح للفرص المهنية",
        "about.about": "نبذة", "about.me": "عني",
        "about.bio": "مرحبًا، أنا ريان، خريج أمن سيبراني من جامعة الإمام محمد بن سعود الإسلامية بمعدل 4.61/5. اكتسبت خبرة عملية في مجال SOC من خلال التدريب في سدايا، حيث عملت على مراقبة وتحليل التنبيهات الأمنية باستخدام أدوات SIEM، والتحقيق في السجلات والأنشطة المشبوهة، وبناء حالات استخدام ولوحات متابعة لتحسين المراقبة والتقارير. أحمل شهادة CompTIA Security+، وقمت ببناء مختبر لتحليل البرمجيات الخبيثة كمشروع تخرج باستخدام REMnux وFLARE VM. أبحث حاليًا عن بدء مسيرتي المهنية في مجال SOC للمستوى المبتدئ.",
        "common.my": "My", "skills.title": "Skills", "skills.subtitle": "أهم المجالات التي عملت عليها والأدوات التي أستخدمها في العمل الأمني.",
        "skillCats.cybersecurity": "الأمن السيبراني", "skillCats.tools": "الأدوات", "skillCats.technical": "تقني",
        "experience.title": "الخبرة", "experience.subtitle": "أماكن التدريب والخبرة العملية التي اكتسبتها خلال رحلتي.",
        "experience.date": "أغسطس – ديسمبر 2025", "experience.location": "الرياض، المملكة العربية السعودية", "experience.role": "متدرب SOC",
        "projects.title": "المشاريع", "projects.subtitle": "بعض المشاريع التي أنجزتها وعملت عليها مع فريقي.",
        "projects.caseStudy": "دراسة حالة", "projects.viewDetails": "عرض التفاصيل",
        "certifications.title": "الشهادات", "certifications.subtitle": "شهادات ودورات متخصصة تدعم مسيرتي في الأمن السيبراني.",
        "certifications.certificate": "شهادة", "certifications.viewCertificate": "عرض الشهادة", "certifications.professionalTraining": "تدريب مهني",
        "contact.kicker": "متاح للفرص المهنية", "contact.lets": "لنتواصل", "contact.connect": "معًا",
        "contact.text": "لديك فرصة وظيفية، مشروع أمني، أو ترغب فقط في الحديث عن الأمن السيبراني؟ يمكنك التواصل معي مباشرة عبر البريد الإلكتروني أو LinkedIn.",
        "contact.emailLabel": "راسلني بالبريد", "contact.linkedinLabel": "تواصل معي عبر LinkedIn"
    }
};

const skillTranslations = {
    "SOC Operations": ["عمليات SOC", "إدارة العمليات اليومية لمركز العمليات الأمنية ومراقبة الأنظمة لاكتشاف التهديدات مبكرًا."],
    "Security Monitoring": ["المراقبة الأمنية", "مراقبة السجلات والأحداث بشكل مستمر لاكتشاف الأنشطة غير المعتادة قبل أن تتحول إلى مشكلة أمنية."],
    "Alert Analysis": ["تحليل التنبيهات", "مراجعة التنبيهات الأمنية لتمييز التهديدات الحقيقية عن التنبيهات الكاذبة وتحديد الأولويات."],
    "Incident Response": ["الاستجابة للحوادث", "اتباع منهج واضح لاحتواء الحوادث الأمنية والتحقيق فيها والتعافي منها بأسرع وقت ممكن."],
    "Threat Intelligence": ["التهديدات الاستخباراتية", "جمع واستخدام المعلومات عن أساليب المهاجمين والتهديدات المعروفة لدعم الدفاع الأمني."],
    "Malware Analysis": ["تحليل البرمجيات الخبيثة", "فحص الملفات والبرامج المشبوهة لفهم سلوكها وتحديد مدى خطورتها."],
    "Splunk": ["Splunk", "منصة SIEM لجمع السجلات والبحث فيها وعرضها للمساعدة في اكتشاف التهديدات."],
    "LogRhythm": ["LogRhythm", "أداة SIEM لمركزة السجلات الأمنية وبناء قواعد الكشف ولوحات المراقبة."],
    "Nmap": ["Nmap", "أداة لفحص الشبكات واكتشاف الأجهزة والمنافذ المفتوحة والخدمات التي تعمل عليها."],
    "Burp Suite": ["Burp Suite", "أداة لاختبار تطبيقات الويب واكتشاف الثغرات الأمنية في التطبيقات."],
    "VirusTotal": ["VirusTotal", "خدمة تفحص الملفات والروابط عبر محركات حماية متعددة للمساعدة في اكتشاف الأنشطة الخبيثة."],
    "YARA Rules": ["قواعد YARA", "أداة مطابقة أنماط تساعد في اكتشاف وتصنيف البرمجيات الخبيثة بناءً على خصائصها."],
    "ELK Stack": ["ELK Stack", "مجموعة Elasticsearch وLogstash وKibana لجمع البيانات والسجلات والبحث فيها وعرضها."],
    "Linux": ["Linux", "استخدام الطرفية للتعامل مع الأنظمة وتشغيل أدوات الأمن وتحليل السجلات، خصوصًا في بيئات التحليل."],
    "Windows": ["Windows", "العمل مع Windows من منظور دفاعي، مثل قراءة Event Viewer ومتابعة نشاط العمليات وفهم أساليب الهجوم."],
    "Networking": ["الشبكات", "فهم حركة البيانات عبر الشبكات، بما في ذلك عناوين IP والبروتوكولات ونقاط حدوث الهجمات."],
    "Active Directory": ["Active Directory", "نظام Microsoft لإدارة المستخدمين والأجهزة والصلاحيات داخل شبكات المؤسسات."],
    "Python": ["Python", "لغة برمجة تُستخدم لأتمتة المهام الأمنية وتحليل السجلات وبناء أدوات صغيرة مخصصة."],
    "Virtualization": ["الافتراضية", "تشغيل أجهزة افتراضية معزولة لاختبار الأدوات ومحاكاة الهجمات وبناء بيئات مختبر آمنة."]
};

const projectTranslations = {
    malware: {
        title: "مختبر تحليل البرمجيات الخبيثة", subtitle: "مشروع التخرج · جامعة الإمام محمد بن سعود الإسلامية · فريق من 4 أشخاص",
        sections: [
            ["نظرة عامة", "تم تصميم مختبر معزول وآمن لتحليل عينات برمجيات خبيثة حقيقية ومراقبة سلوكها واستخراج مؤشرات الاختراق (IOCs) دون التأثير على النظام الحقيقي."],
            ["ما الذي عملت عليه", ["إعداد جهاز Windows ضحية (FLARE VM) وجهاز Linux للتحليل (REMnux) داخل VirtualBox", "عزل شبكة المختبر عن الجهاز المضيف مع توجيه DNS عبر INetSim", "أخذ Snapshot قبل كل مرحلة للعودة إلى حالة نظيفة", "تنفيذ التحليل الساكن باستخدام PEview وFLOSS والتحقق من العينة عبر VirusTotal", "تنفيذ التحليل الديناميكي ومراقبة تغييرات الملفات والسجل وحركة الشبكة باستخدام ProcMon وWireshark", "استخراج قيم SHA256 وMD5 للتعريف بالعينة والتوثيق"]],
            ["النتيجة", "تم توثيق سلوك العينة من البداية إلى النهاية وإعداد تقرير واضح لمؤشرات الاختراق، مما منحني خبرة عملية في سير عمل تحليل البرمجيات الخبيثة."]
        ]
    },
    cti: {
        title: "تقرير استخبارات التهديدات السيبرانية", subtitle: "مشروع أكاديمية طويق · فريق من 4 أشخاص",
        sections: [
            ["السيناريو", "قمنا بدور شركة استشارات في استخبارات التهديدات، وأجرينا تقييم مخاطر مستقلًا لعميل تلقى عرضًا وظيفيًا من جامعة في مدينة ودولة غير مألوفة."],
            ["ما الذي عملت عليه", ["إجراء بحث OSINT باستخدام المصادر العامة", "مراجعة الأخبار الحديثة ومصادر تتبع الاختراقات", "تحليل السطح الخارجي للهجوم باستخدام Shodan", "مقارنة المدن من ناحية السلامة والاستقرار والبنية التحتية والرعاية الصحية", "إعداد سجل مخاطر يغطي البرمجيات الخبيثة والتصيد والمنافذ المكشوفة والمخاطر السمعة"]],
            ["النتيجة", "تم تسليم تقرير استخبارات متكامل يتضمن ملخصًا تنفيذيًا وتقييمًا للمخاطر وخطة عمل ذات أولويات وإجراءات قصيرة وطويلة المدى."]
        ]
    },
    portfolio: {
        title: "موقع ملفي الشخصي", subtitle: "مشروع شخصي · تنفيذ فردي",
        sections: [
            ["نظرة عامة", "موقع شخصي تم بناؤه من الصفر لعرض خبرتي وتدريبي ومهاراتي ومشاريعي أمام أصحاب العمل بطريقة واضحة."],
            ["ماذا يحتوي", ["واجهة رئيسية تعرّف بي وبمجال تركيزي", "قسم نبذة عني وخلفيتي التعليمية", "قسم مهارات تفاعلي ومصنف مع شرح سريع لكل مهارة", "خط زمني لخبرتي العملية", "قسم المشاريع الذي تشاهده الآن"]]
        ]
    }
};

function getProjectData(key) {
    const base = projectsData[key];
    if (currentLanguage !== "ar" || !projectTranslations[key]) return base;
    const translated = projectTranslations[key];
    return {
        ...base,
        title: translated.title,
        subtitle: translated.subtitle,
        sections: translated.sections.map(([heading, content]) => ({ heading, ...(Array.isArray(content) ? {list: content} : {text: content}) }))
    };
}

function updateLanguage(lang) {
    currentLanguage = lang === "ar" ? "ar" : "en";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic-mode", currentLanguage === "ar");
    localStorage.setItem("rayan-language", currentLanguage);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[currentLanguage][key] !== undefined) element.textContent = translations[currentLanguage][key];
    });

    // Use natural Arabic wording for each section heading.
    const headingVariants = [
        ["#skills .section-title", ["My", "Skills"], ["مهاراتي", ""]],
        ["#experience .section-title", ["My", "Experience"], ["خبرتي", "العملية"]],
        ["#projects .section-title", ["My", "Projects"], ["مشاريعي", ""]],
        ["#certifications .section-title", ["My", "Certifications"], ["شهاداتي", ""]]
    ];
    headingVariants.forEach(([selector, en, ar]) => {
        const spans = document.querySelectorAll(`${selector} [data-i18n]`);
        if (spans.length >= 2) {
            const values = currentLanguage === "ar" ? ar : en;
            spans[0].textContent = values[0];
            spans[1].textContent = values[1];
        }
    });

    document.querySelectorAll(".skill-item[data-skill-title]").forEach((skill) => {
        const label = skill.querySelector(":scope > span:not(.skill-icon)");
        const key = skill.dataset.skillTitle;
        if (label) label.textContent = currentLanguage === "ar" && skillTranslations[key] ? skillTranslations[key][0] : key;
    });

    document.querySelectorAll(".timeline-title").forEach((el) => {
        el.textContent = currentLanguage === "ar" ? "تدريب SOC وSSA" : "SOC & SSA Training";
    });
    document.querySelectorAll(".timeline-org").forEach((el) => {
        el.textContent = currentLanguage === "ar" ? "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)" : "Saudi Data and Artificial Intelligence Authority (SDAIA)";
    });
    document.querySelectorAll(".timeline-checklist li").forEach((el) => {
        const texts = currentLanguage === "ar" ? [
            "راقبت وحللت التنبيهات الأمنية باستخدام أدوات SIEM",
            "حققت في السجلات بحثًا عن الأنشطة المشبوهة والخبيثة",
            "اكتسبت خبرة عملية في الاستجابة للحوادث عبر تحليل سجلات هجمات حقيقية",
            "دعمت فريق SSA في تهيئة الأنظمة الأمنية",
            "طورت حالات استخدام وبنيت لوحات متابعة أمنية",
            "تعاونت مع فريق SOC في العمليات اليومية"
        ] : [
            "Monitored and analyzed security alerts using SIEM tools",
            "Investigated logs for suspicious and malicious activity",
            "Gained exposure to incident response via real-world attack logs",
            "Supported the SSA team in configuring security systems",
            "Developed use cases and built security dashboards",
            "Collaborated with the SOC team on daily operations"
        ];
        const idx = Array.from(el.parentElement.children).indexOf(el);
        el.lastChild.textContent = ` ${texts[idx]}`;
    });

    const cards = [
        [".project-card:nth-child(1) .project-title", "Malware Analysis Lab", "مختبر تحليل البرمجيات الخبيثة"],
        [".project-card:nth-child(1) .project-desc", "Graduation project: built an isolated lab to safely detonate and analyze malware samples, then documented the indicators of compromise.", "مشروع التخرج: بنيت مختبرًا معزولًا لتفجير وتحليل عينات البرمجيات الخبيثة بأمان وتوثيق مؤشرات الاختراق."],
        [".project-card:nth-child(2) .project-title", "Cyber Threat Intelligence Report", "تقرير استخبارات التهديدات السيبرانية"],
        [".project-card:nth-child(2) .project-desc", "Tuwaiq Academy project: acted as a CTI consulting team producing a full risk assessment for a client considering a job offer abroad.", "مشروع أكاديمية طويق: عملنا كفريق استشارات في استخبارات التهديدات لإعداد تقييم مخاطر متكامل لعميل يدرس عرضًا وظيفيًا خارج المملكة."],
        [".project-card:nth-child(3) .project-title", "This Portfolio Website", "موقع ملفي الشخصي"],
        [".project-card:nth-child(3) .project-desc", "My personal portfolio, designed and built from scratch to showcase my skills, experience, and projects in cybersecurity.", "موقعي الشخصي، صممته وبنيته من الصفر لعرض مهاراتي وخبرتي ومشاريعي في الأمن السيبراني."]
    ];
    cards.forEach(([selector,en,ar]) => { const el=document.querySelector(selector); if(el) el.textContent=currentLanguage === "ar" ? ar : en; });

    document.querySelectorAll(".certification-link").forEach((el) => {
        const icon = el.querySelector("i");
        el.textContent = currentLanguage === "ar" ? "عرض الشهادة " : "View certificate ";
        if (icon) el.appendChild(icon);
    });
    document.querySelectorAll(".certification-card").forEach((card) => {
        const date = card.querySelector(".certification-date");
        if (!date) return;
        const icon = date.querySelector("i");
        if (icon && card.querySelector(".certification-title")?.textContent === "Cybersecurity Training Certificate") {
            date.lastChild.textContent = currentLanguage === "ar" ? " تدريب مهني" : " Professional training";
        }
    });

    languageButtons.forEach((button) => {
        const active = button.dataset.lang === currentLanguage;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    if (projectModal.classList.contains("active")) {
        const key = projectModal.dataset.projectKey;
        if (key) showProjectModal(key);
    }
}

languageButtons.forEach((button) => button.addEventListener("click", () => updateLanguage(button.dataset.lang)));

function showSkillModal(title, description) {
    if (currentLanguage === "ar" && skillTranslations[title]) {
        skillModalTitle.textContent = skillTranslations[title][0];
        skillModalDesc.textContent = skillTranslations[title][1];
    } else {
        skillModalTitle.textContent = title;
        skillModalDesc.textContent = description;
    }
    skillModal.classList.add("active");
}

function closeSkillModal() {
    skillModal.classList.remove("active");
}

function showImagePreview(src, alt) {
    imagePreviewImage.src = src;
    imagePreviewImage.alt = alt;
    imagePreview.classList.add("active");
}

function closeImagePreview() {
    imagePreview.classList.remove("active");
    imagePreviewImage.removeAttribute("src");
    imagePreviewImage.alt = "";
}

function createProjectGallery(data) {
    projectGallery.replaceChildren();

    if (!Array.isArray(data.gallery) || data.gallery.length === 0) {
        return;
    }

    const galleryGrid = document.createElement("div");
    galleryGrid.className = "project-gallery-grid";

    data.gallery.forEach((image) => {
        const figure = document.createElement("figure");
        figure.className = "project-gallery-item";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "project-gallery-button";
        button.setAttribute("aria-label", `View ${image.caption}`);
        button.addEventListener("click", () => showImagePreview(image.src, image.alt));

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";
        img.decoding = "async";

        const caption = document.createElement("span");
        caption.className = "project-gallery-caption";
        caption.append(document.createTextNode(image.caption));

        const expandIcon = document.createElement("i");
        expandIcon.className = "fa-solid fa-expand";
        caption.appendChild(expandIcon);

        button.append(img, caption);
        figure.appendChild(button);
        galleryGrid.appendChild(figure);
    });

    projectGallery.appendChild(galleryGrid);
}

function createProjectActions(data) {
    projectActions.replaceChildren();

    if (!data.report) {
        return;
    }

    const openReport = document.createElement("a");
    openReport.className = "project-action project-action-primary";
    openReport.href = data.report;
    openReport.target = "_blank";
    openReport.rel = "noopener noreferrer";
    openReport.append(document.createTextNode("Open full report "));

    const openIcon = document.createElement("i");
    openIcon.className = "fa-regular fa-eye";
    openReport.prepend(openIcon);

    const downloadReport = document.createElement("a");
    downloadReport.className = "project-action project-action-secondary";
    downloadReport.href = data.report;
    downloadReport.download = "";
    downloadReport.append(document.createTextNode("Download PDF "));

    const downloadIcon = document.createElement("i");
    downloadIcon.className = "fa-solid fa-download";
    downloadReport.prepend(downloadIcon);

    projectActions.append(openReport, downloadReport);
}

function createProjectBody(data) {
    projectModalBody.replaceChildren();

    data.sections.forEach((section) => {
        const heading = document.createElement("h4");
        heading.className = "project-modal-heading";
        heading.textContent = section.heading;
        projectModalBody.appendChild(heading);

        if (section.text) {
            const paragraph = document.createElement("p");
            paragraph.className = "project-modal-text";
            paragraph.textContent = section.text;
            projectModalBody.appendChild(paragraph);
        }

        if (Array.isArray(section.list)) {
            const list = document.createElement("ul");
            list.className = "project-modal-list";

            section.list.forEach((item) => {
                const listItem = document.createElement("li");
                const icon = document.createElement("i");
                icon.className = "fa-solid fa-check";
                listItem.append(icon, document.createTextNode(` ${item}`));
                list.appendChild(listItem);
            });

            projectModalBody.appendChild(list);
        }
    });
}

function showProjectModal(key) {
    const data = getProjectData(key);
    if (!data) return;

    projectModal.dataset.projectKey = key;
    projectModalTitle.textContent = data.title;
    projectModalSubtitle.textContent = data.subtitle;

    projectModalTags.replaceChildren();
    data.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        projectModalTags.appendChild(span);
    });

    createProjectGallery(data);
    createProjectActions(data);
    createProjectBody(data);
    projectModal.classList.add("active");
}

function closeProjectModal() {
    projectModal.classList.remove("active");
}

/* ---------- Skill buttons ---------- */
document.querySelectorAll(".skill-item[data-skill-title]").forEach((skill) => {
    skill.addEventListener("click", () => {
        showSkillModal(skill.dataset.skillTitle, skill.dataset.skillDescription);
    });
});

/* ---------- Project buttons ---------- */
document.querySelectorAll(".btn-view-details[data-project]").forEach((button) => {
    button.addEventListener("click", () => showProjectModal(button.dataset.project));
});

/* ---------- Modal close behavior ---------- */
document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
        const modalName = button.dataset.closeModal;
        if (modalName === "skill") closeSkillModal();
        if (modalName === "project") closeProjectModal();
        if (modalName === "image") closeImagePreview();
    });
});

[skillModal, projectModal, imagePreview].forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target !== modal) return;
        if (modal === skillModal) closeSkillModal();
        if (modal === projectModal) closeProjectModal();
        if (modal === imagePreview) closeImagePreview();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeSkillModal();
    closeProjectModal();
    closeImagePreview();
});

/* ---------- Sticky header background ---------- */
const headerBar = document.getElementById("headerBar");

function updateHeaderBar() {
    headerBar.classList.toggle("scrolled", window.scrollY > 12);
}

updateHeaderBar();
window.addEventListener("scroll", updateHeaderBar, { passive: true });

/* ---------- Mobile menu ---------- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

/* ---------- Active nav link on scroll ---------- */
const navLinks = Array.from(navMenu.querySelectorAll('a[href^="#"]'));
const trackedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if ("IntersectionObserver" in window && trackedSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const link = navLinks.find(
                (anchor) => anchor.getAttribute("href") === `#${entry.target.id}`
            );
            if (!link || !entry.isIntersecting) return;

            navLinks.forEach((anchor) => anchor.classList.remove("active-link"));
            link.classList.add("active-link");
        });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    trackedSections.forEach((section) => navObserver.observe(section));
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(
    ".hero-text, .hero-illustration, .about-illustration, .about-text, " +
    ".projects-heading, .skills-grid, .timeline, .projects-grid, " +
    ".certifications-grid, .contact-panel"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealEls.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealEls.forEach((element) => element.classList.add("reveal", "in-view"));
}

/* ---------- Back to top ---------- */
const backToTop = document.getElementById("backToTop");

function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 500);
}

updateBackToTop();
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


updateLanguage(currentLanguage);
