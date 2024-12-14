function addMovie() {
    var title = document.getElementById("ftitle").value;
    var year = document.getElementById("fyear").value;
    var actors = document.getElementById("factors").value;

    var ul = document.getElementById("ulmovies")

    var li = document.createElement("li");
    var id = Date.now()
    var liInput = document.createElement("input")
    liInput.setAttribute("type", "checkbox")
    liInput.setAttribute("id", id)
    var liLabel = document.createElement("label")
    liLabel.setAttribute("for", id)
    liLabel.innerText = title + ", " + year + ", " + actors
    li.appendChild(liInput)
    li.appendChild(liLabel)

    ul.appendChild(li)

    document.getElementById("ftitle").value = ""
    document.getElementById("fyear").value = ""
    document.getElementById("factors").value = ""
}

function deleteCheckedMovies() {
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");

    var ul = document.getElementById("ulmovies")
    for (let i = 0; i < checkedBoxes.length; i++) {
        ul.removeChild(checkedBoxes[i].parentNode)
    }
}