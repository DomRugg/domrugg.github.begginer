let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.intterText = count
}

function save() {
    console.log(count)
}
save()