let token = "";

// 🔐 LOGIN
async function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.success) {
    token = data.token;
    alert("Login success");
    loadProjects();
  } else {
    alert("Login failed");
  }
}

// 📦 ADD PROJECT
async function addProject() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token
    },
    body: JSON.stringify({ title, desc })
  });

  loadProjects();
}

// 📄 LOAD PROJECTS
async function loadProjects() {
  const res = await fetch("/api/projects");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((p, i) => {
    list.innerHTML += `
      <li>
        ${p.title} - ${p.desc}
        <button onclick="deleteProject(${i})">X</button>
      </li>
    `;
  });
}

// ❌ DELETE
async function deleteProject(id) {
  await fetch("/api/projects/" + id, {
    method: "DELETE",
    headers: { token }
  });

  loadProjects();
}