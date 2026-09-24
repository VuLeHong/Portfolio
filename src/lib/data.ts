export const profile = {
  name: "Lê Hồng Vũ",
  role: "Data Engineer",
  image: "/profile.jpg",
  tagline: "I turn raw data into reliable, analytics-ready pipelines.",
  bio: "I'm Lê Hồng Vũ, a Computer Science graduate from the joint UIT–BCU program in Ho Chi Minh City and an aspiring Data Engineer. I have hands-on experience building end-to-end data pipelines using Azure, GCP, and Microsoft Fabric, from data ingestion to transformation and analytics-ready datasets. I'm passionate about cloud platforms, data architectures, and building practical data solutions.",
  location: "Ho Chi Minh City, Vietnam",
  email: "vulehong0406@gmail.com",
  phone: "(+84) 915176876",
  availability: "Open to fresher and junior data roles",
  social: {
    github: "https://github.com/VuLeHong",
    linkedin: "https://www.linkedin.com/in/vu-le-hong/",
  },
  skillGroups: [
    {
      title: "Data Engineering & Cloud",
      skills: [
        "SQL",
        "Python",
        "Apache Spark",
        "Airflow",
        "Kafka",
        "dbt",
        "Microsoft Fabric",
        "Azure Services",
        "GCP Services",
        "BigQuery",
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Node.js",
        "NestJS",
        "Docker",
        "Selenium",
        "Beautiful Soup",
        "PostgreSQL",
        "MongoDB",
      ],
    },
  ],
};

export const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Norrin",
    period: "April 2026 — June 2026",
    highlights: [
      "Learned and applied Microsoft Azure and Microsoft Fabric services for cloud data engineering, and successfully passed the Microsoft AZ-900 and DP-700 certifications.",
      "Collaborated with a teammate to build an end-to-end Medallion pipeline in Microsoft Fabric, covering data ingestion, Bronze–Silver–Gold data transformation, and curated datasets for analytics.",
      "Developed an integration flow that triggered data processing from SharePoint events and returned processed data through an API endpoint when requested by users.",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "WATA Software",
    period: "December 2025 — March 2026",
    highlights: [
      "Designed a GCP data platform using Medallion Architecture, with three ingestion pipelines: full batch load and CDC from PostgreSQL (47 tables), and manual CSV/Excel uploads, landing raw data in GCS (Bronze layer).",
      "Built Spark ETL jobs on Dataproc to clean, join, and transform raw data, then loaded curated datasets into BigQuery.",
      "Orchestrated batch and incremental workflows using Cloud Composer (Airflow) and implemented dbt models (staging, fact, dimension) with data validation tests.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Lumination",
    period: "March 2025 — June 2025",
    highlights: [
      "Built a full-stack internal tool using NestJS and Next.js to automate file renaming, organization, and bulk editing for legal, secretarial, and accounting teams.",
      "Developed a data crawling pipeline using Selenium, Beautiful Soup, AWS EC2, and PM2, producing up to 2GB of structured JSON data from dynamic websites.",
      "Collaborated with a senior front-end developer and the design team to develop APIs for a homework management application using NestJS and MongoDB, supporting teacher assignment creation, student management, and interactive assignment features for students.",
    ],
  },
];

export const education = [
  {
    school: "University of Information Technology (UIT)",
    degree: "Computer Science",
    detail: "GPA: 84.97/100",
    period: "2023 — Now",
  },
  {
    school: "IELTS Academic",
    degree: "Certificate",
    detail: "6.0 Overall — Issued Feb 2023",
    period: "Feb 2023",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    href: "https://learn.microsoft.com/en-us/users/lehongvu-3668/credentials/16c8ff027dba9b72",
  },
  {
    title: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    href: "https://learn.microsoft.com/en-us/users/lehongvu-3668/credentials/27dd9caa37dade8d",
  },
];

export const projects = [
  {
    slug: "ecommerce-lakehouse",
    title: "E-commerce Analytics and Recommendation Lakehouse",
    description:
      "This project implements a unified Lakehouse architecture for e-commerce analytics and real-time recommendation processing. The system integrates batch data processing and streaming event processing within the same platform, allowing historical analytics, recommendation model training, dashboard visualization, and real-time recommendation reranking to operate on shared Lakehouse data layers.",
    highlights: [
      "Designed a unified Lakehouse architecture for e-commerce analytics and recommendations, using Medallion Architecture to organize raw data, cleaned data, and analytics-ready datasets across Bronze, Silver, and Gold layers.",
      "Built batch and streaming data pipelines using Apache Spark for data transformation, Kafka for real-time event ingestion, Airflow for workflow orchestration, and MinIO with Apache Iceberg and Nessie for Lakehouse storage and table version management.",
      "Used Dremio to query Gold-layer datasets and support dashboard analytics, while Spark MLlib ALS was used to train recommendation models and re-rank product recommendations from streaming user behavior events.",
    ],
    stack: ["Spark", "Kafka", "Airflow", "Iceberg", "Dremio", "MLlib"],
    href: "https://github.com/VuLeHong",
  },
  {
    slug: "path-of-the-lotus-mind",
    title: "Path of the Lotus Mind",
    description:
      "An Android productivity app that turns focused study or work sessions into a cultivation journey — users start a focus session, earn EXP, collect rewards, and progress through five cultivation realms. Built with Kotlin and Jetpack Compose.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Navigation Compose"],
    href: "https://github.com/VuLeHong/Path-of-the-Lotus-Mind",
  },
];