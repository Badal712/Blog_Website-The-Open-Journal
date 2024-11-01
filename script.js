//Search button
let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let header = document.querySelector("header");
let navigat = document.querySelector("navigat");
let menu = document.querySelector(".menu");

searchBtn.onclick = function () {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menu.classList.add("hide");
  header.classList.remove("open");
};
closeBtn.onclick = function () {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menu.classList.remove("hide");
};
menu.onclick = function () {
  header.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
};

//for hero content slid bar
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

//for showing JSON file data in wildlife card
fetch("wildlife.json")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card_container");
    let cardCount = 0; // Counter for limiting the number of cards

    data.forEach((item) => {
      // Limit to 4 cards
      if (cardCount < 4) {
        // Create the card item
        const cardItem = document.createElement("div");
        cardItem.classList.add("card_item");

        // Create the image card container
        const cardImg = document.createElement("div");
        cardImg.classList.add("image_card");
        const imgElement = document.createElement("img");
        imgElement.src = item.imageUrl;
        imgElement.alt = item.name;
        imgElement.style.width = "100%";
        cardImg.appendChild(imgElement);

        // Create the text content container
        const textContent = document.createElement("div");
        textContent.classList.add("text_content");

        // Create and append the heading
        const cardHeading = document.createElement("div");
        cardHeading.classList.add("head_name");
        cardHeading.textContent = item.name;

        // Create and append the sub-heading
        const cardSubHeading = document.createElement("div");
        cardSubHeading.classList.add("sub_name");
        cardSubHeading.textContent = item.bio;

        // Append the heading and sub-heading to the text content div
        textContent.appendChild(cardHeading);
        textContent.appendChild(cardSubHeading);

        // Append the image card and text content to the card item
        cardItem.appendChild(cardImg);
        cardItem.appendChild(textContent);

        // Add an onclick event to navigate to wildlife.html and pass parameters in the URL
        cardItem.onclick = () => {
            window.location.href = `blog.html?name=${encodeURIComponent(item.name)}&bio=${encodeURIComponent(item.bio)}&details=${encodeURIComponent(item.details)}&imageUrl=${encodeURIComponent(item.imageUrl)}`;
        };

        cardContainer.appendChild(cardItem);
        cardCount++;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON data:", error);
  });

  const cardButton = document.getElementById ('card_Button');

  cardButton.addEventListener('click', () => {
    window.location.href = 'WildlifeMain.html';
  })

  //for showing JSON file data in wildlife card
fetch("places.json")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card_container2");
    let cardCount = 0;

    data.forEach((item) => {
      // Limit to 4 cards
      if (cardCount < 4) {
        // Create the card item
        const cardItem = document.createElement("div");
        cardItem.classList.add("card_item");

        // Create the image card container
        const cardImg = document.createElement("div");
        cardImg.classList.add("image_card");
        const imgElement = document.createElement("img");
        imgElement.src = item.imageUrl;
        imgElement.alt = item.name;
        imgElement.style.width = "100%";
        cardImg.appendChild(imgElement);

        // Create the text content container
        const textContent = document.createElement("div");
        textContent.classList.add("text_content");

        // Create and append the heading
        const cardHeading = document.createElement("div");
        cardHeading.classList.add("head_name");
        cardHeading.textContent = item.name;

        // Create and append the sub-heading
        const cardSubHeading = document.createElement("div");
        cardSubHeading.classList.add("sub_name");
        cardSubHeading.textContent = item.bio;

        // Append the heading and sub-heading to the text content div
        textContent.appendChild(cardHeading);
        textContent.appendChild(cardSubHeading);

        // Append the image card and text content to the card item
        cardItem.appendChild(cardImg);
        cardItem.appendChild(textContent);

        // Add an onclick event to navigate to wildlife.html and pass parameters in the URL
        cardItem.onclick = () => {
          window.location.href = `blog.html?name=${encodeURIComponent(item.name)}&bio=${encodeURIComponent(item.bio)}&details=${encodeURIComponent(item.details)}&imageUrl=${encodeURIComponent(item.imageUrl)}`;
      };

        cardContainer.appendChild(cardItem);
        cardCount++;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON data:", error);
  });

  const cardButton2 = document.getElementById ('card_Button2');

  cardButton2.addEventListener('click', () => {
    window.location.href = 'placeMain.html';
  });

  // testimonials_section
  $('.testimonials_container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
              "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})


//for Smooth Scrolling
const sections = [
  document.getElementById("hero_section"),
  document.getElementById("card_section"),
  document.getElementById("frame_section"),
  document.getElementById("testimonials"),
  document.getElementById('contact')
];

let currentSectionIndex = 0;

const observerOptions = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target);
          if (index !== currentSectionIndex) {
              currentSectionIndex = index;
              smoothScrollToSection(index);
          }
      }
  });
}, observerOptions);

const smoothScrollToSection = (index) => {
  sections[index].scrollIntoView({ behavior: "smooth" });
};

sections.forEach(section => observer.observe(section));
