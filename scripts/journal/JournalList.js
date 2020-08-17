import {getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalAsHTML} from "./Journal.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("journalStateChanged", () => {
//     const allEntries = useJournalEntries
//     render(allEntries)
// })

 const render = (entries) => {
  // get the entries
  contentTarget.innerHTML = entries.map(entry => JournalAsHTML(entry)).join("")
}

export const JournalList = () => {
    getEntries()
        .then(useJournalEntries)
        .then(render)
}
