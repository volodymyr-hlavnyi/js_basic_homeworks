class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        if (noteText.trim() !== "") {
            const newNote = {
                text: noteText,
                completed: false,
                createdDate: new Date(),
                lastEditedDate: new Date(),
            };
            this.notes.push(newNote);
            console.log(`Note added successfully. index: ${this.notes.length-1} - ${newNote.text}`);
        } else {
            console.log("Note text cannot be empty.");
        }
    }

    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            if (newText.trim() !== "") {
                this.notes[index].text = newText;
                this.notes[index].lastEditedDate = new Date();
                console.log(`Note edited successfully. index: ${index} - ${this.notes[index].text}`);
            } else {
                console.log("Note text cannot be empty.");
            }
        } else {
            console.log("Invalid index.");
        }
    }

    deleteNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
            console.log("Note deleted successfully.");
        } else {
            console.log("Invalid index.");
        }
    }

    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            console.log(this.notes[index]);
        } else {
            console.log("Invalid index.");
        }
    }

    getAllNotes() {
        console.log(this.notes);
    }

    markAsCompleted(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = true;
            console.log(`Note marked as completed. index ${index} - ${this.notes[index].text}`);
        } else {
            console.log("Invalid index.");
        }
    }

    getStats() {
        const totalNotes = this.notes.length;
        const completedNotes = this.notes.filter((note) => note.completed).length;
        const remainingNotes = totalNotes - completedNotes;

        console.log(`Total notes: ${totalNotes}`);
        console.log(`Completed notes: ${completedNotes}`);
        console.log(`Remaining notes: ${remainingNotes}`);
    }

    searchByName(keyword) {
        const matchingNotes = this.notes.filter((note) =>
            note.text.toLowerCase().includes(keyword.toLowerCase())
        );
        console.log(matchingNotes);
    }

    sortByStatusFirstCompleted() {
        this.notes.sort((a, b) => b.completed - a.completed);
        console.log("Notes sorted by status.");
    }

    sortByStatusFirstUnCompleted() {
        this.notes.sort((a, b) => a.completed - b.completed);
        console.log("Notes sorted by status.");
    }
    sortByDate() {
        this.notes.sort((a, b) => b.lastEditedDate - a.lastEditedDate);
        console.log("Notes sorted by date.");
    }

    sortByDateCreated(ascending = true) {
        this.notes.sort((a, b) => (ascending ? 1 : -1) * (a.createdDate - b.createdDate));
    }

    sortByDateModified(ascending = true) {
        this.notes.sort((a, b) => (ascending ? 1 : -1) * (a.lastModifiedDate - b.lastModifiedDate));
    }

    searchByDateCreated(targetDate) {
        return this.notes.filter(note => note.createdDate.toDateString() === targetDate.toDateString());
    }

    searchByDateModified(targetDate) {
        return this.notes.filter(note => note.lastEditedDate.toDateString() === targetDate.toDateString());
    }

}

const todoList = new TodoList();

todoList.addNote("Buy groceries");
todoList.addNote("Read a book");
todoList.addNote("Do homework");
todoList.addNote("Read app js to do list");
todoList.addNote("Create app js to do list");

todoList.editNote(1, "Read a different book");

todoList.getAllNotes();

todoList.markAsCompleted(0);
todoList.markAsCompleted(1);

todoList.getStats();

console.log('Search text "book"')
todoList.searchByName("book");

console.log('Search text "read"')
todoList.searchByName("read");

//console.log('Sort notes by Status and show them (completed first)')
todoList.sortByStatusFirstCompleted();
todoList.getAllNotes();

// console.log('Sort notes by Status and show them (uncompleted first)')
todoList.sortByStatusFirstUnCompleted();
todoList.getAllNotes();

todoList.sortByDate();
todoList.getAllNotes();

todoList.deleteNote(2);
todoList.getNoteInfo(2)

todoList.getAllNotes();


todoList.sortByDateCreated();
console.log("Sorted by date created:", todoList.notes);

const searchDateCreated = new Date();
console.log(`Search by date created (${searchDateCreated}):`, todoList.searchByDateCreated(searchDateCreated));

todoList.sortByDateModified();
console.log("Sorted by date modified:", todoList.notes);

const searchDateModified = new Date();
console.log(`Search by date modified (${searchDateModified}):`, todoList.searchByDateModified(searchDateModified));