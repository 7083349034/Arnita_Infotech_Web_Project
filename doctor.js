let data = JSON.parse(localStorage.getItem("appointments")) || [];
let list = document.getElementById("docList");

data.forEach((a, i) => {
  let li = document.createElement("li");
  li.innerHTML = `
    ${a.patient} - ${a.date}
    <button onclick="confirm(${i})">Confirm</button>
  `;
  list.appendChild(li);
});

function confirm(i){
  data[i].status = "Confirmed";
  localStorage.setItem("appointments", JSON.stringify(data));
  alert("Appointment confirmed");
  location.reload();
}
