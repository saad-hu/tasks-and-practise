// Convert these if statments to ternary operator:
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// using ternary operator:

let messsage = (login == "Employee") ? "Hello" :
(login == "Director") ? "Greetings" :
(login == "") ? "No login" : "";