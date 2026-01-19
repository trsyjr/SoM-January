document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 40,
    grabCursor: true,

    autoplay: {
      delay: 4000, 
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".select-btn");
  const displayImage = document.getElementById("display-image");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update main display image
      displayImage.src = btn.dataset.image;

      // Highlight selected button
      buttons.forEach(b => b.classList.remove("border-2", "border-yellow-400"));
      btn.classList.add("border-2", "border-yellow-400");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const dialogueBox = document.getElementById("dialogue-box");
  const dialogueText = document.getElementById("dialogue-text");

  const dialogues = [
    "I previously worked as an Administrative Assistant for a private client.",
    "I handled a wide range of administrative and organizational tasks.",
    "My responsibilities included managing schedules, coordinating communications, organizing documents, and ensuring that day-to-day operations ran smoothly.",
    "Through this role, I developed strong attention to detail, time management skills, and the ability to adapt to changing priorities.",
    "Supporting my client behind the scenes allowed me to contribute to efficient workflows while strengthening my professionalism and problem-solving abilities."
  ];

  let index = 0;

  dialogueBox.addEventListener("click", () => {
    if (index < dialogues.length) {
      dialogueText.textContent = dialogues[index];
      index++;
    } else {
      dialogueText.textContent = "End of conversation.";
    }
  });
});

const data = {
  interest: {
    description: "Ever since I was little, I have loved art. I like all kinds of crafts, pretty paper, and shows. I am always making something. I love to crochet with soft yarn and paint on paper. I also love to move and dance. For me, making things is the best part of every day.",
    images: [
      "Assets/dance.jpg",
      "Assets/dance1.jpg",
      "Assets/dance2.jpg",
      "Assets/dance3.jpg",
      "Assets/Hike.jpg",
      "Assets/Hike1.jpg"
    ]
  },
  inspiration: {
    description: "I first became interested in social work back in high school when I joined one of the outreach programs in our area. Since then, the desire to contribute and help others has always stayed with me. Surprisingly, my family later founded a non-profit organization that supports people in our community, which further shaped my path. That experience continues to shape me into who I am today — and where I am today.",
    images: [
      "Assets/charity.jpg",
      "Assets/charity1.jpg"
    ]
  }
};

const descriptionEl = document.getElementById("almanac-description");
const imagesEl = document.getElementById("almanac-images");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

const renderAlmanac = (category) => {
  descriptionEl.textContent = data[category].description;
  imagesEl.innerHTML = "";

  data[category].images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = category;
    img.className = "w-full md:col-span-1 h-40 md:h-72 object-cover rounded-lg shadow-md image-rendering-pixelated transition-transform duration-200 hover:scale-105 cursor-pointer";

    img.addEventListener("click", () => {
      modalImg.src = src;
      modal.classList.remove("hidden");
    });

    imagesEl.appendChild(img);
  });
};

document.getElementById("interest-btn").addEventListener("click", () => renderAlmanac("interest"));
document.getElementById("inspiration-btn").addEventListener("click", () => renderAlmanac("inspiration"));

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if(e.target === modal || e.target.classList.contains('absolute inset-0 bg-black/70')) modal.classList.add("hidden");
});