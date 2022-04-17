// this code prompts the username, and password if the userName is "Admin". The correct password is "TheMaster". "Canceled" is shown if the user enters nothing or presses Escape key



let userName = prompt("Whats your name?");

if (userName == "Admin")
{
    let password = prompt("Enter password");
    if(password == "TheMaster")
    {
        alert("Welcome");
    }

    else if(password == "" || password == null)
    {
        alert("Cancelled")
    }

    else
    {
        alert("I dont know you")
    }
}

else if(userName == "" || userName == null)
{
    alert("Canceled");
}

else
{
    alert("I dont know you")
}
