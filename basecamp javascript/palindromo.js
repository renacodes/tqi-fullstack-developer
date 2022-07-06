function validarPalindromo(string){
    if(!string) return;
    string.split("").reverse().join("") === string;
}