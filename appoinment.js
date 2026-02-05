document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();

  let date = new Date(document.getElementById("date").value);

  if(date.getDay() === 0){
    alert("Appointments are not available on Sunday");
    return;
  }

  let appointment = {
    patient: e.target[0].value,
    email: e.target[1].value,
    department: e.target[2].value,
    date: e.target[3].value,
    time: e.target[4].value,
    status: "Pending"
  };

  let data = JSON.parse(localStorage.getItem("appointments")) || [];
  data.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(data));

  document.getElementById("msg").innerText =
    "Appointment booked! Waiting for doctor confirmation.";
});
