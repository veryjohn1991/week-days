// Get the current date and format it
const currentDate = dayjs().format("dddd, MMMM D, YYYY");
// Display it in the #currentDay element
document.getElementById("currentDay").textContent = currentDate;
// Get the current hour
const currentHour = dayjs().hour();

// Loop through time blocks and add classes based on the comparison
document.querySelectorAll(".time-block").forEach((timeBlock) => {
  const timeBlockHour = parseInt(timeBlock.id.split("-")[1]);
  if (timeBlockHour < currentHour) {
    timeBlock.classList.add("past");
  } else if (timeBlockHour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
});
// Event listener for save buttons
document.querySelectorAll(".saveBtn").forEach((saveBtn) => {
  saveBtn.addEventListener("click", function () {
    const timeBlock = this.parentElement;
    const eventText = timeBlock.querySelector(".description").value;
    const timeBlockHour = timeBlock.id.split("-")[1];
    
    // Save the event text to local storage with a key based on the time block hour
    localStorage.setItem(`event-${timeBlockHour}`, eventText);
  });
});
// Load saved events from local storage and populate textareas
document.querySelectorAll(".time-block").forEach((timeBlock) => {
  const timeBlockHour = timeBlock.id.split("-")[1];
  const savedEvent = localStorage.getItem(`event-${timeBlockHour}`);
  
  if (savedEvent !== null) {
    timeBlock.querySelector(".description").value = savedEvent;
  }
});

