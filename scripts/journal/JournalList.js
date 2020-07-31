import {getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalAsHTML} from "./Journal.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {
  const allEntries = useJournalEntries()
  render(allEntries)
})

export const JournalList = () => {
  // get the entries
  getEntries().then(() => {
    const journalEntries = useJournalEntries()

    // convert the entry object to html
    let JournalHTML = journalEntries.map((entry) => JournalAsHTML(entry))

    // modify the dom for every entry in the html
    JournalHTML.forEach((entry) => (contentTarget.innerHTML += entry))
  })
}
