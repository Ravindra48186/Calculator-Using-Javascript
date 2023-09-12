let buttons = document.querySelectorAll('button');

let string = "";
let arry = Array.from(buttons);

arry.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (document.getElementById('output').value = string) {
                string = eval(string);
                document.getElementById('output').value = string;
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            document.getElementById('output').value = "0";
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            document.getElementById('output').value = string;
        }
        else {
            string += e.target.innerHTML;
            document.getElementById('output').value = string;
        }
    })
})
