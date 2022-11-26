const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    var ColorCode = "#"+randomColor;
    var ntcMatch  = ntc.name(ColorCode);

    color.innerHTML = ntcMatch[1];

  }
  
  genNew.addEventListener("click", setBg);
  setBg();
