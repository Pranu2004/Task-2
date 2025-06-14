document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("formError");

  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required!";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    error.textContent = "Invalid email format!";
  } else {
    alert("Form submitted successfully!");
    error.textContent = "";
    this.reset();
  }
});

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
