let equipmentList = document.querySelector("#equipment_list");
const equipmentForm = document.querySelector("#add-equipment-form");

function renderEquipment(doc) {

  "use strict";
  let li = document.createElement("li");
  let date = document.createElement("span");
  let name = document.createElement("span");
  let grade = document.createElement("span");
  let phone = document.createElement("span");
  let emails = document.createElement("span");
  let org = document.createElement("span");
  let osymbol = document.createElement("span");
  let equipment = document.createElement("span");
  let desc = document.createElement("span");
  let cross = document.createElement("button");

  li.setAttribute("data-id", doc.id);

  date.textContent = doc.data().date;
  name.textContent = [doc.data().lname,doc.data().fname];
  grade.textContent = doc.data().grade;
  phone.textContent = doc.data().phone;
  emails.textContent = doc.data().emails;
  org.textContent = doc.data().org;
  osymbol.textContent = doc.data().osymbol;
  equipment.textContent = doc.data().osymbol;
  desc.textContent = doc.data().desc;
  cross.textContent = "DELETE";

  li.appendChild(date);
  li.appendChild(name);
  li.appendChild(grade);
  li.appendChild(phone);
  li.appendChild(emails);
  li.appendChild(org);
  li.appendChild(osymbol);
  li.appendChild(equipment);
  li.appendChild(desc);
  li.appendChild(cross);

  // state.slice(-2);

  equipmentList.appendChild(li);

  // Deleting Data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("equipment")
    .doc(id)
    .delete();
  });
}

// Getting Data
function getData() {
  document.querySelector("#loader").style.display = "block";

  db.collection("equipment")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderEquipment(doc));
  });
}

// getData();

document.getElementById('add-equipment-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("equipment").add({
    date: document.getElementById('add-equipment-form').date.value,
    fname: document.getElementById('add-equipment-form').fname.value,
    lname: document.getElementById('add-equipment-form').lname.value,
    grade: document.getElementById('add-equipment-form').grade.value,
    phone: document.getElementById('add-equipment-form').phone.value,
    emails: document.getElementById('add-equipment-form').emails.value,
    org: document.getElementById('add-equipment-form').org.value,
    osymbol: document.getElementById('add-equipment-form').osymbol.value,
    equipment: document.getElementById('add-equipment-form').osymbol.value,
    desc: document.getElementById('add-equipment-form').desc.value
  });
  document.getElementById('add-equipment-form').date.value = "";
  document.getElementById('add-equipment-form').fname.value = "";
  document.getElementById('add-equipment-form').lname.value = "";
  document.getElementById('add-equipment-form').grade.value = "";
  document.getElementById('add-equipment-form').phone.value = "";
  document.getElementById('add-equipment-form').emails.value = "";
  document.getElementById('add-equipment-form').org.value = "";
  document.getElementById('add-equipment-form').osymbol.value = "";
  document.getElementById('add-equipment-form').equipment.value = "";
  document.getElementById('add-equipment-form').desc.value = "";
});

// Realtime listener
function getRealtimeData() {
  document.querySelector("#equipment_loader").style.display = "block";
  db.collection("equipment")
  .orderBy("date")
  .onSnapshot(snapshot => {
    document.querySelector("#equipment_loader").style.display = "none";
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type === "added") {
        renderEquipment(change.doc);
      } else if (change.type === "removed") {
        let li = equipmentList.querySelector(`[data-id=${change.doc.id}]`);
        equipmentList.removeChild(li);
      }
    });
  });
}
getRealtimeData();