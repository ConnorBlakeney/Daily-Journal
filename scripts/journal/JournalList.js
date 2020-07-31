import {getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalAsHTML} from "./Journal.js"

const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {
  const allEntries = useJournalEntries()
  render(allEntries)
})

export const JournalList = () => {
  getEntries().then(render(useJournalEntries))
}

const render = (entryArray) => {
  entryArray
    .map((currentEntry) => {
      return JournalAsHTML(currentEntry)
    })
    .join("")

  contentTarget.innerHTML += `
        <article class="journalList">
            ${JournalHTMLRepresentations}
        </article>
  `
}
