// =========================
// Donor Registration + Firebase
// =========================

const donorForm = document.getElementById("donorForm");

if (donorForm) {

    donorForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("donorName").value.trim();
        const age = document.getElementById("donorAge").value;
        const bloodGroup = document.getElementById("donorBloodGroup").value;
        const weight = document.getElementById("donorWeight").value;
        const mobile = document.getElementById("donorMobile").value.trim();
        const email = document.getElementById("donorEmail").value.trim();
        const city = document.getElementById("donorCity").value.trim();
        const lastDonation = document.getElementById("lastDonation").value;

        // Validation

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (age < 18 || age > 65) {
            alert("Donor age must be between 18 and 65.");
            return;
        }

        if (bloodGroup === "") {
            alert("Please select your blood group.");
            return;
        }

        if (weight < 45) {
            alert("Weight must be at least 45 kg.");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        try{

            await db.collection("donors").add({

                  donorName: name,
                  donorAge: age,
                  donorBloodGroup: bloodGroup,
                  donorWeight: weight,
                  donorMobile: mobile,
                  donorEmail: email,
                  donorCity: city,
                  lastDonation: lastDonation,
                  createdAt: new Date()

            });

            alert("❤️ Thank you! You have successfully registered as a blood donor.");

            donorForm.reset();

        }

        catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}
// Browser Notification Permission

if ("Notification" in window) {

    if (Notification.permission !== "granted") {

        Notification.requestPermission();

    }

}

// =========================
// Dashboard Firebase
// =========================

const donorCount = document.getElementById("donorCount");
const requestCount = document.getElementById("requestCount");
const recentRequests = document.getElementById("recentRequests");
const emergencyAlertContainer = document.getElementById("emergencyAlertContainer");
const matchingDonors = document.getElementById("matchingDonors");
let notifiedRequests = new Set();


// Registered Donors Count
if (donorCount) {

    db.collection("donors").onSnapshot((snapshot) => {

        donorCount.innerHTML = snapshot.size;

    });

}

// Blood Requests Count
if (requestCount) {

    db.collection("bloodRequests").onSnapshot((snapshot) => {
      
      requestCount.innerHTML = snapshot.size;

    });

}

// Recent Blood Requests
if (recentRequests) 

    db.collection("bloodRequests").onSnapshot((snapshot) => {

        recentRequests.innerHTML = "";

        if (snapshot.empty) {

            recentRequests.innerHTML =
            `<tr>
                <td colspan="3">No Requests Available</td>
            </tr>`;

            return;

        }

        snapshot.forEach((doc) => {

            const data = doc.data();

            recentRequests.innerHTML += `

                <tr>

                    <td>${data.patientName}</td>

                    <td>${data.bloodGroup}</td>

                    <td>${data.city}</td>

                </tr>

            `;

        });

    });
// =========================
// Real-Time Emergency Alerts
// =========================

if (emergencyAlertContainer) {

    db.collection("bloodRequests").onSnapshot((snapshot) => {

        emergencyAlertContainer.innerHTML = "";

        if (snapshot.empty) {

            emergencyAlertContainer.innerHTML = `
                <h3>🚨 No Active Emergency Alerts</h3>
                <p>Emergency notifications will appear here.</p>
            `;

            return;
        }

 // 🔔 Browser Notification
snapshot.docChanges().forEach((change) => {

    if (change.type !== "added") return;

    const data = change.doc.data();

    // Skip already notified requests
    if (notifiedRequests.has(change.doc.id)) return;

    notifiedRequests.add(change.doc.id);

    if (Notification.permission === "granted") {

        const notification = new Notification("🚨 LifeLink Emergency Alert", {

            body: `${data.emergencyLevel} | ${data.bloodGroup}\n${data.hospital} - ${data.city}`,

            tag: change.doc.id

        });

        notification.onclick = function () {

            window.focus();

            window.location.href = "dashboard.html";

            notification.close();

        };

    }

});
      
   
// =========================
// Smart Donor Matching
// =========================

if (matchingDonors) {

    db.collection("bloodRequests")
    .orderBy("createdAt", "desc")
    .limit(1)
    .onSnapshot(async (snapshot) => {

        if (snapshot.empty) {

            matchingDonors.innerHTML =
                "<p>No Blood Requests Available.</p>";

            return;
        }

        const request = snapshot.docs[0].data();

        const donorSnapshot = await db.collection("donors")
            .where("donorBloodGroup", "==", request.bloodGroup)
            .where("donorCity", "==", request.city)
            .get();

        matchingDonors.innerHTML = "";

        if (donorSnapshot.empty) {

            matchingDonors.innerHTML =
                "<p>❌ No Matching Donors Found.</p>";

            return;
        }

        donorSnapshot.forEach((doc) => {

            const donor = doc.data();

            matchingDonors.innerHTML += `

                <div class="hospital-card">

                    <h3>❤️ ${donor.donorName}</h3>

                    <p><b>🩸 Blood Group:</b> ${donor.donorBloodGroup}</p>

                    <p><b>📍 City:</b> ${donor.donorCity}</p>

                    <p><b>📞 Mobile:</b> ${donor.donorMobile}</p>

                </div>

            `;

        });

    });

}

        // Dashboard Alert Cards
        snapshot.forEach((doc) => {

            const data = doc.data();

            if (data.status !== "Active") return;

            let color = "#28a745";

            if (data.emergencyLevel === "Critical") {

                color = "#dc3545";

            } else if (data.emergencyLevel === "Urgent") {

                color = "#fd7e14";

            }

            emergencyAlertContainer.innerHTML += `

                <div style="
                    border-left:8px solid ${color};
                    padding:15px;
                    margin-bottom:15px;
                    background:#fff;
                    border-radius:10px;
                    box-shadow:0 5px 15px rgba(0,0,0,.1);
                ">

                    <h3>🚨 ${data.emergencyLevel} Blood Request</h3>

                    <p><b>👤 Patient:</b> ${data.patientName}</p>

                    <p><b>🩸 Blood Group:</b> ${data.bloodGroup}</p>

                    <p><b>🏥 Hospital:</b> ${data.hospital}</p>

                    <p><b>📍 City:</b> ${data.city}</p>

                    <p><b>📞 Mobile:</b> ${data.mobileNo}</p>

                </div>

            `;

        });

    });

}
// =========================
// Contact Form + Firebase
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const mobile = document.getElementById("contactMobile").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        // Validation

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
           alert("Please enter a valid email address.");
           return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (subject === "") {
            alert("Please enter the subject.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        try {

            await db.collection("contactMessages").add({

                contactName: name,
                contactEmail: email,
                contactMobile: mobile,
                contactSubject: subject,
                contactMessage: message,
                createdAt: new Date()

            });

            alert("✅ Your message has been sent successfully!");

            contactForm.reset();

        }

        catch (error) {

            console.error(error);

            alert("❌ Error sending message.");

        }

    });

}

