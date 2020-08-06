let serviceList = document.querySelector("#service_list");
const serviceForm = document.querySelector("#add-service-form");

function renderService(doc) {

  "use strict";
  let li = document.createElement("li");
  let date = document.createElement("span");
  let name = document.createElement("span");
  let grade = document.createElement("span");
  let phone = document.createElement("span");
  let emails = document.createElement("span");
  let state = document.createElement("span");
  let org = document.createElement("span");
  let osymbol = document.createElement("span");
  let support = document.createElement("span");
  let desc = document.createElement("span");
  let cross = document.createElement("button");

  li.setAttribute("data-id", doc.id);

  date.textContent = doc.data().date;
  name.textContent = [doc.data().lname,doc.data().fname];
  grade.textContent = doc.data().grade;
  phone.textContent = doc.data().phone;
  emails.textContent = doc.data().emails;
  state.textContent = doc.data().state.slice(-2);
  org.textContent = doc.data().org;
  osymbol.textContent = doc.data().osymbol;
  support.textContent = doc.data().support;
  desc.textContent = doc.data().desc;
  cross.textContent = "DELETE";

  li.appendChild(date);
  li.appendChild(name);
  li.appendChild(grade);
  li.appendChild(phone);
  li.appendChild(emails);
  li.appendChild(state);
  li.appendChild(org);
  li.appendChild(osymbol);
  li.appendChild(support);
  li.appendChild(desc);
  li.appendChild(cross);

  // state.slice(-2);

  serviceList.appendChild(li);

  // Deleting Data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("services")
    .doc(id)
    .delete();
  });
}

// Getting Data
function getData() {
  document.querySelector("#loader").style.display = "block";

  db.collection("services")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderService(doc));
  });
}

// getData();

document.getElementById('add-service-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("services").add({
    date: document.getElementById('add-service-form').date.value,
    fname: document.getElementById('add-service-form').fname.value,
    lname: document.getElementById('add-service-form').lname.value,
    grade: document.getElementById('add-service-form').grade.value,
    phone: document.getElementById('add-service-form').phone.value,
    emails: document.getElementById('add-service-form').emails.value,
    state: document.getElementById('add-service-form').state.value,
    org: document.getElementById('add-service-form').org.value,
    osymbol: document.getElementById('add-service-form').osymbol.value,
    support: document.getElementById('add-service-form').support.value,
    desc: document.getElementById('add-service-form').desc.value
  });
  document.getElementById('add-service-form').date.value = "";
  document.getElementById('add-service-form').fname.value = "";
  document.getElementById('add-service-form').lname.value = "";
  document.getElementById('add-service-form').grade.value = "";
  document.getElementById('add-service-form').phone.value = "";
  document.getElementById('add-service-form').emails.value = "";
  document.getElementById('add-service-form').state.value = "";
  document.getElementById('add-service-form').org.value = "";
  document.getElementById('add-service-form').osymbol.value = "";
  document.getElementById('add-service-form').support.value = "";
  document.getElementById('add-service-form').desc.value = "";
});

// Realtime listener
function getRealtimeData() {
  document.querySelector("#service_loader").style.display = "block";
  db.collection("services")
  .orderBy("date")
  .onSnapshot(snapshot => {
    document.querySelector("#service_loader").style.display = "none";
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type === "added") {
        renderService(change.doc);
      } else if (change.type === "removed") {
        let li = serviceList.querySelector(`[data-id=${change.doc.id}]`);
        serviceList.removeChild(li);
      }
    });
  });
}
getRealtimeData();