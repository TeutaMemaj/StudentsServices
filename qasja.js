function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.querySelector(".demo").value;
    try { 
      if(x == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.querySelector("demo").value = "";
    }
  }