document.getElementById("generate-email").addEventListener("click", function () {
  // Collect form values
  const employeeName = document.getElementById("employee-name").value;
  const employeePosition = document.getElementById("employee-position").value;
  const departureDate = document.getElementById("departure-date").value;
  const arrivalDate = document.getElementById("arrival-date").value;
  const boatCompany = document.getElementById("boat-company").value;
  const departureTime = document.getElementById("departure-time").value;
  const arrivalTime = document.getElementById("arrival-time").value;
  const insuranceAvailable = document.getElementById("insurance-available").value;
  const lifejacketsCount = document.getElementById("lifejackets-count").value;
  const employeeId = document.getElementById("employee-id").value;
  const contactNumber = document.getElementById("contact-number").value;
  const hodEmail = document.getElementById("hod-email").value;

  // Predefined HR and Security emails
  const hrEmail = "hr@raayabyatmosphere.com";
  const securityEmail = "security@raayabyatmosphere.com";

  if (!employeeName || !employeePosition || !departureDate || !arrivalDate || !hodEmail) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create email body with instructions for HOD
  const emailBody = `
    Dear HOD,

    I, ${employeeName}, currently working at RAAYA BY ATMOSPHERE Resort as a ${employeePosition}, acknowledge that I have arranged for my own private boat transfers to travel out of the island on ${departureDate} and shall be arriving back on ${arrivalDate}.

    Boat Details:
    - Boat Company Name: ${boatCompany}
    - Departure Time: ${departureTime}
    - Arrival Time: ${arrivalTime}
    - Insurance Available: ${insuranceAvailable}
    - Number of Lifejackets: ${lifejacketsCount}

    Employee Information:
    - Employee ID: ${employeeId}
    - Contact Number: ${contactNumber}

    I understand the safety & security hazards associated with privately arranged boat transfers and accept full responsibility. The resort is not liable for this trip.

    **Action Required:**
    - Please approve this request by replying to this email with "Approved" and forwarding it to HR (${hrEmail}).
    - HR will then review and forward it to Security (${securityEmail}).
    
    Thank you for your attention.

    Best regards,
    ${employeeName}
  `;

  // Generate mailto link
  const mailtoLink = `mailto:${hodEmail}?subject=Boat Transfer Disclaimer&body=${encodeURIComponent(
    emailBody
  )}`;

  // Open the user's email client
  window.location.href = mailtoLink;
});
