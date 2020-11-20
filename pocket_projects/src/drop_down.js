
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  const links = [];
  const dogNames = Object.keys(dogs);

  dogNames.forEach(dog =>{
    
    const listElement = document.createElement("li");
    const aTag = document.createElement("a");

    aTag.innerHTML = dog;
    aTag.href = dogs[dog];

    listElement.classList = "dog-link";
    listElement.appendChild(aTag);

    links.push(listElement);
  })
  return links;
}

const attachDogLinks = () => {
  const dropDownList = document.querySelector(".drop-down-dog-list");
  const dogLinks = dogLinkCreator(dogs);
  dogLinks.forEach(link => dropDownList.appendChild(link));
   
}

const handleEnter = () => {
  const links = document.querySelectorAll(".dog-link");
  links.forEach((child) => child.classList.add("open"));
}

const handleLeave = () => {
  const links = document.querySelectorAll(".dog-link");
  links.forEach((child) => child.classList.remove("open"));
}

const dropDown = document.querySelector(".drop-down-dog-nav");
dropDown.addEventListener('mouseenter', handleEnter);
dropDown.addEventListener('mouseleave', handleLeave);


attachDogLinks();

