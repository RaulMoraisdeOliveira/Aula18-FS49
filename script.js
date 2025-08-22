var lista = [
  {nome: "Alex"},
  {nome: "Evoney"},
  {nome: "Daniel"},
  {nome: "Julio"},
  {nome: "João Paulo"}
];

for(var indice = 3; indice < lista.length; indice++){
  if(lista[indice].nome === "Julio"){
    console.log(lista[indice].nome);
  }
}