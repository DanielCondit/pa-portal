let covidList = document.querySelector("#covid_list");
let equipmentList = document.querySelector("#equipment_list");
let rhtcList = document.querySelector("#rhtc_list");
let serviceList = document.querySelector("#service_list");
const covidForm = document.querySelector("#add-covid-form");
const equipmentForm = document.querySelector("#add-equipment-form");
const rhtcForm = document.querySelector("#add-rhtc-form");
const serviceForm = document.querySelector("#add-service-form");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    function renderCovid(doc) {

      "use strict";
      let tr = document.createElement("tr");
      let date = document.createElement("td");
      let time = document.createElement("td");
      let name = document.createElement("td");
      let phone = document.createElement("td");
      let temp = document.createElement("td");
      let symptoms = document.createElement("td");
      let squadron = document.createElement("td");
      let notes = document.createElement("td");
      // let del = document.createElement("button");

      tr.setAttribute("data-id", doc.id);

      date.textContent = doc.data().date;
      time.textContent = doc.data().time;
      name.textContent = [doc.data().lname, doc.data().fname];
      phone.textContent = doc.data().phone;
      temp.textContent = doc.data().temp;
      symptoms.textContent = [doc.data().symptom1, doc.data().symptom2, doc.data().symptom3, doc.data().symptom4, doc.data().symptom5, doc.data().symptom6, doc.data().symptom7, doc.data().symptom8];
      squadron.textContent = doc.data().squadron;
      notes.textContent = doc.data().notes;
      // del.textContent = "DELETE";

      tr.appendChild(date);
      tr.appendChild(time);
      tr.appendChild(name);
      tr.appendChild(phone);
      tr.appendChild(temp);
      tr.appendChild(symptoms);
      tr.appendChild(squadron);
      tr.appendChild(notes);
      // tr.appendChild(del);

      covidList.appendChild(tr);

      // Deleting Data
      // del.addEventListener("click", e => {
      //   e.stopPropagation();
      //   let id = e.target.parentElement.getAttribute("data-id");
      //   db.collection("covid_screen")
      //   .doc(id)
      //   .delete();
      // });
    }

    function renderEquipment(doc) {

      "use strict";
      let tr = document.createElement("tr");
      let date = document.createElement("td");
      let time = document.createElement("td");
      let name = document.createElement("td");
      let grade = document.createElement("td");
      let phone = document.createElement("td");
      let emails = document.createElement("td");
      let org = document.createElement("td");
      let osymbol = document.createElement("td");
      let equipment = document.createElement("td");
      let desc = document.createElement("td");
      // let del = document.createElement("button");

      tr.setAttribute("data-id", doc.id);

      date.textContent = doc.data().date;
      time.textContent = doc.data().time;
      name.textContent = [doc.data().lname, doc.data().fname];
      grade.textContent = doc.data().grade;
      phone.textContent = doc.data().phone;
      emails.textContent = doc.data().emails;
      org.textContent = doc.data().org;
      osymbol.textContent = doc.data().osymbol;
      equipment.textContent = doc.data().osymbol;
      desc.textContent = doc.data().desc;
      // del.textContent = "DELETE";

      tr.appendChild(date);
      tr.appendChild(time);
      tr.appendChild(name);
      tr.appendChild(grade);
      tr.appendChild(phone);
      tr.appendChild(emails);
      tr.appendChild(org);
      tr.appendChild(osymbol);
      tr.appendChild(equipment);
      tr.appendChild(desc);
      // tr.appendChild(del);

      equipmentList.appendChild(tr);

      // Deleting Data
      // del.addEventListener("click", e => {
      //   e.stopPropagation();
      //   let id = e.target.parentElement.getAttribute("data-id");
      //   db.collection("equipment")
      //   .doc(id)
      //   .delete();
      // });
    }

    function renderRHTC(doc) {

      "use strict";
      let tr = document.createElement("tr");
      let date = document.createElement("td");
      let time = document.createElement("td");
      let name = document.createElement("td");
      let grade = document.createElement("td");
      let phone = document.createElement("td");
      let emails = document.createElement("td");
      let org = document.createElement("td");
      let osymbol = document.createElement("td");
      let desc = document.createElement("td");
      // let del = document.createElement("button");

      tr.setAttribute("data-id", doc.id);

      date.textContent = doc.data().date;
      time.textContent = doc.data().time;
      name.textContent = [doc.data().lname, doc.data().fname];
      grade.textContent = doc.data().grade;
      phone.textContent = doc.data().phone;
      emails.textContent = doc.data().emails;
      org.textContent = doc.data().org;
      osymbol.textContent = doc.data().osymbol;
      desc.textContent = doc.data().desc;
      // del.textContent = "DELETE";

      tr.appendChild(date);
      tr.appendChild(time);
      tr.appendChild(name);
      tr.appendChild(grade);
      tr.appendChild(phone);
      tr.appendChild(emails);
      tr.appendChild(org);
      tr.appendChild(osymbol);
      tr.appendChild(desc);
      // tr.appendChild(del);

      rhtcList.appendChild(tr);

      // Deleting Data
      // del.addEventListener("click", e => {
      //   e.stopPropagation();
      //   let id = e.target.parentElement.getAttribute("data-id");
      //   db.collection("rhtc")
      //   .doc(id)
      //   .delete();
      // });
    }

    function renderService(doc) {

      "use strict";
      let tr = document.createElement("tr");
      let date = document.createElement("td");
      let time = document.createElement("td");
      let name = document.createElement("td");
      let grade = document.createElement("td");
      let phone = document.createElement("td");
      let emails = document.createElement("td");
      let state = document.createElement("td");
      let org = document.createElement("td");
      let osymbol = document.createElement("td");
      let support = document.createElement("td");
      let desc = document.createElement("td");
      // let del = document.createElement("button");


      tr.setAttribute("data-id", doc.id);

      // let today = new Date();
      // let today_dd = today.getDate();
      // let today_mm = today.getMonth()+1; 
      // let today_yyyy = today.getFullYear();
      // if(today_dd<10) 
      // {
      //   today_dd='0'+today_dd;
      // } 

      // if(today_mm<10) 
      // {
      //   today_mm='0'+today_mm;
      // } 
      // today = today_yyyy+''+today_mm+''+today_dd;

      // let oldDate = new Date("2020-08-18");
      // let oldDate_dd = oldDate.getDate()+1;
      // let oldDate_mm = oldDate.getMonth()+1; 
      // let oldDate_yyyy = oldDate.getFullYear();
      // if(oldDate_dd<10) 
      // {
      //   oldDate_dd='0'+oldDate_dd;
      // } 

      // if(oldDate_mm<10) 
      // {
      //   oldDate_mm='0'+oldDate_mm;
      // } 
      // oldDate = oldDate_yyyy+''+oldDate_mm+''+oldDate_dd;

      // if (today <= oldDate){
      //   let unixDate = doc.data().date;
      //   let myDate = moment.unix(unixDate.seconds).format('MMM Do, YYYY');
      //   date.textContent = myDate;
      // } else if (today > oldDate){
      //   date.textContent = doc.data().date;
      // } else {
      //   console.log("No dates to display.");
      // }
      
      let unixDate = doc.data().date;
      let myDate = moment.unix(unixDate.seconds).format('MMM Do, YYYY');

      date.textContent = myDate;
      time.textContent = doc.data().time;
      name.textContent = [doc.data().lname, doc.data().fname];
      grade.textContent = doc.data().grade;
      phone.textContent = doc.data().phone;
      emails.textContent = doc.data().emails;
      state.textContent = doc.data().state;
      org.textContent = doc.data().org;
      osymbol.textContent = doc.data().osymbol;
      support.textContent = doc.data().support;
      desc.textContent = doc.data().desc;
      // del.textContent = "DELETE";

      tr.appendChild(date);
      tr.appendChild(time);
      tr.appendChild(name);
      tr.appendChild(grade);
      tr.appendChild(phone);
      tr.appendChild(emails);
      tr.appendChild(state);
      tr.appendChild(org);
      tr.appendChild(osymbol);
      tr.appendChild(support);
      tr.appendChild(desc);
      // tr.appendChild(del);

      serviceList.appendChild(tr);

      // Deleting Data
      // del.addEventListener("click", e => {
      //   e.stopPropagation();
      //   let id = e.target.parentElement.getAttribute("data-id");
      //   db.collection("Form_833")
      //   .doc(id)
      //   .delete();
      // });
    }

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

      document.querySelector("#rhtc_loader").style.display = "block";
      db.collection("rhtc")
      .orderBy("date")
      .onSnapshot(snapshot => {
        document.querySelector("#rhtc_loader").style.display = "none";
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

      document.querySelector("#service_loader").style.display = "block";
      db.collection("Form_833")
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
  }
});

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

  db.collection("equipment")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderEquipment(doc));
  });

  db.collection("rhtc")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderRHTC(doc));
  });

  db.collection("Form_833")
  .orderBy("date")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    document.querySelector("#loader").style.display = "none";
    snapshot.docs.forEach(doc => renderService(doc));
  });
}

