let users = [];
let form = document.forms['f1'];
let pairList = document.getElementById('pairList');

form.onsubmit = function (event) {
    event.preventDefault();
    let str = this.textValue.value;
    let str2 = str.split('=');
    users.push({name: str2[0], value: str2[1]});
    console.log(users);
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `${user.name}: ${user.value}`;
        pairList.appendChild(li);
    }

};
