export function useData(data) {
  console.log(data)
  const dracoMalfoy = data.find((student) => student.name === "Draco Malfoy")
  const harryPotter = data.find((student) => student.name === "Harry Potter")

  const mainElement = document.getElementById("main")
  console.log(dracoMalfoy, harryPotter)

  const dracoSection = document.createElement("section")
  dracoSection.classList.add("section")
  mainElement.appendChild(dracoSection)

  const dracoImage = document.createElement("img")
  dracoImage.src = dracoMalfoy.image
  dracoImage.classList.add("section__image")
  dracoSection.appendChild(dracoImage)

  const harrySection = document.createElement("section")
  harrySection.classList.add("section")
  mainElement.appendChild(harrySection)

  const harryImage = document.createElement("img")
  harryImage.src = harryPotter.image
  harryImage.classList.add("section__image")
  harrySection.appendChild(harryImage)

  dracoImage.addEventListener("mouseover", () => {
    const dracoParagraph = document.createElement("p")
    dracoParagraph.innerText = "AnGsT, p0tTeR?"
    dracoParagraph.classList.add("section__text")
    dracoSection.appendChild(dracoParagraph)
  })

  harryImage.addEventListener("mouseover", () => {
    const harryParagraph = document.createElement("p")
    harryParagraph.innerText = "tRäUm wEiTeR!"
    harryParagraph.classList.add("section__text")
    harrySection.appendChild(harryParagraph)
  })
}
