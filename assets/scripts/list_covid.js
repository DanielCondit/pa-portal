let covidList = document.querySelector("#covid_list");
const covidForm = document.querySelector("#add-covid-form");

function renderCovid(doc) {

  "use strict";
  let li = document.createElement("li");
  let date = document.createElement("span");
  let name = document.createElement("span");
  let birthYear = document.createElement("span");
  let gender = document.createElement("span");
  let temp = document.createElement("span");
  let symptoms = document.createElement("span");
  let squadron = document.createElement("span");
  let notes = document.createElement("span");
  let cross = document.createElement("button");

  li.setAttribute("data-id", doc.id);

  date.textContent = doc.data().date;
  name.textContent = [doc.data().lname,doc.data().fname];
  birthYear.textContent = doc.data().birthYear;
  gender.textContent = doc.data().gender;
  temp.textContent = doc.data().temp;
  symptoms.textContent = [doc.data().symptom1,doc.data().symptom2,doc.data().symptom3,doc.data().symptom4,doc.data().symptom5,doc.data().symptom6,doc.data().symptom7,doc.data().symptom8];
  squadron.textContent = doc.data().squadron;
  notes.textContent = doc.data().notes;
  cross.textContent = "DEL";

  li.appendChild(date);
  li.appendChild(name);
  li.appendChild(birthYear);
  li.appendChild(gender);
  li.appendChild(temp);
  li.appendChild(symptoms);
  li.appendChild(squadron);
  li.appendChild(notes);
  li.appendChild(cross);

  // state.slice(-2);

  covidList.appendChild(li);

  // Deleting Data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("covid_screen")
    .doc(id)
    .delete();
  });
}

// Getting Data
function getData() {
  document.querySelector("#loader").style.display = "block";

  db.collection("covid_screen")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderCovid(doc));
  });
}

// getData();

document.getElementById('add-covid-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("covid_screen").add({
    lname: document.getElementById('add-covid-form').lname.value,
    fname: document.getElementById('add-covid-form').fname.value,
    date: document.getElementById('add-covid-form').date.value,
    birthYear: document.getElementById('add-covid-form').birthYear.value,
    gender: document.getElementById('add-covid-form').gender.value,
    temp: document.getElementById('add-covid-form').temp.value,
    symptom1: document.getElementById('add-covid-form').symptom1.value,
    symptom2: document.getElementById('add-covid-form').symptom2.value,
    symptom3: document.getElementById('add-covid-form').symptom3.value,
    symptom4: document.getElementById('add-covid-form').symptom4.value,
    symptom5: document.getElementById('add-covid-form').symptom5.value,
    symptom6: document.getElementById('add-covid-form').symptom6.value,
    symptom7: document.getElementById('add-covid-form').symptom7.value,
    symptom8: document.getElementById('add-covid-form').symptom8.value,
    squadron: document.getElementById('add-covid-form').squadron.value,
    notes: document.getElementById('add-covid-form').notes.value,
  });
  document.getElementById('add-covid-form').lname.value = "";
  document.getElementById('add-covid-form').fname.value = "";
  document.getElementById('add-covid-form').date.value = "";
  document.getElementById('add-covid-form').birthYear.value = "";
  document.getElementById('add-covid-form').gender.value = "";
  document.getElementById('add-covid-form').temp.value = "";
  document.getElementById('add-covid-form').symptom1.value = "";
  document.getElementById('add-covid-form').symptom2.value = "";
  document.getElementById('add-covid-form').symptom3.value = "";
  document.getElementById('add-covid-form').symptom4.value = "";
  document.getElementById('add-covid-form').symptom5.value = "";
  document.getElementById('add-covid-form').symptom6.value = "";
  document.getElementById('add-covid-form').symptom7.value = "";
  document.getElementById('add-covid-form').symptom8.value = "";
  document.getElementById('add-covid-form').squadron.value = "";
  document.getElementById('add-covid-form').notes.value = "";
});

// Realtime listener
function getRealtimeData() {
  document.querySelector("#covid_loader").style.display = "block";
  db.collection("covid_screen")
  .orderBy("date")
  .onSnapshot(snapshot => {
    document.querySelector("#covid_loader").style.display = "none";
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type === "added") {
        renderCovid(change.doc);
      } else if (change.type === "removed") {
        let li = covidList.querySelector(`[data-id=${change.doc.id}]`);
        covidList.removeChild(li);
      }
    });
  });
}
getRealtimeData();