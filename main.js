import "./styles.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenn");

hiddenElements.forEach((el) => observer.observe(el));

export function changeText(newText) {
  const aboutMeText = document.getElementById("aboutMeText");
  switch (newText) {
    case "About Me":
      aboutMeText.textContent =
        "Hi! I'm Carlos Eduardo Reyes Quintero, a 19-year-old guy currently studying at UTCH. I enjoy coding in my free time and also engage in other fun activities like reading manga and hanging out with my friends. I reside in Chihuahua, Chihuahua, and my personal mission is to become a skilled software engineer and have the opportunity to work in another country. This way, I can learn and enjoy many wonderful things that life has to offer.";
      break;
    case "Technologies":
      aboutMeText.textContent =
        "Right now, my main focus is on learning HTML, CSS, and JavaScript as my core tools. In terms of databases, I have knowledge of SQL. As for frameworks, I am currently learning Bootstrap and Tailwind CSS. Additionally, I'm eager to dive into Vue.js and explore the world of JavaScript animations. When it comes to programming languages, I have experience with Java, and I have plans to learn Go in the near future.";
      break;
    case "Proyects":
      aboutMeText.textContent =
        "Projects will be coming soon. I will be working on them diligently.";
      break;
    default:
      aboutMeText.textContent =
        "I am a fullstack software developer with ReactJS for frontend and NodeJS for backend";
      break;
  }
}

// Puedes escribir HTML aquí:
document.querySelector("#app").innerHTML = `
<div></div>
`;
