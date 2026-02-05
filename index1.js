document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = form[0].value;
    const email = form[1].value;
    const dept = form[2].value;
    const dateValue = form[3].value;
    const time = form[4].value;

    const date = new Date(dateValue);

    if (date.getDay() === 0) {
      alert("Appointments are not available on Sunday");
      return;
    }

    const appointment = {
      name,
      email,
      dept,
      date: dateValue,
      time,
      status: "Pending"
    };

    let appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    form.reset();
  });
});
