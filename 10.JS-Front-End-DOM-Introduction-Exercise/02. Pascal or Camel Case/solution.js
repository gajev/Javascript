function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (convention === "Camel Case"){
    let sentence= [];
    text = text.split(" ");
    sentence.push(text[0]);
    for (let index = 1; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));      
    }
    result.textContent = sentence.join("")
  } else if (convention === "Pascal Case"){
    let sentence= [];
    text = text.split(" ");
 
    for (let index = 0; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));      
    }
    result.textContent = sentence.join("")
  } else {
    result.textContent = "Error!"
  }
}