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
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/VuLeHong",
    linkedin: "https://www.linkedin.com/in/vu-le-hong/",
  },
  skills: [
    "Cloud Services (Azure, GCP)",
    "Airflow",
    "Spark",
    "SQL",
    "Typescript",
  ],
};

export const experiences = [
  {
    role: "Data Engineer",
    company: "Norrin",
    period: "April 2026 — June 2026",
    highlights: [
      "Learned and applied Microsoft Azure and Microsoft Fabric services for cloud data engineering, and successfully passed the Microsoft AZ-900 and DP-700 certifications.",
      "Collaborated with a teammate to build an end-to-end Medallion pipeline in Microsoft Fabric, covering data ingestion, Bronze–Silver–Gold data transformation, and curated datasets for analytics.",
      "Developed an integration flow that triggered data processing from SharePoint events and returned processed data through an API endpoint when requested by users.",
    ],
  },
  {
    role: "Data Engineer",
    company: "WATA Software",
    period: "December 2025 — March 2026",
    highlights: [
      "Designed a GCP data platform using Medallion Architecture, with three ingestion pipelines: full batch load and CDC from PostgreSQL (47 tables), and manual CSV/Excel uploads, landing raw data in GCS (Bronze layer).",
      "Built Spark ETL jobs on Dataproc to clean, join, and transform raw data, then loaded curated datasets into BigQuery.",
      "Orchestrated batch and incremental workflows using Cloud Composer (Airflow) and implemented dbt models (staging, fact, dimension) with data validation tests.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lumination",
    period: "March 2025 — June 2025",
    highlights: [
      "Built a full-stack internal tool using NestJS and Next.js to automate file renaming, organization, and bulk editing for legal, secretarial, and accounting teams.",
      "Developed a data crawling pipeline using Selenium, Beautiful Soup, AWS EC2, and PM2, producing up to 2GB of structured JSON data from dynamic websites.",
      "Collaborated with a senior front-end developer and the design team to develop APIs for a homework management application using NestJS and MongoDB, supporting teacher assignment creation, student management, and interactive assignment features for students.",
    ],
  },
];

export type Certification = { title: string; href?: string };

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    href: "https://learn.microsoft.com/en-us/users/lehongvu-3668/credentials/16c8ff027dba9b72",
  },
  {
    title: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    href: "https://learn.microsoft.com/en-us/users/lehongvu-3668/credentials/27dd9caa37dade8d",
  },
  {
    title: "IELTS Academic — Overall 6.0",
  },
];

export const projects = [
  {
    title: "E-commerce Analytics and Recommendation Lakehouse",
    image: "/lakehouse-architecture.png",
    description:
      "This project implements a unified Lakehouse architecture for e-commerce analytics and real-time recommendation processing. The system integrates batch data processing and streaming event processing within the same platform, allowing historical analytics, recommendation model training, dashboard visualization, and real-time recommendation reranking to operate on shared Lakehouse data layers.",
    stack: ["Spark", "Kafka", "Airflow", "Iceberg", "Dremio", "MLflow", "Superset", "Minio", "Nessie"],
    href: "https://github.com/VuLeHong/E-commerce-lakehouse",
  },
  {
    title: "Path of the Lotus Mind",
    image: "/lotus/1.png",
    description:
      "An Android productivity app that turns focused study or work sessions into a cultivation journey — users start a focus session, earn EXP, collect rewards, and progress through five cultivation realms. Built with Kotlin and Jetpack Compose.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Navigation Compose"],
    href: "https://github.com/VuLeHong/Path-of-the-Lotus-Mind",
  },
];