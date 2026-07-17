import malwareImage from "../assets/images/malware-project.png";
import bankingImage from "../assets/images/banking-project.png";

const projects = [
  {
    id: 1,
    title: "Enterprise Banking Management System",
    image: bankingImage,

    description:
      "A secure banking application built using Java, Spring Boot, React, and MySQL with authentication and transaction management.",

    features: [
      "User Authentication & Authorization",
      "Account Management",
      "Money Transfer",
      "Transaction History",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
    ],

    screenshots: [
      "/projects/banking/home.png",
      "/projects/banking/login.png",
      "/projects/banking/dashboard.png",
      "/projects/banking/transfer.png",
      "/projects/banking/transactions.png",
    ],

    github: "https://github.com/dashboard",
  },

  {
    id: 2,
    title: "Android Malware Detection using Machine Learning",
    image: malwareImage,

    description:
      "An AI-powered Android malware detection system using Machine Learning to classify APK files as safe or malicious.",

    features: [
      "APK File Analysis",
      "Random Forest Model",
      "Machine Learning Prediction",
      "SHAP Explainability",
    ],

    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Flask",
    ],

    screenshots: [
      "/projects/malware/home.png",
      "/projects/malware/upload.png",
      "/projects/malware/scanning.png",
      "/projects/malware/result.png",
      "/projects/malware/analysis.png",
    ],

    github: "https://github.com/bavatharini03/MALWARE-DETECTION",
  },
];

export default projects;
