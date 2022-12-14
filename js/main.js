const ulDOM = document.querySelector('#list'); // tasklar icin listeler
const toastDOM = document.querySelectorAll('.toast');
let taskDOM = document.querySelector('#task'); // form DOM

//toast list
let toastList = [...toastDOM].map((toastEl) => {
    return new bootstrap.Toast(toastEl)
});

// eleman ekleme
const addListElement = (content) => {
    let liDOM = document.createElement('li');
    liDOM.classList.add("list-group-item", "list-group-item-primary");

    liDOM.innerHTML = `
    <i class="bi float-start"></i>&nbsp;
    <span id="content">
    ${content}
    <button type="button" class="btn btn-close float-end" aria-label="Close"></button>
    </span>
    `
    return liDOM;
}

// yeni task eklenmesi
function newElement() {
    if (!taskDOM.value.trim()) { return taskDOM.value = "" }

    let taskListElement = addListElement(taskDOM.value);

    taskListElement.addEventListener('click', selectorTask);

    ulDOM.append(taskListElement);
    taskListElement.querySelector('.btn').addEventListener('click', clearTask);

    taskDOM.value = ""
}

// toast function
function toastAlert() {
    if (!taskDOM.value.trim()) {
        toastList[1].show();
    }
    else {
        toastList[0].show();
    }
}


// Task'i silmek
function clearTask() {
    this.closest('li').remove();
}

// Task selector
function selectorTask() {
    let iClassList = this.querySelector('i').classList;
    let liClass = [...iClassList.values()];
    let spanStyle = this.querySelector('span');
    console.log();
    if (liClass.includes('bi-list-check')) {
        iClassList.remove("bi-list-check");
        spanStyle.style.textDecoration = "none";
        this.classList.remove('bg-secondary');
    }
    else {
        iClassList.add("bi-list-check");
        spanStyle.style.textDecoration = "line-through";
        this.classList.add('bg-secondary');
    }
}