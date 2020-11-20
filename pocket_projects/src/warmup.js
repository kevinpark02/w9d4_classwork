
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlGenerator.children){
        Array.from(htmlGenerator.children).forEach((child) => htmlElement.removeChild(child));
    }
    const tag = document.createElement("p");
    tag.innerHTML = string;
    htmlElement.appendChild(tag);
};

htmlGenerator('Party Time.', partyHeader);