let firstname = 'Tony';

switch (firstname) {
    case 'Tony':
        let lastname = 'Alicea';
        break;
    case 'Anthony':
        let lastname = 'P. Alicea'; // runtime error - Uncaught SyntaxError: Identifier 'lastname' has already been declared
        break;
}
