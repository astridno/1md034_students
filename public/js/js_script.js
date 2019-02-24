

function display(burgers) {
  let node = document.getElementById("wrapper");

  burgers.forEach(burger => {
    let item = document.createElement("div");
    item.setAttribute("class", "item");

    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerText = burger.name;
    item.appendChild(title);

    let image = document.createElement("img");
    image.setAttribute("src", burger.img);
    item.appendChild(image);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "burgers");
    checkbox.setAttribute("value", burger.name);
    item.appendChild(checkbox);

    let info = document.createElement("ul");
    item.appendChild(info);

    let listItem = document.createElement("li");
    listItem.innerText = burger.kCal + " kcal";
    info.appendChild(listItem);

    if (burger.lactose) {
      listItem = document.createElement("li");
      listItem.innerText = "Innehåller spår av laktos.";
      info.appendChild(listItem);
    }

    if (burger.gluten) {
      listItem = document.createElement("li");
      listItem.innerText = "Innehåller spår av nötter.";
      info.appendChild(listItem);
    }

    node.appendChild(item);
  })


}

function orderConfirmation() {
  var confirm = document.createElement("section");
  document.getElementById("main").appendChild(confirm);

  let order = [];
  //Name
  var name = document.getElementById('name').value;
  order.push(name);

  var email = document.getElementById('email').value;
  order.push(email);

  var adress = document.getElementById('adress').value;
  var gatunummer = document.getElementById("gatunummer").value;
  order.push(adress + gatunummer);

  var genders = document.getElementsByClassName('gender');
  var genderChoice;
  for (var i = 0, length = genders.length; i < length; i++) {
    if (genders[i].checked == true) {

      order.push(genders[i].value);
    }
  }

  var burgers = document.getElementsByClassName("burgers");
  for (var i = 0, length = burgers.length; i < length; i++) {
    console.log(burgers[i]);
    console.log(burgers[i].checked)
    if (burgers[i].checked == true) {
      console.log("hello");
      order.push(burgers[i].value);
    }
  }

  confirm.innerText = "Order made: " + order;
  console.log("Order made: " + order);
}

// let myButton = document.getElementById("button");


// display(burgers);

// myButton.setAttribute("onclick","orderConfirmation()");
