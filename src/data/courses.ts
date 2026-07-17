export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface PricingDetail {
  price: number;
  originalPrice: number;
  discount: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  domain: string;
  duration: string;
  modulesCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviews: number;
  description: string;
  whyChoose: string[];
  skills: string[];
  syllabus: SyllabusModule[];
  projects: Project[];
  pricing: {
    "self-paced": PricingDetail;
    "mentor-led": PricingDetail;
    offline: PricingDetail;
    "one-on-one": PricingDetail;
  };
}

export const domains = [
  { id: "cse-it", name: "CSE / IT" },
  { id: "ece", name: "ECE Domains" },
  { id: "mechanical", name: "Mechanical Engineering" },
  { id: "civil", name: "Civil Engineering" },
  { id: "aeronautical", name: "Aeronautical" },
  { id: "management-commerce", name: "Management & Commerce" },
  { id: "bio", name: "Bio Domains" },
  { id: "chemical", name: "Chemical Engineering" },
  { id: "others", name: "Others" },
];

export const courses: Course[] = [
  // --- CSE / IT ---
  {
    id: "azure-cloud-architect",
    title: "Azure Cloud and Architect",
    domain: "CSE / IT",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.9,
    reviews: 248,
    description:
      "Master Microsoft Azure cloud services, architecture, security, and deployment strategies to design enterprise-grade scalable solutions.",
    whyChoose: [
      "Industry-aligned curriculum designed by certified Azure Solutions Architects.",
      "Hands-on labs on Azure portal, Azure CLI, and Terraform deployments.",
      "100% placement support with mock interview sessions.",
    ],
    skills: [
      "Azure Portals",
      "Cloud Architecture",
      "ARM Templates",
      "IAM & Security",
      "Kubernetes on Azure",
      "DevOps Pipelines",
    ],
    syllabus: [
      {
        title: "Module 1: Cloud Concepts & Azure Architecture",
        topics: [
          "Introduction to Cloud Computing",
          "Azure Regions, Availability Zones",
          "Azure Resource Manager (ARM)",
          "Management Groups and Subscriptions",
        ],
      },
      {
        title: "Module 2: Compute Services",
        topics: [
          "Virtual Machines (VM) provisioning",
          "Virtual Machine Scale Sets (VMSS)",
          "Azure App Services",
          "Container Instances & Azure Kubernetes Service (AKS)",
        ],
      },
      {
        title: "Module 3: Storage & Database Solutions",
        topics: [
          "Blob Storage, File Storage, Queue Storage",
          "Azure SQL Databases",
          "Cosmos DB & NoSQL integration",
          "Backup and Recovery models",
        ],
      },
      {
        title: "Module 4: Azure Networking",
        topics: [
          "Virtual Networks (VNet) & Subnets",
          "Network Security Groups (NSGs)",
          "Load Balancer & Application Gateway",
          "VNet Peering and VPN Gateways",
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise Multi-tier Architecture Deployment",
        description:
          "Deploy a highly available, load-balanced web application across multiple availability zones using Azure ARM Templates.",
      },
      {
        title: "Serverless E-Commerce Backend",
        description:
          "Build a serverless order processing backend using Azure Functions, Cosmos DB, and Azure Event Grid.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3499,
        originalPrice: 4999,
        discount: "30% OFF",
        features: [
          "Lifetime access to recordings",
          "Self-paced study material",
          "Community Support forum",
          "Vaidik Certificate of Completion",
        ],
      },
      "mentor-led": {
        price: 5999,
        originalPrice: 8999,
        discount: "33% OFF",
        features: [
          "Live interactive weekend sessions",
          "Dedicated mentor Q&A",
          "Resume building support",
          "1-on-1 career path guidance",
          "Vaidik Certificate of Completion",
        ],
      },
      offline: {
        price: 15999,
        originalPrice: 19999,
        discount: "20% OFF",
        features: [
          "In-person classroom training",
          "Physical lab access",
          "Weekly tests and mock interviews",
          "Direct recruitment referrals",
          "Vaidik Certificate + Printed Copy",
        ],
      },
      "one-on-one": {
        price: 39999,
        originalPrice: 49999,
        discount: "20% OFF",
        features: [
          "Personal dedicated instructor",
          "Customized training speed",
          "Direct live feedback & code review",
          "Elite placement fast-track support",
          "Custom project development support",
        ],
      },
    },
  },
  {
    id: "ccna",
    title: "CCNA (Cisco Certified Network Associate)",
    domain: "CSE / IT",
    duration: "10 Weeks",
    modulesCount: 6,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 184,
    description:
      "Acquire basic and intermediate networking skills covering routing protocols, VLANs, IPv4/IPv6 subnetting, security, and automation fundamentals.",
    whyChoose: [
      "Extensive Cisco Packet Tracer and GNS3 laboratory exercises.",
      "Covers all topics of the current Cisco 200-301 CCNA certification exam.",
      "Placement assistance in major telecom and corporate network companies.",
    ],
    skills: [
      "Subnetting",
      "Routing Protocols (OSPF)",
      "VLANs & Trunking",
      "Network Security Basics",
      "IP Addressing",
      "Cisco CLI",
    ],
    syllabus: [
      {
        title: "Module 1: Network Fundamentals",
        topics: [
          "OSI Model vs TCP/IP Model",
          "Cabling, Routers, and Switches",
          "IPv4 Addressing and Subnetting",
          "IPv6 Essentials",
        ],
      },
      {
        title: "Module 2: Network Access & Routing",
        topics: [
          "VLANs, Inter-VLAN routing",
          "Spanning Tree Protocol (STP)",
          "OSPF routing configuration",
          "Wireless Network fundamentals",
        ],
      },
    ],
    projects: [
      {
        title: "Corporate Network Infrastructure Design",
        description:
          "Design and implement a secure network structure for a 3-office organization with VLANs, DHCP, NAT, and OSPF.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2999,
        originalPrice: 3999,
        discount: "25% OFF",
        features: [
          "Recorded lectures",
          "Simulation files for Packet Tracer",
          "Discussion board access",
          "Vaidik Certificate of Completion",
        ],
      },
      "mentor-led": {
        price: 4999,
        originalPrice: 6999,
        discount: "28% OFF",
        features: [
          "Live online classes",
          "Doubt-clearing sessions",
          "Interview practice questions",
          "Vaidik Certificate of Completion",
        ],
      },
      offline: {
        price: 14999,
        originalPrice: 17999,
        discount: "16% OFF",
        features: [
          "Physical router/switch labs",
          "Classroom environment",
          "Resume writing workshop",
          "Job drive notifications",
        ],
      },
      "one-on-one": {
        price: 34999,
        originalPrice: 42999,
        discount: "18% OFF",
        features: [
          "1-on-1 training",
          "Tailored network lab simulations",
          "Fast track course completion",
          "Direct interview scheduling",
        ],
      },
    },
  },
  {
    id: "docker-kubernetes",
    title: "Docker & Kubernetes",
    domain: "CSE / IT",
    duration: "8 Weeks",
    modulesCount: 6,
    difficulty: "Intermediate",
    rating: 4.9,
    reviews: 196,
    description:
      "Learn containerization with Docker and container orchestration using Kubernetes. Set up production-ready CI/CD microservice architectures.",
    whyChoose: [
      "Focus on microservices orchestration, service meshes, and Helm charts.",
      "Taught by senior DevOps engineers with corporate experience.",
      "Prepares you for CKA (Certified Kubernetes Administrator) exams.",
    ],
    skills: [
      "Dockerfiles",
      "Containerization",
      "K8s Pods & Deployments",
      "ConfigMaps & Secrets",
      "Ingress Controllers",
      "DevOps Pipelines",
    ],
    syllabus: [
      {
        title: "Module 1: Docker Basics & Container Management",
        topics: [
          "Why Containerization?",
          "Docker architecture, Docker daemon",
          "Writing custom Dockerfiles",
          "Docker Compose multi-container environments",
        ],
      },
      {
        title: "Module 2: Kubernetes Fundamentals",
        topics: [
          "K8s Architecture: Control Plane & Nodes",
          "Pods, ReplicaSets, Deployments",
          "Services (ClusterIP, NodePort, LoadBalancer)",
          "Ingress management",
        ],
      },
    ],
    projects: [
      {
        title: "Multi-Service App Orchestration",
        description:
          "Containerize a React/Node/MongoDB app and deploy it on a local Minikube cluster with environment configuration and volume persistence.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2999,
        originalPrice: 4499,
        discount: "33% OFF",
        features: [
          "Video lessons",
          "GitHub repository with scripts",
          "Lifetime access",
          "Certificate",
        ],
      },
      "mentor-led": {
        price: 5499,
        originalPrice: 7999,
        discount: "31% OFF",
        features: [
          "Live online labs",
          "Interactive DevOps workshops",
          "Interview preparation",
          "Certificate",
        ],
      },
      offline: {
        price: 15499,
        originalPrice: 18999,
        discount: "18% OFF",
        features: [
          "Classroom practical lab sessions",
          "Local server setup",
          "Placement drives and direct referrals",
          "Hardcopy Certificate",
        ],
      },
      "one-on-one": {
        price: 36999,
        originalPrice: 44999,
        discount: "17% OFF",
        features: [
          "Dedicated DevOps Mentor",
          "High-frequency code reviews",
          "Private architecture review sessions",
          "Job placement guarantee process",
        ],
      },
    },
  },

  // --- ECE Domains ---
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    domain: "ECE Domains",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 132,
    description:
      "Learn microcontroller programming (8051, AVR, ARM Cortex) and embedded C programming. Master interfacing of sensors, actuators, and communication protocols.",
    whyChoose: [
      "Practical work with hardware development boards (Arduino, STM32).",
      "In-depth explanation of SPI, I2C, UART communication protocols.",
      "Prepares you for roles like Embedded Software Developer.",
    ],
    skills: [
      "Embedded C",
      "Microcontroller Interfacing",
      "UART/I2C/SPI Protocols",
      "STM32 Basics",
      "Real-Time Operating Systems (RTOS)",
      "Circuit Debugging",
    ],
    syllabus: [
      {
        title: "Module 1: Intro to Microcontrollers & Embedded C",
        topics: [
          "Microprocessors vs Microcontrollers",
          "Arduino IDE & C syntax",
          "GPIO configuration",
          "Interrupts and Timers",
        ],
      },
      {
        title: "Module 2: Peripherals Interfacing",
        topics: [
          "Interfacing LCD, Keypads, Sensors",
          "Analog to Digital Conversion (ADC)",
          "Pulse Width Modulation (PWM) for motors",
          "Serial communication: UART",
        ],
      },
    ],
    projects: [
      {
        title: "Smart Weather Station with Cloud Sync",
        description:
          "Build an ESP8266/Arduino based system collecting temperature and humidity, publishing data to an IoT cloud via MQTT.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3199,
        originalPrice: 4299,
        discount: "25% OFF",
        features: [
          "Hardware simulator guidance",
          "Recorded sessions",
          "Course source code",
          "Vaidik Certificate",
        ],
      },
      "mentor-led": {
        price: 5499,
        originalPrice: 7999,
        discount: "31% OFF",
        features: [
          "Live hardware explanation",
          "1-on-1 help with compilation errors",
          "Project guidance",
          "Certificate",
        ],
      },
      offline: {
        price: 16999,
        originalPrice: 20999,
        discount: "19% OFF",
        features: [
          "Hands-on physical hardware kits provided",
          "Full lab environment access",
          "Direct connection to Core-electronics firms",
          "Placement assurance",
        ],
      },
      "one-on-one": {
        price: 39999,
        originalPrice: 48999,
        discount: "18% OFF",
        features: [
          "Custom project blueprint development",
          "Dedicated Embedded Engineer guidance",
          "Premium internship referrals",
          "Career grooming",
        ],
      },
    },
  },
  {
    id: "robotics",
    title: "Robotics",
    domain: "ECE Domains",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 98,
    description:
      "Design, simulate, and build autonomous and semi-autonomous robots. Learn sensor fusion, kinematics, motor control, and ROS (Robot Operating System).",
    whyChoose: [
      "Hands-on assembly of mobile robotic bases.",
      "Introduction to modern Robot Operating System (ROS) concepts.",
      "Focus on autonomous path planning and obstacle avoidance.",
    ],
    skills: [
      "Robot Kinematics",
      "ROS (Robot Operating System)",
      "Sensor Fusion",
      "LiDAR & Ultrasonic",
      "Motor Drivers",
      "Autonomous Navigation",
    ],
    syllabus: [
      {
        title: "Module 1: Robotics Foundation & Kinematics",
        topics: [
          "Introduction to Robotics and Autonomy",
          "Forward & Inverse Kinematics",
          "Actuators: DC, Servo, Stepper motors",
        ],
      },
      {
        title: "Module 2: Sensory Systems & Control",
        topics: [
          "Analog & Digital sensors (Ultrasonic, IR, Gyroscopes)",
          "PID Controller implementation",
          "Microcontroller integration for real-time control",
        ],
      },
    ],
    projects: [
      {
        title: "Autonomous Obstacle Avoidance Rover",
        description:
          "Assemble a 4WD rover integrated with an ultrasonic sensor and servo motor to scan and map path trajectories dynamically.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3200,
        originalPrice: 4500,
        discount: "28% OFF",
        features: [
          "Simulation software tutorials",
          "Recorded code reviews",
          "Certificate",
        ],
      },
      "mentor-led": {
        price: 5900,
        originalPrice: 7900,
        discount: "25% OFF",
        features: [
          "Live online simulation checks",
          "Mentor debug assistance",
          "Interview Q&As",
          "Certificate",
        ],
      },
      offline: {
        price: 17900,
        originalPrice: 22000,
        discount: "18% OFF",
        features: [
          "Physical robotic labs & hardware kits",
          "In-house competitions",
          "Placement assistance",
          "Hardcopy certificate",
        ],
      },
      "one-on-one": {
        price: 42000,
        originalPrice: 49900,
        discount: "15% OFF",
        features: [
          "One-on-one robotic project development",
          "Direct help with ROS setup",
          "Elite career guidance",
          "Exclusive job network access",
        ],
      },
    },
  },

  // --- Mechanical Engineering ---
  {
    id: "autocad-mech",
    title: "AutoCAD (Mechanical)",
    domain: "Mechanical Engineering",
    duration: "8 Weeks",
    modulesCount: 6,
    difficulty: "Beginner",
    rating: 4.7,
    reviews: 142,
    description:
      "Learn drafting and design in AutoCAD for mechanical engineering. Understand orthographic projections, isometric designs, and assembly modeling.",
    whyChoose: [
      "Industry-focused designs conforming to ISO/ASME drawing standards.",
      "Comprehensive templates, blocks, and sheet set configurations.",
      "Prepares you for the Autodesk Certified Professional exam.",
    ],
    skills: [
      "2D Drafting",
      "Geometric Dimensioning & Tolerancing (GD&T)",
      "Isometric Drawings",
      "Assembly Layouts",
      "Plotting & Publishing",
    ],
    syllabus: [
      {
        title: "Module 1: AutoCAD Basics & UI",
        topics: [
          "Drawing commands, templates, and coordinates",
          "Object snaps, tracking, and modification tools",
          "Layers, colors, and line weight assignments",
        ],
      },
      {
        title: "Module 2: Dimensional & Annotation layouts",
        topics: [
          "Adding dimensions and tolerance levels",
          "Text, tables, and boundary hatches",
          "Blocks, block attributes, and dynamic blocks",
        ],
      },
    ],
    projects: [
      {
        title: "Gearbox Assembly Drafting",
        description:
          "Draft a complete 2D layout and detail components sheet of a spur gearbox with tolerances and BOM.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2499,
        originalPrice: 3499,
        discount: "28% OFF",
        features: [
          "Drafting templates library",
          "Recorded video guides",
          "Certificate",
        ],
      },
      "mentor-led": {
        price: 4499,
        originalPrice: 5999,
        discount: "25% OFF",
        features: [
          "Live online file reviews",
          "Weekly blueprint checking",
          "Q&A session",
          "Certificate",
        ],
      },
      offline: {
        price: 13999,
        originalPrice: 16999,
        discount: "17% OFF",
        features: [
          "Vaidik mechanical design labs",
          "Classroom sessions",
          "Local manufacturing company tie-ups",
          "Certificate",
        ],
      },
      "one-on-one": {
        price: 29999,
        originalPrice: 35999,
        discount: "16% OFF",
        features: [
          "Personal tutor sessions",
          "Custom design portfolio creation",
          "Priority job referral channels",
        ],
      },
    },
  },
  {
    id: "catia",
    title: "CATIA (V5/V6)",
    domain: "Mechanical Engineering",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 110,
    description:
      "Master parametric 3D modeling, assembly, drafting, and surface styling using CATIA. Crucial skill for aerospace and automotive sectors.",
    whyChoose: [
      "Advanced surfacing commands (Generative Shape Design).",
      "Hands-on practice with sheet metal design and digital mockups.",
      "Placement assistance in aerospace, automotive, and heavy machinery firms.",
    ],
    skills: [
      "Part Design",
      "Assembly Design",
      "Generative Shape Design",
      "Sheet Metal design",
      "Drafting & Exploded views",
    ],
    syllabus: [
      {
        title: "Module 1: Sketcher & Part Design",
        topics: [
          "Constrained sketches, pad, pocket, shaft commands",
          "Dress-up features: fillets, drafts, and patterns",
          "Boolean operations in CATIA Part Design",
        ],
      },
      {
        title: "Module 2: Surface Styling & Assembly",
        topics: [
          "Generative Shape Design: wireframe and surface commands",
          "Product assembly constraints and BOM generation",
          "Kinematics simulation basics",
        ],
      },
    ],
    projects: [
      {
        title: "Automotive Dashboard Console Surface Model",
        description:
          "Generate the complex surface profile of a car dashboard console using CATIA Generative Shape Design.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3499,
        originalPrice: 4999,
        discount: "30% OFF",
        features: [
          "SURFACE model templates",
          "Videos & resources",
          "Certificate",
        ],
      },
      "mentor-led": {
        price: 5999,
        originalPrice: 8999,
        discount: "33% OFF",
        features: [
          "Live screen share support",
          "Weekend sessions",
          "Dedicated design mentoring",
          "Certificate",
        ],
      },
      offline: {
        price: 16999,
        originalPrice: 20999,
        discount: "19% OFF",
        features: [
          "Design station system access",
          "CAD labs",
          "Interviews with OEMs",
          "Printed certificate",
        ],
      },
      "one-on-one": {
        price: 38999,
        originalPrice: 47999,
        discount: "18% OFF",
        features: [
          "Dedicated design engineer",
          "Personal dashboard project support",
          "Direct recruitment pipeline",
        ],
      },
    },
  },
  {
    id: "car-design",
    title: "Car Design",
    domain: "Mechanical Engineering",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.9,
    reviews: 136,
    description:
      "Explore the art and engineering of automotive styling and design. Covers sketch rendering, aerodynamic shaping, packaging, and Alias/SolidWorks surfacing.",
    whyChoose: [
      "Curriculum aligned with international transport design programs.",
      "Focus on both styling (aesthetics) and manufacturing parameters.",
      "Placement options in major automotive styling studios.",
    ],
    skills: [
      "Automotive Styling",
      "Clay Modeling Principles",
      "Class-A Surfacing",
      "Aerodynamics Packaging",
      "Rendering & Presentation",
    ],
    syllabus: [
      {
        title: "Module 1: Automotive Packaging & Sketching",
        topics: [
          "Ergonomics, wheelbases, height packages",
          "Perspective sketching and proportion rules",
          "Digital sketching on graphic tablets",
        ],
      },
    ],
    projects: [
      {
        title: "Electric Hypercar Body Styling Design",
        description:
          "Design and render the exterior body panels of a next-generation electric hypercar conforming to aerodynamics standards.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3999,
        originalPrice: 5999,
        discount: "33% OFF",
        features: ["Reference layouts", "Video tutorials", "Certificate"],
      },
      "mentor-led": {
        price: 6999,
        originalPrice: 9999,
        discount: "30% OFF",
        features: [
          "Live portfolio reviews",
          "Feedback from studio artists",
          "Certificate",
        ],
      },
      offline: {
        price: 18999,
        originalPrice: 23999,
        discount: "20% OFF",
        features: [
          "Design studio access",
          "Clay modeling workshops",
          "Direct placement references",
        ],
      },
      "one-on-one": {
        price: 44999,
        originalPrice: 54999,
        discount: "18% OFF",
        features: [
          "1-on-1 mentorship by industry design lead",
          "Custom portfolio guidance for master's programs",
        ],
      },
    },
  },
  {
    id: "ic-engine-design",
    title: "IC Engine Design",
    domain: "Mechanical Engineering",
    duration: "8 Weeks",
    modulesCount: 6,
    difficulty: "Intermediate",
    rating: 4.6,
    reviews: 84,
    description:
      "Analyze thermodynamic cycles, fuel induction, combustion dynamics, and compute key structural dimensions of IC engine components.",
    whyChoose: [
      "Includes software-based thermal analysis tutorials.",
      "Focus on electric-hybrid comparisons and emission reduction layouts.",
    ],
    skills: [
      "Thermodynamic Cycles",
      "Combustion Analysis",
      "Engine Component Sizing",
      "FEA Thermal Analysis",
      "Ansys Simulation",
    ],
    syllabus: [
      {
        title: "Module 1: Engine Cycles & Kinematics",
        topics: [
          "Otto, Diesel, and Dual cycles",
          "Piston displacement, velocity, and acceleration equations",
          "Combustion modeling principles",
        ],
      },
    ],
    projects: [
      {
        title: "Connecting Rod Structural Optimization",
        description:
          "Perform structural and thermal stress analysis of an aluminum connecting rod under peak combustion pressures using ANSYS.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2999,
        originalPrice: 3999,
        discount: "25% OFF",
        features: ["Thermal scripts", "Videos", "Certificate"],
      },
      "mentor-led": {
        price: 4999,
        originalPrice: 6999,
        discount: "28% OFF",
        features: ["Live simulation checks", "Doubt clearing", "Certificate"],
      },
      offline: {
        price: 14999,
        originalPrice: 18999,
        discount: "21% OFF",
        features: [
          "Lab testing rigs demonstration",
          "Workshops",
          "Placements support",
        ],
      },
      "one-on-one": {
        price: 34999,
        originalPrice: 42999,
        discount: "18% OFF",
        features: [
          "Dedicated analyst guidance",
          "Project simulation review",
          "Direct referral to automotive testing labs",
        ],
      },
    },
  },
  {
    id: "industrial-robotics-mech",
    title: "Industrial Robotics and Automation",
    domain: "Mechanical Engineering",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Advanced",
    rating: 4.8,
    reviews: 79,
    description:
      "Master automated production lines. Control robotic arms, program PLCs, configure SCADA interfaces, and design pick-and-place end-effectors.",
    whyChoose: [
      "Real-world PLC panel integration labs.",
      "Focus on industrial IoT (Industry 4.0) communication protocols.",
    ],
    skills: [
      "PLC Programming",
      "SCADA Systems",
      "Pneumatics & Hydraulics",
      "End Effector Design",
      "Factory I/O simulation",
    ],
    syllabus: [
      {
        title: "Module 1: Industrial Automation Foundation",
        topics: [
          "Industrial control systems, relays, contactors",
          "Ladder Logic programming rules",
          "Sensors in manufacturing lines",
        ],
      },
    ],
    projects: [
      {
        title: "Automated Sorting Conveyor Belt System",
        description:
          "Program a PLC logic sequence to sort metallic and non-metallic objects moving along a conveyor system with pneumatic sorters.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3400,
        originalPrice: 4900,
        discount: "30% OFF",
        features: ["Simulation software guides", "Videos", "Certificate"],
      },
      "mentor-led": {
        price: 5900,
        originalPrice: 8400,
        discount: "29% OFF",
        features: ["Live panel reviews", "Weekend sessions", "Certificate"],
      },
      offline: {
        price: 17500,
        originalPrice: 21500,
        discount: "18% OFF",
        features: [
          "Physical PLC hardware rigs",
          "Field visits",
          "Direct placements in automation firms",
        ],
      },
      "one-on-one": {
        price: 42000,
        originalPrice: 49900,
        discount: "15% OFF",
        features: [
          "Dedicated automation architect",
          "Custom factory layout design support",
          "Job networking",
        ],
      },
    },
  },

  // --- Civil Engineering ---
  {
    id: "autocad-civil",
    title: "AutoCAD (Civil)",
    domain: "Civil Engineering",
    duration: "8 Weeks",
    modulesCount: 6,
    difficulty: "Beginner",
    rating: 4.7,
    reviews: 156,
    description:
      "Draft precise floor plans, structural details, site elevations, and utility piping configurations for residential and commercial infrastructure.",
    whyChoose: [
      "Curriculum covers building bylaws and regulatory approval standards.",
      "Practical exercises on survey data imports and contour mapping.",
    ],
    skills: [
      "Architectural Drafting",
      "Building Bylaws",
      "Cross-Section Details",
      "Site Layouts",
      "Contour Mapping",
    ],
    syllabus: [
      {
        title: "Module 1: Civil Blueprint Essentials",
        topics: [
          "Units, scales, and templates for civil layouts",
          "Drafting 2D floor plans, wall sections, and doors",
          "Adding stairs, symbols, and annotations",
        ],
      },
    ],
    projects: [
      {
        title: "2-Story Residential Villa Drafting Model",
        description:
          "Create a municipal approval drawing for a residential villa including floor plan, sectional elevation, and site layout.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2390,
        originalPrice: 3200,
        discount: "25% OFF",
        features: ["Architectural symbol library", "Videos", "Certificate"],
      },
      "mentor-led": {
        price: 4390,
        originalPrice: 5900,
        discount: "25% OFF",
        features: [
          "Live online blueprint check",
          "Coaching sessions",
          "Certificate",
        ],
      },
      offline: {
        price: 13500,
        originalPrice: 16500,
        discount: "18% OFF",
        features: [
          "Lab workstations",
          "Field blueprint matching workshops",
          "Certificate",
        ],
      },
      "one-on-one": {
        price: 28900,
        originalPrice: 34900,
        discount: "17% OFF",
        features: [
          "Personal structural draftsman guidance",
          "Custom portfolio",
          "Job placement drives",
        ],
      },
    },
  },
  {
    id: "revit-structural-civil",
    title: "Construction Planning and Structural Analysis (REVIT)",
    domain: "Civil Engineering",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 122,
    description:
      "Learn Building Information Modeling (BIM) using Revit Structure. Model concrete and steel frameworks, perform coordination, and extract quantities.",
    whyChoose: [
      "Complete 3D-BIM workflows matching tier-1 developer expectations.",
      "Includes integration with structural analysis tools like Robot Structural Analysis.",
    ],
    skills: [
      "BIM Modeling",
      "Concrete Detailing",
      "Steel Connections",
      "Clash Detection",
      "Quantity Takeoffs (BOQ)",
    ],
    syllabus: [
      {
        title: "Module 1: Revit Interface & Modeling Elements",
        topics: [
          "BIM concepts, grids, and levels setup",
          "Modeling structural columns, beams, and foundations",
          "Wall components and slab integrations",
        ],
      },
    ],
    projects: [
      {
        title: "BIM Coordination model for Multi-use Complex",
        description:
          "Create a structurally unified Revit model for a 5-story commercial complex, resolving structural and architectural clashes.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3490,
        originalPrice: 4900,
        discount: "28% OFF",
        features: ["BIM family templates", "Recorded courses", "Certificate"],
      },
      "mentor-led": {
        price: 5990,
        originalPrice: 8490,
        discount: "29% OFF",
        features: [
          "Live model walkthroughs",
          "Clash debug coaching",
          "Certificate",
        ],
      },
      offline: {
        price: 16500,
        originalPrice: 19990,
        discount: "17% OFF",
        features: [
          "Design lab infrastructure",
          "Quantity estimation workshops",
          "Placements support",
        ],
      },
      "one-on-one": {
        price: 39500,
        originalPrice: 47990,
        discount: "17% OFF",
        features: [
          "Dedicated BIM coordinator tutor",
          "Industrial project files review",
          "Job referrals to major infrastructure firms",
        ],
      },
    },
  },

  // --- Aeronautical ---
  {
    id: "drone-technology",
    title: "Drone Technology",
    domain: "Aeronautical",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Intermediate",
    rating: 4.9,
    reviews: 115,
    description:
      "Explore quadcopter design, avionics, motor sizing, telemetry configurations, and flight controllers. Learn path planning and autonomous survey operations.",
    whyChoose: [
      "Curriculum aligned with DGCA (Directorate General of Civil Aviation) pilot basics.",
      "Practical assembly and calibration tutorials utilizing Mission Planner.",
    ],
    skills: [
      "UAV Kinematics",
      "Flight Controllers (Pixhawk)",
      "ESC & Motor sizing",
      "Telemetry & Radio",
      "LiPo Battery management",
      "Mission Planning",
    ],
    syllabus: [
      {
        title: "Module 1: UAV Fundamentals & Flight Mechanics",
        topics: [
          "Types of UAVs (Fixed wing, Multirotors)",
          "Aerodynamic forces, lift, drag, and thrust configurations",
          "Avionics stack outline",
        ],
      },
    ],
    projects: [
      {
        title: "Autonomous Waypoint Mapping Drone Assembly",
        description:
          "Design and simulate a quadcopter layout, calibrate it using Mission Planner, and configure autonomous waypoint mapping flights.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3200,
        originalPrice: 4200,
        discount: "23% OFF",
        features: ["Simulation tutorials", "Recorded sessions", "Certificate"],
      },
      "mentor-led": {
        price: 5490,
        originalPrice: 7900,
        discount: "30% OFF",
        features: [
          "Live online flight calibrations",
          "Telemetry coaching",
          "Certificate",
        ],
      },
      offline: {
        price: 16900,
        originalPrice: 20900,
        discount: "19% OFF",
        features: [
          "Physical drone building labs",
          "Field test flights under mentor monitoring",
          "Direct placements in drone startups",
        ],
      },
      "one-on-one": {
        price: 39900,
        originalPrice: 48900,
        discount: "18% OFF",
        features: [
          "Dedicated UAV engineer",
          "Autonomous search and rescue project support",
          "Placement fast-track",
        ],
      },
    },
  },

  // --- Management & Commerce ---
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    domain: "Management & Commerce",
    duration: "8 Weeks",
    modulesCount: 6,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 215,
    description:
      "Launch advertising campaigns. Master search engine optimization (SEO), social media marketing (SMM), Google Ads, email flows, and conversion metrics.",
    whyChoose: [
      "Includes live budgeting campaigns on Google & Meta ecosystems.",
      "Taught by certified agency marketing executives.",
    ],
    skills: [
      "SEO Strategies",
      "Pay-Per-Click (PPC)",
      "Meta Business Suite",
      "Google Analytics 4",
      "Email automation",
      "Copywriting",
    ],
    syllabus: [
      {
        title: "Module 1: Search Engine Optimization (SEO)",
        topics: [
          "On-page, Off-page, and Technical SEO",
          "Keyword research and competitive analysis",
          "SEO site audit reports",
        ],
      },
    ],
    projects: [
      {
        title: "Live Lead-Gen Campaign Execution",
        description:
          "Set up and manage a live Meta lead-generation ad campaign, optimizing metrics (CPC, CTR) within a given budget.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: ["Ad template sheets", "Recorded videos", "Certificate"],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live campaign reviews",
          "Digital agency case studies",
          "Certificate",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Classroom agency workshops",
          "Direct placement references",
          "Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Dedicated strategist mentorship",
          "Custom brand project scale support",
          "Placement support",
        ],
      },
    },
  },

  // --- Bio Domains ---
  {
    id: "bioinformatics",
    title: "Bioinformatics",
    domain: "Bio Domains",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 82,
    description:
      "Analyze genomic and proteomic sequence data. Utilize tools like BLAST, Clustal Omega, Python (Biopython), and molecular structure databases.",
    whyChoose: [
      "Curriculum covers machine learning applications in biological data.",
      "Focus on sequencing techniques and clinical annotations.",
    ],
    skills: [
      "Sequence Alignment",
      "Phylogenetic Trees",
      "Biopython Coding",
      "PDB structure analysis",
      "Genomic Annotation",
      "R for BioStats",
    ],
    syllabus: [
      {
        title: "Module 1: Molecular Biology Databases & Toolkits",
        topics: [
          "NCBI, UniProt, and PDB navigation",
          "Local vs Global alignments: Needleman-Wunsch & Smith-Waterman",
          "Using BLAST algorithms for search",
        ],
      },
    ],
    projects: [
      {
        title: "SARS-CoV-2 Variant Sequence Comparative Analysis",
        description:
          "Retrieve FASTA sequences, perform multiple alignment using Biopython, and plot a phylogenetic tree mapping variant mutations.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3100,
        originalPrice: 4200,
        discount: "26% OFF",
        features: ["Code templates in Python", "Videos", "Certificate"],
      },
      "mentor-led": {
        price: 5490,
        originalPrice: 7900,
        discount: "30% OFF",
        features: [
          "Live bioinformatics labs",
          "Weekly coding review",
          "Certificate",
        ],
      },
      offline: {
        price: 16500,
        originalPrice: 19900,
        discount: "17% OFF",
        features: [
          "Lab workstations access",
          "Biotech company drives",
          "Vaidik printed certificate",
        ],
      },
      "one-on-one": {
        price: 39000,
        originalPrice: 46900,
        discount: "17% OFF",
        features: [
          "Dedicated computational biologist",
          "Custom research paper project support",
          "Direct placement",
        ],
      },
    },
  },

  // --- Chemical Engineering ---
  {
    id: "aspen-plus",
    title: "ASPEN PLUS",
    domain: "Chemical Engineering",
    duration: "10 Weeks",
    modulesCount: 7,
    difficulty: "Advanced",
    rating: 4.9,
    reviews: 94,
    description:
      "Simulate chemical processes, model thermodynamics, design distillation columns, size heat exchangers, and execute process optimization configurations.",
    whyChoose: [
      "Focuses on industrial refinery flowcharts and thermal configurations.",
      "Practical case studies on carbon capture and petrochemical separations.",
    ],
    skills: [
      "Process Flowsheets",
      "Thermodynamic Models",
      "Distillation Columns",
      "Heat Exchangers sizing",
      "Sensitivity Analysis",
      "Refinery Modeling",
    ],
    syllabus: [
      {
        title: "Module 1: Aspen Interface & Flowsheet Setup",
        topics: [
          "Selecting components and property methods",
          "Setting up mass/energy streams",
          "Flash separator simulation",
        ],
      },
    ],
    projects: [
      {
        title: "Methanol Production Refinery Optimization Flowsheet",
        description:
          "Build a complete Aspen flowsheet modeling synthesis gas conversion to high-purity methanol with recycle streams.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 3500,
        originalPrice: 4900,
        discount: "28% OFF",
        features: [
          "Refinery flowsheet files",
          "Recorded guides",
          "Certificate",
        ],
      },
      "mentor-led": {
        price: 5900,
        originalPrice: 8900,
        discount: "33% OFF",
        features: [
          "Live flowsheet reviews",
          "Troubleshooting converge errors",
          "Certificate",
        ],
      },
      offline: {
        price: 16900,
        originalPrice: 20900,
        discount: "19% OFF",
        features: [
          "Design station licenses",
          "Chemical design firm interviews",
          "Certificate",
        ],
      },
      "one-on-one": {
        price: 41000,
        originalPrice: 49900,
        discount: "17% OFF",
        features: [
          "Dedicated chemical engineer",
          "Custom industrial project simulation",
          "Direct placement assistance",
        ],
      },
    },
  },
];

