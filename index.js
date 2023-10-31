// Function to create a list item with a delete icon
function createListItem(text, list) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${text}<span class="delete-icon">&#128465;</span>`;
  list.appendChild(listItem);

  // Add click event to the delete icon
  const deleteIcon = listItem.querySelector(".delete-icon");
  deleteIcon.addEventListener("click", () => {
    listItem.remove();
  });
}

const inputElements = Array.from(
  document.querySelectorAll('input[type="text"]')
);
const lastInput = inputElements[inputElements.length - 1];

// Handle "Next" button on mobile devices
inputElements.forEach((input, index) => {
  const list = document.getElementById(`list${index + 1}`);
  input.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" ||
      event.key === "Return" ||
      event.key === "Next"
    ) {
      if (input.value.trim() !== "") {
        createListItem(input.value, list);
        input.value = "";
      }
      // Focus the next input
      const nextInput = inputElements[index + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        // If the last input, submit the form
        lastInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === "Return" || e.key === "Next") {
            document.getElementById("listForm").submit();
          }
        });
      }
    }
  });
});
