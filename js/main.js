function openGame() {
    document.getElementById("Game").style.display = "block";
  }
  
  function closeGame() {
    document.getElementById("Game").style.display = "none";
  }
  
  function openScript() {
    document.getElementById("Script").style.display = "block";
  }
  
  function closeScript() {
    document.getElementById("Script").style.display = "none";
  }
  
  function copyText() {
    const textElement = document.getElementById("textToCopy");
    const text = textElement.innerText;
  
    navigator.clipboard.writeText(text)
    .then(() => {
    console.log("Текст скопирован в буфер обмена: " + text);
    alert("Текст скопирован в буфер обмена: " + text);
    })
    .catch((error) => {
    console.error("Ошибка при копировании текста: ", error);
    alert("Ошибка при копировании текста: " + error);
    });
  }
  