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

const inputElements = Array.from(document.querySelectorAll("input"));

inputElements.forEach((input, index) => {
  const list = document.getElementById(`list${index + 1}`);
  input.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" ||
        event.key === "Return" ||
        event.key === "Next") &&
      input.value.trim() !== ""
    ) {
      createListItem(input.value, list);
      input.value = "";
    }
  });
});
