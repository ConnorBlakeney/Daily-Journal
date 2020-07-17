import { slicedJournal } from "./journalDataProvider.js"
import { JournalAsHTML } from "./journal.js"

export const JournalList = () => {
  const journalArray = slicedJournal()
  const contentTarget = document.querySelector(".entryLog")

  let JournalHTMLRepresentations = ""

  for (const journal of journalArray) {
    JournalHTMLRepresentations += JournalAsHTML(journal)
  }

  contentTarget.innerHTML += `
        <article class="journalList">
            ${JournalHTMLRepresentations}
        </article>
  `
}