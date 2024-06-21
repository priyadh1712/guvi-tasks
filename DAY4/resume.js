const resume = {
    "name": "Priya Dharshini Ashok",
    "contact": {
      "email": "prixaashok2003@gmail.com",
      "phone": "+91 8925688849",
      "location": "Chennai, India",
      "linkedin": "https://www.linkedin.com/in/priyadharshini-ashok/",
      "github": "https://github.com/priyadh1712",
      "geeksforgeeks": "https://www.geeksforgeeks.org/user/prixaashj0e1/"
    },
    "education": [
      {
        "degree": "B.Tech Computer Science Engineering (Cybersecurity)",
        "institution": "Amrita Vishwa Vidyapeetham (Deemed University)",
        "location": "Chennai, India",
        "startDate": "October 2021",
        "endDate": "May 2025",
        "cgpa": "7.62/10.0"
      },
      {
        "degree": "Higher Secondary Education",
        "institution": "Indian School Al Seeb",
        "location": "Muscat, Oman",
        "startDate": "July 2020",
        "endDate": "March 2021",
        "percentage": "81%"
      }
    ],
    "skills": {
      "programmingLanguages": ["Java", "C/C++", "SQL"],
      "scriptingLanguages": ["Bash", "Python"],
      "webTechnologies": ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js"],
      "developerTools": ["Git", "VS Code", "Visual Studio", "Eclipse", "Postman", "Google Colab"],
      "coreSkills": ["Data Structures and Algorithms", "Networking", "RESTful APIs"]
    },
    "projects": [
      {
        "title": "TaskManager",
        "technologies": ["JavaScript", "React", "MongoDB", "Node.js", "Git"]
      },
      {
        "title": "Cryptoconnect",
        "technologies": ["Solidity", "Ethereum", "Blockchain", "React", "Git"]
      }
    ],
    "experience": [
      {
        "organization": "AMC Free Open Source Software - FOSS Club",
        "role": "Member"
      }
    ],
    "certifications": [
      {
        "name": "Full Stack Development",
        "issuer": "GUVI- IIT Madras"
      },
      {
        "name": "Google Cloud Skills Boost",
        "issuer": "Google Cloud"
      },
      {
        "name": "Certified Blockchain Associate",
        "issuer": "Kerala Blockchain Academy"
      },
      {
        "name": "Java Programming Certification",
        "issuer": "GeeksforGeeks"
      }
    ]
  }
  

// Using for loop
console.log("For loop:");
for (let i = 0; i < resume.education.length; i++) {
  console.log(resume.education[i]);
}

// Using for...in loop
console.log("For...in loop:");
for (const key in resume.contact) {
  console.log(`${key}: ${resume.contact[key]}`);
}

// Using for...of loop
console.log("For...of loop:");
for (const project of resume.projects) {
  console.log(project);
}

// Using forEach method
console.log("forEach method:");
resume.certifications.forEach(certification => {
  console.log(certification);
});