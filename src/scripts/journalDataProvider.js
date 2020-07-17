/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
    id: 1,
    date: "07/06/2020",
    concept: "HTML & CSS, Git/GitHub",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS. Followed up by learning to push everything to GitHub and how to operate Git from the command line.",
    mood: "Ok",
  },

  {
    id: 2,
    date: "07/13/2020",
    concept: "Group Project 1",
    entry:
      "My group and I (Gib Jeffries, Mikayla Swinkels, Moncia Provence, and myself) used the tools taught to us the first week to make a travel brochure website, which can be found on Github.",
    mood: "Ok",
  },

  {
    id: 3,
    date: "07/20/2020",
    concept: "Client Side Mastery Book 1",
    entry:
      "We dove into javascript and began by learning the process of automating HTML data structures by completing Martin's Aquarium, Modern Farm, Daily Journal, and Dotard and Simbleton.",
    mood: "Ok",
  },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

export const slicedJournal = () => journal.slice()
