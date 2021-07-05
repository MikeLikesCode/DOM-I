const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav links
const nav = Array.from(document.querySelectorAll('nav a'));

nav.forEach((item, index) => {
  item.innerHTML = siteContent.nav[`nav-item-${index+1}`]
  item.style.color = "green"
})

const newLink1 = document.createElement('a');
newLink1.textContent = 'Blog'
newLink1.href = "#"
newLink1.style.color = "green"
document.querySelector('nav').appendChild(newLink1);

const newLink2 = document.createElement('a');
newLink2.textContent = 'Memes'
newLink2.href = "#"
newLink2.style.color = "green"
document.querySelector('nav').prepend(newLink2);

// CTA Content
const ctaContent = document.querySelector('.cta')

const ctaContentTitle = ctaContent.querySelector('h1');
ctaContentTitle.textContent = siteContent.cta.h1

const ctaContentButton = ctaContent.querySelector('button')
ctaContentButton.textContent = siteContent.cta.button

const ctaContentImage = document.getElementById('cta-img')
ctaContentImage.src = siteContent.cta["img-src"]

// Main Content

const mainContent = document.querySelector('.main-content')

// Main Content -> Top Content

const topContent = mainContent.querySelector('.top-content')

// Main Content -> Top Content -> Features

const textContent1 = topContent.querySelectorAll('.text-content')[0]
const textContent1Title = textContent1.querySelector('h4');
const textContent1Content = textContent1.querySelector('p')
textContent1Title.textContent = siteContent["main-content"]["features-h4"]
textContent1Content.textContent = siteContent["main-content"]["features-content"]

// Main Content -> Top Content -> About

const textContent2 = topContent.querySelectorAll('.text-content')[1]
const textContent2Title = textContent2.querySelector('h4');
const textContent2Content = textContent2.querySelector('p')
textContent2Title.textContent = siteContent["main-content"]["about-h4"]
textContent2Content.textContent = siteContent["main-content"]["about-content"]

// Main Content -> Middle Image

const middleImage = document.getElementById('middle-img')
middleImage.src= siteContent["main-content"]["middle-img-src"]

// Main Content -> Bottom Content 

const bottomContent = mainContent.querySelector('.bottom-content')

// Main Content -> Bottom Content -> Services

const textContent3 = bottomContent.querySelectorAll('.text-content')[0]
const textContent3Title = textContent3.querySelector('h4');
const textContent3Content = textContent3.querySelector('p')
textContent3Title.textContent = siteContent["main-content"]["services-h4"]
textContent3Content.textContent = siteContent["main-content"]["services-content"]

// Main Content -> Bottom Content -> Product

const textContent4 = bottomContent.querySelectorAll('.text-content')[1]
const textContent4Title = textContent4.querySelector('h4');
const textContent4Content = textContent4.querySelector('p')
textContent4Title.textContent = siteContent["main-content"]["product-h4"]
textContent4Content.textContent = siteContent["main-content"]["product-content"]

// Main Content -> Bottom Content -> Vision

const textContent5 = bottomContent.querySelectorAll('.text-content')[2]
const textContent5Title = textContent5.querySelector('h4');
const textContent5Content = textContent5.querySelector('p')
textContent5Title.textContent = siteContent["main-content"]["vision-h4"]
textContent5Content.textContent = siteContent["main-content"]["vision-content"]

// Contact

const contactContent = document.querySelector('.contact')

const contactTitle = contactContent.querySelector('h4')
contactTitle.textContent = siteContent["contact"]["contact-h4"]

const contact1Paragraph = contactContent.querySelector('p:nth-of-type(1)');
contact1Paragraph.textContent = siteContent["contact"]["address"]

const contact2Paragraph = contactContent.querySelector('p:nth-of-type(2)');
contact2Paragraph.textContent = siteContent["contact"]["phone"]

const contact3Paragraph = contactContent.querySelector('p:nth-of-type(3)');
contact3Paragraph.textContent = siteContent["contact"]["email"]

// Footer

const footerContent = document.querySelector('footer')
const footerP = footerContent.querySelector('p');
footerP.textContent = siteContent["footer"]["copyright"]

