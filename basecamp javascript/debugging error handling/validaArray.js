function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros corretos.");
    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser do tipo object.");
    if (typeof num !== "number")
      throw new TypeError("Número precisa ser do tipo number.");
    if (arr.length !== num) throw new RangeError("Tamanho inválido!");
    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um Reference Error");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um Type Error");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um Range Error");
      console.log(e.message);
    }else("Ocorreu um erro não esperado: " + e);
  }

  //usar try/catch
}

console.log(validaArray([1,2,3,4,5], 5));
