const steps = [
    {
      id: "1",
      message: "Hello! What would you like to ask about?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "work", label: "Work", trigger: "workOptions" },
        { value: "technical", label: "Technical Stuff", trigger: "technicalOptions" },
      ],
    },
  
    {
      id: "workOptions",
      message: "Here are common questions about freelancing and work:",
      trigger: "workQuestions",
    },
    {
      id: "workQuestions",
      options: [
        { value: "freelanceStart", label: "How to start freelancing?", trigger: "freelanceStart" },
        { value: "freelancePlatforms", label: "Best platforms for freelancing?", trigger: "freelancePlatforms" },
        { value: "freelanceSkills", label: "Important skills for freelancing?", trigger: "freelanceSkills" },
        { value: "clientFind", label: "How to find clients?", trigger: "clientFind" },
        { value: "pricing", label: "How to price my work?", trigger: "pricing" },
        { value: "payments", label: "How to handle payments?", trigger: "payments" },
      ],
    },
    {
      id: "freelanceStart",
      message: "To start freelancing, identify your skills, create a portfolio, and join freelance platforms.",
      end: true,
    },
    {
      id: "freelancePlatforms",
      message: "Top platforms include Upwork, Fiverr, Freelancer, and Toptal.",
      end: true,
    },
    {
      id: "freelanceSkills",
      message: "Critical skills are communication, time management, and expertise in your field.",
      end: true,
    },
    {
      id: "clientFind",
      message: "To find clients, network, use social media, and optimize your freelance profiles.",
      end: true,
    },
    {
      id: "pricing",
      message: "Research market rates and value your skills when pricing your work.",
      end: true,
    },
    {
      id: "payments",
      message: "Use secure payment methods like PayPal, Payoneer, or direct bank transfers.",
      end: true,
    },
  
    // Technical Section
    {
      id: "technicalOptions",
      message: "Select a technical topic:",
      trigger: "technicalTopics",
    },
    {
      id: "technicalTopics",
      options: [
        { value: "frontend", label: "Front-End Development", trigger: "frontend" },
        { value: "backend", label: "Back-End Development", trigger: "backend" },
        { value: "codingGeneral", label: "Coding in General", trigger: "codingGeneral" },
        { value: "uiux", label: "UI/UX Design", trigger: "uiux" },
      ],
    },
    {
      id: "frontend",
      message: "Front-end development involves creating the user interface of websites using technologies like HTML, CSS, and JavaScript.",
      trigger: "frontendLinks",
    },
    {
      id: "frontendLinks",
      message: "For more details, check our tutorials.",
      end: true,
    },
    {
      id: "backend",
      message: "Back-end development focuses on server-side logic using technologies like Node.js, Python, and databases.",
      trigger: "backendLinks",
    },
    {
      id: "backendLinks",
      message: "For more details, check our tutorials.",
      end: true,
    },
    {
      id: "codingGeneral",
      message: "Coding involves problem-solving using programming languages such as Python, Java, and C++.",
      trigger: "codingGeneralLinks",
    },
    {
      id: "codingGeneralLinks",
      message: "For more details, check our tutorials.",
      end: true,
    },
    {
      id: "uiux",
      message: "UI/UX design focuses on enhancing user satisfaction through design and usability.",
      trigger: "uiuxLinks",
    },
    {
      id: "uiuxLinks",
      message: "For more details, check our tutorials.",
      end: true,
    },
  ];
  
  export default steps;
  