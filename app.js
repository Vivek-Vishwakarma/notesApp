const titleNote = document.querySelector(".titleInp")
const note = document.querySelector(".notesInp")
const add = document.querySelector(".add")
const card = document.querySelector(".card")

showNotes()

add.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        object = [];
    }
    else {
        object = JSON.parse(notes);
    }
    object.push(note.value)

    localStorage.setItem("notes", JSON.stringify(object));
    note.value = " ";
    console.log(object)
    showNotes()

    if (note.value == null) {
        prompt("pls enter something")
    }
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    if (notes == null) {
        object = [];
    }
    else {
        object = JSON.parse(notes);
    }
    let html = "";
    object.forEach(function (element, index, title) {
        html += `<div class="card-body">
        <h5 class="card-title">${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-outline-success" id="${index}" onclick = "deleteNotes(this.id)" type="submit"><i class="fas fa-trash-alt"></i></button>
        <button id="${index}" onclick = "checkNotes(this.id)" class="btn btn-outline-success" id="check" type="submit"><i class="fas fa-check"></i></button>
    </div>
    <hr>`
    });
    let notesEle = document.getElementById('notes');
    if (object.length != 0) {
        notesEle.innerHTML = html
    }
    else {
        notesEle.innerHTML = `You can see your notes here.`;
    }
    
    
}

function checkNotes(index){
    const cardBody = document.getElementsByClassName("card-text")[index]
    cardBody.classList.add("check");
}

function deleteNotes(index){
let notes = localStorage.getItem("notes");
if (notes == null) {
    object = [];
}
else {
    object = JSON.parse(notes);
}
  object.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(object));
  showNotes();
}