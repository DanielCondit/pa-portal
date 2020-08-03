let serviceList = document.querySelector("#service-list");
const form = document.querySelector("#add-service-form");

function renderService(doc) {

  let row = document.createElement("tr");
  let date = document.createElement("td");
  let fname = document.createElement("td");
  let lname = document.createElement("td");
  let grade = document.createElement("td");
  let phone = document.createElement("td");
  let emails = document.createElement("td");
  let state = document.createElement("td");
  let org = document.createElement("td");
  let osymbol = document.createElement("td");
  let support = document.createElement("td");
  let desc = document.createElement("td");
  let cross = document.createElement("td");

  row.setAttribute("data-id", doc.id);

  textNode1 = document.setAttribute(doc.data().date);
  textNode2 = document.setAttribute(doc.data().fname);
  textNode3 = document.setAttribute(doc.data().lname);
  textNode4 = document.setAttribute(doc.data().grade);
  textNode5 = document.setAttribute(doc.data().phone);
  textNode6 = document.setAttribute(doc.data().emails);
  textNode7 = document.setAttribute(doc.data().state);
  textNode8 = document.setAttribute(doc.data().org);
  textNode9 = document.setAttribute(doc.data().osymbol);
  textNode10 = document.setAttribute(doc.data().support);
  textNode11 = document.setAttribute(doc.data().desc);
  textNode12 = document.setAttribute("X");

  date.appendChild(textNode1);
  fname.appendChild(textNode2);
  lname.appendChild(textNode3);
  grade.appendChild(textNode4);
  phone.appendChild(textNode5);
  emails.appendChild(textNode6);
  state.appendChild(textNode7);
  org.appendChild(textNode8);
  osymbol.appendChild(textNode9);
  support.appendChild(textNode10);
  desc.appendChild(textNode11);
  cross.appendChild(textNode12);

  row.appendChild(date);
  row.appendChild(fname);
  row.appendChild(lname);
  row.appendChild(grade);
  row.appendChild(phone);
  row.appendChild(emails);
  row.appendChild(state);
  row.appendChild(org);
  row.appendChild(osymbol);
  row.appendChild(support);
  row.appendChild(desc);
  row.appendChild(cross);

  serviceList.appendChild(row);

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
  document.querySelector("#loader").style.display = "block";
  db.collection("services")
    .orderBy("date")
    .onSnapshot(snapshot => {
      document.querySelector("#loader").style.display = "none";
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