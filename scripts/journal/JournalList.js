import { getEntries, useJournalEntries, deleteEntry, editEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./Journal.js"
import { HideEntriesButton } from "../buttons/HideButton.js"
import { ShowEntriesButton } from "../buttons/ShowButton.js"

const contentTarget = document.querySelector(".displayEntries")
const eventHub = document.querySelector(".content")



let entries = []
// add event listener for when show entries button is clicked
eventHub.addEventListener("showEntriesClicked", customEvent => {
    EntryListComponent()
    //also render hide entries button
    HideEntriesButton()
})

//listen for change to app state when save is clicked and update HTML rendering
eventHub.addEventListener("entryStateChanged", () => {
    const newEntries = useJournalEntries()
    render(newEntries)
})

//hide entries next
eventHub.addEventListener("hideEntriesClicked", hideButtonClicked => {
    contentTarget.innerHTML = `
    `
    ShowEntriesButton()
    
    
})

//event listener for edit button
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("edit--")) {
        const [prompt, entryId] = clickEvent.target.id.split("--")
        const editClicked = new CustomEvent("editClicked", {
        detail: {
            entryId: parseInt(entryId)
        }
    })
    eventHub.dispatchEvent(editClicked)
}
  
   
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete--")) {
        const [prompt, entryId] = clickEvent.target.id.split("--")

        //function to delete entry, imported from data provider

        deleteEntry(entryId)
    }
})

//function that iterates through array and turns into HTML list
export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()//from the API
        .then(() => {
            const entries = useJournalEntries()
            render(entries) //render to DOM
        })
   
    }
   

    //render function
const render = (entriesArray) => {
        //loop through entries array returning each entry as passed through converter function
        const allEntriesHTML = entriesArray.reverse().map(
            (currentEntryObj) => {
                return JournalEntryComponent(currentEntryObj) 
                }
        ).join("") //remove commas
        
        // DOM reference to where all entries will be rendered
        contentTarget.innerHTML = allEntriesHTML
    }
