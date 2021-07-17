const titleNote = document.querySelector(".titleInp")
const note = document.querySelector(".notesInp")
const add = document.querySelector(".add")
const card = document.querySelector(".card")
const titleInp = document.querySelector(".titleInp")
showNotes()


add.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        object = [];
    }
    else {
        object = JSON.parse(notes);
    }
    let myobject = {
        title: titleInp.value,
        text: note.value
    }

    object.push(myobject)

    localStorage.setItem("notes", JSON.stringify(object));

    note.value = " ";
    titleInp.value = " ";
    
    console.log(object)

    showNotes()

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
        <h5 class="card-title">${index + 1} ${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button class="btn btn-outline-success" id="${index}" onclick = "deleteNotes(this.id)" type="submit"><i class="fas fa-trash-alt"></i></button>
        <button id="${index}" onclick = "checkNotes(this.id)" class="btn btn-outline-success" id="check" type="submit"><i class="fas fa-check"></i></button>
    </div>`
    });
    let notesEle = document.getElementById('notes');
    if (object.length != 0) {
        notesEle.innerHTML = html
    }
    else {
        notesEle.innerHTML = `You can see your notes here.`;
    }

}

function checkNotes(index) {
    const cardBody = document.getElementsByClassName("card-body")[index]
    cardBody.classList.add("check");
}

function deleteNotes(index) {
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

const search = document.querySelector(".searchBtn")
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card-body');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", function () {
    window.localStorage.clear();
    location.reload();
})