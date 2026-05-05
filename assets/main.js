function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });
    return result;
};
const translations = {
    en_US: {
        mcserver: "Minecraft Server Status",
        stsite: "LCARS Interface"
    },
    de_DE: {
        mcserver: "Minecraft Server Status",
        stsite: "LCARS Interface"
    }
};

const langSelect = document.querySelector("select");
let entry1 = document.getElementById("entry1");
let entry2 = document.getElementById("entry2");

const setLanguage = (language) => {
    console.log(language);
    if (language == "de_DE") {
        setCookie("language", "de_DE", 30);
        entry1.innerText = translations.de_DE.mcserver;
        entry2.innerText = translations.de_DE.stsite;
    } else if (language == "en_US") {
        setCookie("language", "en_US", 30);
        entry1.innerText = translations.en_US.mcserver;
        entry2.innerText = translations.en_US.stsite;
    }
};

langSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

// Initialize language from cookie
const savedLanguage = getCookie("language");
if (savedLanguage) {
    setLanguage(savedLanguage);
    langSelect.value = savedLanguage;
}