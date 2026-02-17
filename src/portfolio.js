const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/man2k1',
  title: 'Mj.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Manoj S',
  role: 'Backend Software Engineer',
  picture: 'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/me.jpeg',

  description:
    'I\'m a Backend Software Engineer with hands-on experience building large-scale SaaS systems that are reliable under production workloads. My work spans designing RESTful APIs, multi-threaded workflows, and Kafka-driven async processing — all with a focus on performance and reliability.I care deeply about clean, maintainable code and enjoy working closely with cross-functional teams to ship end-to-end features the right way.',
  resume: 'https://drive.google.com/file/d/1qWdQxtgZaKR0Z7brR4sjTszXdUBdPLPU/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/manoj-saravanan21/',
    github: 'https://github.com/man2k1',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // images: array of image URLs/filenames — first image is shown on card, all shown in hover modal
  {
    name: 'Draftly',
    description:
      'A real-time Markdown editor that lets multiple team users write and edit technical documentation simultaneously — without stepping on each other\'s changes. Built using custom Operational Transformation (OT) to handle conflict resolution seamlessly.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'Redis', 'MQ', 'React', 'Tailwind CSS', 'Git', 'Docker'],
    sourceCode: 'https://github.com/man2k1/draftly',
    livePreview: 'https://drive.google.com/file/d/1vgIE_f_TPjddi0a2fKDGeWJB8Z-5ntU2/view',
    images: [
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/home.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/signup_form.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/documents.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/share_modal.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/collab.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/editor.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/editor2.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/draftly/about.png'
    ],
  },
  {
    name: 'SIMS',
    description:
      'A full-stack web application built for KPR Institute to digitize and manage 4 years of academic records — completely replacing a legacy manual booklet system. Deployed on AWS EC2, the platform features granular Role-Based Access Control (RBAC) across Admin, Faculty, and Student roles, a request-based update workflow, CGPA trend graphs, report generation, automated student onboarding through CSV bulk-processing, and more.',
    stack: ['Java', 'Servlets', 'MySQL', 'Hibernate', 'Javascript', 'JQuery', 'HTML', 'CSS', 'Git', 'AWS'],
    sourceCode: 'https://github.com/man2k1/fyp-sims',
    livePreview: 'http://sims-manager.herokuapp.com/login',
    images: [
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/student_home.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/login.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/student_book.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/student_sem.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_approval_view.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_student_list.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_import_students.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_report_gen.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_book.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/mentor_sem.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/sims/admin_subjects.png'
    ],
  },
  {
    name: 'Sales Management',
    description:
      'Built to replace manual record-keeping for an electronics service and sales business, this on-premise application gives admins full control over customer service requests, sales records, and review management — consolidating day-to-day operations into a single, structured platform.',
    stack: ['Java', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'Javascript', 'AJAX'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    images: [
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_tv_view.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_tv_view2.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_tv.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_review.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_cart.png',
      'https://raw.githubusercontent.com/man2k1/assets/refs/heads/main/projects/ecom/ecom_brand.png'
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  // format: ['Skill Name', 'devicon-class'] or ['Skill Name', 'code'] for default icon
  ['Advanced Java', 'devicon-java-plain colored'],
  ['Object-Oriented Programming', 'code'],
  ['Design Patterns', 'code'],
  ['Spring Framework', 'devicon-spring-original colored'],
  ['PostgreSQL', 'devicon-postgresql-plain colored'],
  ['Hibernate ORM', 'devicon-hibernate-plain colored'],
  ['Microservice Architecture', 'code'],
  ['Kafka', 'devicon-apachekafka-original'],
  ['Event-Driven Design', 'code'],
  ['HTML', 'devicon-html5-plain colored'],
  ['CSS', 'devicon-css3-plain colored'],
  ['JavaScript', 'devicon-javascript-plain colored'],
  ['React', 'devicon-react-original colored'],
  ['Git', 'devicon-git-plain colored'],
  ['CI/CD', 'code'],
  ['JUnit', 'devicon-junit-plain colored'],
]
const experience = [
  // experience entries — if empty, Experience section won't show up
  // logo: URL to company logo (clickable, links to company site)
  {
    company: 'Zoho Corporation - ManageEngine',
    logo: 'https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg',
    url: 'https://www.manageengine.com/products/desktop-central/?pos=MEhome&loc=ProdMenu&cat=UEMS&tempB',
    role: 'Backend Software Engineer',
    period: 'May 2022 – Present',
    contributions: [
      'Engineered a distributed microservice for secure P2P network formation with file chunk distribution and mTLS-based zero-trust authentication across nodes.',
      'Optimized Kafka and Redis data pipelines processing 100M+ daily events, achieving a 60% reduction in server load.',
      'Redesigned a manual agent-client architecture into a high-availability automated system, reducing failover downtime to under 5 seconds.',
      'Led FIPS-compliance migration upgrading legacy MD5 to SHA-256 and introducing GPG signature validation for file authenticity.',
      'Orchestrated migration of 200K+ production records via a CPU-monitored CRON job, ensuring zero performance impact on live systems.'
    ],
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manoj.s2k1@mail.com',
}

export { header, about, projects, skills, experience, contact }
