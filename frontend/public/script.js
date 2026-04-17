const nameEl = document.getElementById("name");
const titleEl = document.getElementById("title");
const bioEl = document.getElementById("bio");
const skills = document.getElementById("skills");

// 🚀 loading state
nameEl.textContent = "Loading...";
titleEl.textContent = "";
bioEl.textContent = "";
function setLoading() {
  nameEl.textContent = "Loading...";
  titleEl.textContent = "";
  bioEl.textContent = "";
}
// profile load
async function loadProfile() {
  try {
    const res = await fetch("/api/profile");
    const data = await res.json();

    nameEl.textContent = data.name;
    titleEl.textContent = data.title;
    bioEl.textContent = data.bio;

    skills.innerHTML = "";

    data.skills.forEach(s => {
      skills.insertAdjacentHTML("beforeend", `<li>${s}</li>`);
    });

  } catch (err) {
    nameEl.textContent = "Error loading profile";
    console.error(err);
  }
}

setLoading();
loadProfile();