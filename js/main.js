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
    console.log("The script was successfully copied to the clipboard! " + text);
    alert("The script was successfully copied to the clipboard!");
    })
    .catch((error) => {
    console.error("Script copy error: " + error);
    alert("Script copy error!");
    });
  }
  