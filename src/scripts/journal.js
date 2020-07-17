export const JournalAsHTML = (journalObj) => {
  return `
        <section class="journal">
            <div class="id">${journal.id}</div>
            <div class="date">${journal.date}</div>
            <div class="concept">${journal.concept}</div>
            <div class="entry">${journal.entry}</div>
            <div class="mood">${journal.mood}</div>
        </section>
    `
}
