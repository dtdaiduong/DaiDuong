let login = prompt("Nhap chuc nang:");
message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : '';
            alert(message);