// Helper functions to auto-generate simple course objects for all others in user details so they are accessible and clickable
const allOtherCoursesData = [
  // CSE / IT
  // ECE
  // Mechanical
  {
    id: "autocad-mech-other",
    title: "AutoCAD",
    domain: "Mechanical Engineering",
  },
  {
    id: "industrial-robotics-automation",
    title: "INDUSTRIAL ROBOTICS AND AUTOMATION",
    domain: "Mechanical Engineering",
  },
  // Civil
  // Aeronautical
  // Management
  { id: "finance", title: "FINANCE", domain: "Management & Commerce" },
  {
    id: "hr-management",
    title: "HR Management",
    domain: "Management & Commerce",
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    domain: "Management & Commerce",
  },
  {
    id: "stock-marketing",
    title: "STOCK MARKETING",
    domain: "Management & Commerce",
  },
  { id: "sap-fico", title: "SAP FICO", domain: "Management & Commerce" },
  {
    id: "supply-chain-management",
    title: "SUPPLY CHAIN MANAGEMENT",
    domain: "Management & Commerce",
  },
  { id: "salesforce", title: "SALES FORCE", domain: "Management & Commerce" },
  { id: "web3", title: "Web 3.0", domain: "Management & Commerce" },
  {
    id: "investment-banking",
    title: "Investment Banking",
    domain: "Management & Commerce",
  },
  {
    id: "acca-f4",
    title: "ACCA F4 (BUSINESS & CORPORATE LAW)",
    domain: "Management & Commerce",
  },
  { id: "servicenow", title: "Service Now", domain: "Management & Commerce" },
  {
    id: "advance-excel",
    title: "ADVANCE EXCEL",
    domain: "Management & Commerce",
  },
  { id: "power-bi", title: "POWER BI", domain: "Management & Commerce" },
  {
    id: "product-management",
    title: "PRODUCT MANAGEMENT",
    domain: "Management & Commerce",
  },
  {
    id: "entrepreneurship",
    title: "ENTREPRENEURSHIP",
    domain: "Management & Commerce",
  },
  // Bio
  { id: "bio-statistics", title: "BIO Statistics", domain: "Bio Domains" },
  { id: "microbiology", title: "Microbiology", domain: "Bio Domains" },
  {
    id: "molecular-biology",
    title: "Molecular biology",
    domain: "Bio Domains",
  },
  {
    id: "nano-science-tech",
    title: "NANO SCIENCE AND TECHNOLOGY",
    domain: "Bio Domains",
  },
  {
    id: "genetic-engineering",
    title: "GENETIC ENGINEERING",
    domain: "Bio Domains",
  },
  { id: "clinical-sas", title: "CLINICAL SAS", domain: "Bio Domains" },
  // Others
  {
    id: "petroleum-engineering",
    title: "Petroleum Engineering",
    domain: "Others",
  },
  {
    id: "career-placement-interview-mastery",
    title: "CAREER PLACEMENT & INTERVIEW MASTERY",
    domain: "Others",
  },
  { id: "matlab", title: "MATLAB", domain: "Others" },
  { id: "psychology", title: "Psychology", domain: "Others" },
];