// =========================
// FAQ Toggle
// =========================

function toggleFAQ(question) {

    // Close all answers
    document.querySelectorAll(".faq-item p").forEach((item) => {

        if (item !== question.nextElementSibling) {
            item.style.display = "none";
        }

    });

    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {

        answer.style.display = "none";

    } else {

        answer.style.display = "block";

    }

}

// =========================
// Hospital Search
// =========================

const districtSelect = document.getElementById("districtSelect");
const searchHospitalBtn = document.getElementById("searchHospitalBtn");
const hospitalResults = document.getElementById("hospitalResults");

if (searchHospitalBtn) {

    searchHospitalBtn.addEventListener("click", async () => {

        const district = districtSelect.value;
        console.log("Selected District:", district);

        if (district === "Select Your District") {
            alert("Please select a district.");
            return;
        }

        hospitalResults.innerHTML = "<p>Loading hospitals...</p>";

        try {

            const snapshot = await db.collection("hospitals")
                .where("district", "==", district)
                .get();
                console.log("Documents Found:", snapshot.size);

            hospitalResults.innerHTML = "";

            if (snapshot.empty) {

                hospitalResults.innerHTML =
                    "<p>No hospitals found.</p>";

                return;
            }

            snapshot.forEach((doc) => {

                const hospital = doc.data();

                hospitalResults.innerHTML += `

                <div class="hospital-card">

                    <h3>🏥 ${hospital.hospitalName}</h3>

                    <p><b>📍 City:</b> ${hospital.city}</p>

                    <p><b>🏛 Type:</b> ${hospital.type}</p>

                    <p><b>⭐ NABH:</b> ${hospital.nabh}</p>

                    <p><b>🟢 Status:</b> ${hospital.status}</p>

                </div>

                `;

            });

        } catch (error) {

            console.error(error);

            hospitalResults.innerHTML =
                "<p>Error loading hospitals.</p>";

        }

    });

}
// =========================
// Blood Request + Firebase
// =========================

const requestForm = document.getElementById("requestForm");

if (requestForm) {

    requestForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const patientName = document.getElementById("patientName").value.trim();
        const age = document.getElementById("age").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const emergencyLevel = document.getElementById("emergencyLevel").value;
        const hospital = document.getElementById("hospital").value.trim();
        const city = document.getElementById("city").value.trim();
        const mobileNo = document.getElementById("mobileNo").value.trim();
        const details = document.getElementById("details").value.trim();

        try {

            await db.collection("bloodRequests").add({

                patientName,
                age,
                bloodGroup,
                emergencyLevel,
                hospital,
                city,
                mobileNo,
                details,
                status: "Active",
                createdAt: new Date()

            });

            alert("✅ Blood Request Submitted Successfully!");

            requestForm.reset();

        } catch (error) {

            console.error(error);
            alert("❌ Failed to submit blood request.");

        }

    });

}