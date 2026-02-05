function login(){
  if(document.getElementById("pass").value === "admin123"){
    document.getElementById("panel").style.display = "block";
    load();
  } else {
    alert("Wrong password");
  }
}

function load(){
  let data = JSON.parse(localStorage.getItem("appointments")) || [];
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(a => {
    let li = document.createElement("li");
    li.innerText = `${a.patient} - ${a.date} ${a.time} (${a.status})`;
    list.appendChild(li);
  });
}
