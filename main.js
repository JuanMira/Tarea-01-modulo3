const myDivisa = document.getElementById("monedaMy");
const toDivisa = document.getElementById("monedaTo");
const moneda = document.getElementById("money");
const convertir = document.getElementById("conversor");

const divisas = [
  { text: "Elige tu moneda", valor: "none" },
  { text: "Dolar", valor: "USD" },
  { text: "Peso Mexicano", valor: "MXN" },
  { text: "Peso Colombiano", valor: "COP" },
  { text: "Euro", valor: "EUR" },
  { text: "Libra Esterlina", valor: "GBP" },
];

const onLoad = () => {
  divisas.forEach((data) => {
    let option = document.createElement("option");
    option.value = data.valor;
    option.text = data.text;
    myDivisa.appendChild(option);
  });

  divisas.forEach((data) => {
    let option = document.createElement("option");
    option.value = data.valor;
    option.text = data.text;
    toDivisa.appendChild(option);
  });
};

convertir.addEventListener("click", () => {
  if (!isNaN(moneda.value)) {
    const divisaValue = valorDivisa(myDivisa.value, toDivisa.value);
    if (divisaValue) {
      const convertion = divisaValue * moneda.value;
      createAlert(`Divisa convertida: $ ${convertion}`, "success");
    }else{
        createAlert(`No se puede consevir esa operacion`,"error")
    }    
  } else {
    createAlert("No se pudo convertir texto a numero ", "error");
  }
});

const createAlert = (text, type) => {
  const alertBox = document.createDocumentFragment();
  const div = document.createElement("div");
  const alertContent = document.querySelector(".alert");
  const boxStack = document.querySelector(".box");

  if (boxStack) boxStack.remove();

  if (type !== "success" || type !== "error") {
    div.innerHTML = `<h3 class="${type}">${text}</h3>`;
    div.setAttribute("class", "box");
    alertBox.appendChild(div);
    alertContent.appendChild(alertBox);
  }
};

const valorDivisa = (myDivisa, toDivisa) => {
  switch (myDivisa) {
    case "USD":
      if (toDivisa == "MXN") return 20.44;
      else if (toDivisa == "COP") return 3837.23;
      else if (toDivisa == "EUR") return 0.86;
      else if (toDivisa == "GBP") return 0.74;
      else return null;

    case "MXN":
      if (toDivisa == "USD") return 0.049;
      else if (toDivisa == "COP") return 187.93;
      else if (toDivisa == "EUR") return 0.042;
      else if (toDivisa == "GBP") return 0.036;
      else return null;
    case "COP":
      if (toDivisa == "USD") return 0.00026;
      else if (toDivisa == "MXN") return 0.0053;
      else if (toDivisa == "EUR") return 0.00022;
      else if (toDivisa == "GBP") return 0.00019;
      else return null;
    case "EUR":
      if (toDivisa == "USD") return 1.16;
      else if (toDivisa == "MXN") return 23.77;
      else if (toDivisa == "COP") return 4467.91;
      else if (toDivisa == "GBP") return 0.87;
      else return null;
    case "GBP":
      if (toDivisa == "USD") return 1.35;
      else if (toDivisa == "MXN") return 27.48;
      else if (toDivisa == "COP") return 5162.87;
      else if (toDivisa == "EUR") return 1.16;
      else return null;
    default:
      return null;
  }
};
