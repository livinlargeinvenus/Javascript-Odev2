const ulDOM = document.querySelector('#list'); // tasklar icin listeler
let taskDOM = document.querySelector('#task'); // form DOM

// yeni task eklenmesi
function newElement() {
    // Eger bos ise task olusturma.
    if (isEmpty(taskDOM)) return null;

    // elementleri olusturma
    let liDOM = document.createElement('li');
    let divDOM = document.createElement('div');
    let btnDOM = document.createElement('button');

    // elementlere ekleme
    ulDOM.append(liDOM);
    liDOM.append(divDOM);

    // elemente classlarini verme
    liDOM.classList.add("list-group-item", "list-group-item-primary");

    // tasklara tiklandiginda secilmesi
    liDOM.addEventListener('click', selectorTask);

    // form icindeki bilgiyi alma
    divDOM.innerText = `${task.value}`;

    // tasklari silme butonu
    btnDOM.classList.add("btn", "btn-close", "float-end");
    btnDOM.ariaLabel = "Close";
    btnDOM.addEventListener('click', clearTask);

    // butonu ekleme
    divDOM.append(btnDOM);

    // task girildiginde form icindeki bilgiyi sifirlama
    taskDOM.value = "";
}

// girilen deger bos mu?
function isEmpty(dom) {
    if (!dom.value) {
        return true;
    }
}

// Task'i silmek
function clearTask() {
    this.closest('li').remove();
}

// Task selector
function selectorTask() {
    // buton DOM
    let btn = this.querySelector('.btn');
    // eger task bitmis ise onaylanir.
    if (this.classList.value.split(" ").includes('bg-success')) {
        // task bilgisini duzeltir.
        this.style.textDecoration = "none";
        this.classList.remove('bg-success');
        btn.classList.remove("disabled"); // task onaylanmissa silem butonunu kapatir.
    }
    else {
        this.style.textDecoration = "line-through"; // task onayli ise bilginin ustunu cizer.
        this.classList.add('bg-success');
        btn.classList.add("disabled"); // task onaylanmissa silem butonunu kapatir.
    }
}