// Combine the static detailed courses with the auto-generated boilerplate for others
export const allCourses: Course[] = [...courses];

allOtherCoursesData.forEach((item) => {
  // Check if course already exists
  if (
    allCourses.some(
      (c) =>
        c.id === item.id || c.title.toLowerCase() === item.title.toLowerCase(),
    )
  ) {
    return;
  }

  allCourses.push({
    id: item.id,
    title: item.title,
    domain: item.domain,
    duration: "8 Weeks",
    modulesCount: 5,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 75,
    description: `Master key principles and applications in ${item.title}. This program provides hands-on modules and projects aligned to industry benchmarks.`,
    whyChoose: [
      "Rigorous, industry-oriented module designs.",
      "Live interactive support from professional mentors.",
      "Real-world application mapping and career placement guidelines.",
    ],
    skills: [
      item.title,
      "Core Theory",
      "Practical Projects",
      "Troubleshooting",
    ],
    syllabus: [
      {
        title: "Module 1: Fundamentals Overview",
        topics: [
          `Introduction to ${item.title}`,
          "Historical background & essential standards",
          "Core workflows and terminology",
        ],
      },
      {
        title: "Module 2: Practical Implementation",
        topics: [
          "Practical setup and tool execution",
          "Basic project mapping",
          "Common errors & validation",
        ],
      },
    ],
    projects: [
      {
        title: `${item.title} Capstone Case Study`,
        description: `Apply the theoretical framework and software/tool concepts to design a comprehensive prototype model.`,
      },
    ],
    pricing: {
      "self-paced": {
        price: 2999,
        originalPrice: 3999,
        discount: "25% OFF",
        features: [
          "Access to all study materials",
          "Self-study exercises",
          "Community forum",
          "Vaidik Certificate",
        ],
      },
      "mentor-led": {
        price: 4999,
        originalPrice: 6999,
        discount: "28% OFF",
        features: [
          "Live webinar access",
          "Doubt-clearing sessions",
          "Interview guides",
          "Vaidik Certificate",
        ],
      },
      offline: {
        price: 14999,
        originalPrice: 17999,
        discount: "16% OFF",
        features: [
          "Direct physical lab work",
          "Classroom interaction",
          "Job referrals",
          "Printed copy of certificate",
        ],
      },
      "one-on-one": {
        price: 34999,
        originalPrice: 42999,
        discount: "18% OFF",
        features: [
          "1-on-1 private tuition",
          "Custom project development",
          "Placement fast-track priority",
        ],
      },
    },
  });
});
