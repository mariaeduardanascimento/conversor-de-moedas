function Converter() {
  let valorInserido = parseFloat(document.getElementById("valor").value);
  let dolar = document.getElementById("moedaDolar").value;
  let euro = document.getElementById("moedaEuro").value;
  let libra = document.getElementById("moedaLibra").value;

  let option = document.getElementById("definicaoDaMoeda").value;

  if (option == dolar) {
    let valorReal1 = valorInserido * 5;
    let valorFinalDReal = valorReal1.toFixed(2);

    let resultado = document.getElementById("valorConvertido");
    let valorConvertido =
      "O valor de U$ " +
      valorInserido +
      " convertido para real é de R$ " +
      valorFinalDReal;

    resultado.innerHTML = valorConvertido;
  } else if (option == euro) {
    let valorReal2 = valorInserido * 5.51;
    let valorFinalEuro = valorReal2.toFixed(2);

    let resultadoEuro = document.getElementById("valorConvertido");

    let valorConvertidoEuro =
      "O valor de € " +
      valorInserido +
      " convertido para real é de R$ " +
      valorFinalEuro;

    resultadoEuro.innerHTML = valorConvertidoEuro;
  } else {
    let valorReal3 = valorInserido * 6.56; //Valor da moeda no dia da realização do codigo
    let valorFinalLibra = valorReal3.toFixed(2);

    let resultadoLibra = document.getElementById("valorConvertido");

    let valorConvertidoLibra =
      "O valor de £ " +
      valorInserido +
      " convertido para real é de R$ " +
      valorFinalLibra;

    resultadoLibra.innerHTML = valorConvertidoLibra;
  }
}