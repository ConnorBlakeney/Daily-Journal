let journalEntries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = (newJournalEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJournalEntry),
  })
    .then(getEntries) // <-- Get all journal entries
    .then(dispatchStateChangeEvent) // <-- Broadcast the state change event
}

export const useJournalEntries = () => {
  const sortedByDate = journalEntries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood")
    .then((response) => response.json())
    .then((retrievedEntries) => {
      journalEntries = retrievedEntries
    })
}
