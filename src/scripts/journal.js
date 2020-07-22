export const JournalAsHTML = (journalObj) => {
  return `
        <section class="journal">
            <div class="id">${journalObj.id}</div>
            <div class="date">${journalObj.date}</div>
            <div class="concept">${journalObj.concept}</div>
            <div class="entry">${journalObj.entry}</div>
            <div class="mood">Mood: ${journalObj.mood}</div>
        </section>
        <hr>
    `
}
