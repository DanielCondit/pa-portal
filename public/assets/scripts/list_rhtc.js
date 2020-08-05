let rhtcList = document.querySelector("#rhtc_list");
const rhtcForm = document.querySelector("#add-rhtc-form");

function renderRHTC(doc) {

  "use strict";
  let li = document.createElement("li");
  let date = document.createElement("span");
  let name = document.createElement("span");
  let grade = document.createElement("span");
  let phone = document.createElement("span");
  let emails = document.createElement("span");
  let org = document.createElement("span");
  let osymbol = document.createElement("span");
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
  desc.textContent = doc.data().desc;
  cross.textContent = "DELETE";

  li.appendChild(date);
  li.appendChild(name);
  li.appendChild(grade);
  li.appendChild(phone);
  li.appendChild(emails);
  li.appendChild(org);
  li.appendChild(osymbol);
  li.appendChild(desc);
  li.appendChild(cross);

  // state.slice(-2);

  rhtcList.appendChild(li);

  // Deleting Data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("rhtc")
    .doc(id)
    .delete();
  });
}

// Getting Data
function getData() {
  document.querySelector("#loader").style.display = "block";

  db.collection("rhtc")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderRHTC(doc));
  });
}

// getData();

document.getElementById('add-rhtc-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("rhtc").add({
    date: document.getElementById('add-rhtc-form').date.value,
    fname: document.getElementById('add-rhtc-form').fname.value,
    lname: document.getElementById('add-rhtc-form').lname.value,
    grade: document.getElementById('add-rhtc-form').grade.value,
    phone: document.getElementById('add-rhtc-form').phone.value,
    emails: document.getElementById('add-rhtc-form').emails.value,
    org: document.getElementById('add-rhtc-form').org.value,
    osymbol: document.getElementById('add-rhtc-form').osymbol.value,
    desc: document.getElementById('add-rhtc-form').desc.value
  });
  document.getElementById('add-rhtc-form').date.value = "";
  document.getElementById('add-rhtc-form').fname.value = "";
  document.getElementById('add-rhtc-form').lname.value = "";
  document.getElementById('add-rhtc-form').grade.value = "";
  document.getElementById('add-rhtc-form').phone.value = "";
  document.getElementById('add-rhtc-form').emails.value = "";
  document.getElementById('add-rhtc-form').org.value = "";
  document.getElementById('add-rhtc-form').osymbol.value = "";
  document.getElementById('add-rhtc-form').desc.value = "";
});

// Realtime listener
function getRealtimeData() {
  document.querySelector("#loader").style.display = "block";
  db.collection("rhtc")
  .orderBy("date")
  .onSnapshot(snapshot => {
    document.querySelector("#loader").style.display = "none";
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type === "added") {
        renderRHTC(change.doc);
      } else if (change.type === "removed") {
        let li = rhtcList.querySelector(`[data-id=${change.doc.id}]`);
        rhtcList.removeChild(li);
      }
    });
  });
}
getRealtimeData();