const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Yuri Shushanskyi',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yurii Shushanskyi',
  role: 'Full Stack Engineer',
  description:
  `Software engineer with 5 years of experience crafting web applications. I transform complex business requirements into elegant code solutions, primarily using Next.js, React and Node.js ecosystems. 
  Currently engineering vehicle data solutions at CarsXE, where I build web platform and maintain large-scale APIs that process hundred thousands of automotive records. In my free time, I explore emerging technologies and mentor junior developers.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/yurii-shushanskyi-399916160/',
    github: 'https://github.com/Dazzoo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yuraks46@gmail.com',
}

export { about, contact, header, projects, skills }

