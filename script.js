// Sample data - replace this with actual job listings
// const jobs = [
//     {
//       profile: "Web Developer",
//       company: "ABC Tech",
//       location: "New York",
//     },
//     {
//       profile: "Data Scientist",
//       company: "XYZ Analytics",
//       location: "San Francisco",
//     },
//     {
//       profile: "UX Designer",
//       company: "Design Co.",
//       location: "London",
//     },
//     {
//       profile: "Software Engineer",
//       company: "Tech Solutions",
//       location: "Seattle",
//     },
//     // Add more job listings
//   ];
  
  const cardContainer = document.getElementById("card-container");
  
  function displayJobs(jobs) {
    cardContainer.innerHTML = ""; // Clear previous cards
    jobs.forEach((job) => {
      const card = document.createElement("div");
      card.classList.add("job-card");
      card.innerHTML = `
        <h3>${job.profile}</h3>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
      `;
      cardContainer.appendChild(card);
    });
  }
  
  function filterJobs() {
    const profileFilter = document.getElementById("profile-filter").value.toLowerCase();
    const companyFilter = document.getElementById("company-filter").value.toLowerCase();
    const locationFilter = document.getElementById("location-filter").value.toLowerCase();
  
    const filteredJobs = jobs.filter((job) => {
      const matchesProfile = job.profile.toLowerCase().includes(profileFilter);
      const matchesCompany = job.company.toLowerCase().includes(companyFilter);
      const matchesLocation = job.location.toLowerCase().includes(locationFilter);
      return matchesProfile && matchesCompany && matchesLocation;
    });
  
    displayJobs(filteredJobs);
  }
  
  // Add event listener to the search button
  document.getElementById("search-button").addEventListener("click", filterJobs);
  
  // Initial display of all jobs
  displayJobs(jobs);
  