// getData();

document.getElementById('add-covid-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("covid_screen").add({
    lname: document.getElementById('add-covid-form').lname.value,
    fname: document.getElementById('add-covid-form').fname.value,
    phone: document.getElementById('add-covid-form').phone.value,
    date: document.getElementById('add-covid-form').date.value,
    time: document.getElementById('add-covid-form').time.value,
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
  document.getElementById('add-covid-form').phone.value = "";
  document.getElementById('add-covid-form').date.value = "";
  document.getElementById('add-covid-form').time.value = "";
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

  document.getElementById("add-covid-form").reset();
});

document.getElementById('add-equipment-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("equipment").add({
    date: document.getElementById('add-equipment-form').date.value,
    time: document.getElementById('add-equipment-form').time.value,
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
  document.getElementById('add-equipment-form').time.value = "";
  document.getElementById('add-equipment-form').fname.value = "";
  document.getElementById('add-equipment-form').lname.value = "";
  document.getElementById('add-equipment-form').grade.value = "";
  document.getElementById('add-equipment-form').phone.value = "";
  document.getElementById('add-equipment-form').emails.value = "";
  document.getElementById('add-equipment-form').org.value = "";
  document.getElementById('add-equipment-form').osymbol.value = "";
  document.getElementById('add-equipment-form').equipment.value = "";
  document.getElementById('add-equipment-form').desc.value = "";

  document.getElementById("add-equipment-form").reset();
});

document.getElementById('add-rhtc-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("rhtc").add({
    date: document.getElementById('add-rhtc-form').date.value,
    time: document.getElementById('add-rhtc-form').time.value,
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
  document.getElementById('add-rhtc-form').time.value = "";
  document.getElementById('add-rhtc-form').fname.value = "";
  document.getElementById('add-rhtc-form').lname.value = "";
  document.getElementById('add-rhtc-form').grade.value = "";
  document.getElementById('add-rhtc-form').phone.value = "";
  document.getElementById('add-rhtc-form').emails.value = "";
  document.getElementById('add-rhtc-form').org.value = "";
  document.getElementById('add-rhtc-form').osymbol.value = "";
  document.getElementById('add-rhtc-form').desc.value = "";

  document.getElementById("add-rhtc-form").reset();
});

document.getElementById('add-service-form').addEventListener("submit", e => {
  e.preventDefault();

  db.collection("Form_833").add({
    date: document.getElementById('add-service-form').date.value,
    time: document.getElementById('add-service-form').time.value,
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
  document.getElementById('add-service-form').time.value = "";
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

  document.getElementById("add-service-form").reset();
});