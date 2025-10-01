import './style.css'

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
}

function createProject(project: Project): string {
  const demoLink = project.demo 
    ? `<a href="${project.demo}" target="_blank" class="project-link" title="Live Demo">
         Demo
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
         </svg>
       </a>`
    : '';
  
  return `
    <div class="project-row">
      <div class="project-header">
        <h3>${project.name}</h3>
      </div>
      <div class="tech-tags">
        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link" title="GitHub Repository">
            GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
          ${demoLink}
     </div>
    </div>
  `;
}

const projects: Project[] = [
  {
    name: 'Pixels',
    description: 'A distributed image processing service built for scale. Handles dozens of concurrent image uploads, transformations, and storage with a focus on reliability and performance. Deployed on a homelab Kubernetes cluster with automatic scaling and health monitoring. Features full ci/cd with a focus on developer experience.',
    technologies: ['Go', 'Postgres', 'Kubernetes'],
    github: 'https://github.com/Pokemonpower92/pixels',
  },
  {
    name: 'Data Ingester',
    description: 'An async api for ingesting SEC EDGAR data for tracking corporate stock activity. Processes gigabytes of data concurrently within rate-limited constraints.',
    technologies: ['Python', 'MySQL', 'Celery', 'Redis'],
    github: 'https://github.com/Pokemonpower92/data_ingester',
  },
  {
    name: 'Homelab',
    description: 'My homelab. Proxmox hypervisor running a k3s cluster. Serves custom github runners and self-hosted applications and APIs',
    technologies: ['Kubernetes', 'Ansible', 'Docker'],
    github: 'https://github.com/Pokemonpower92/homelab',
  },
  {
    name: 'PiDration',
    description: 'An embedded soil analytics platform. Designed for a raspberry pi server and arduino nano slaves. Performs real-time soil analytics so my plants will stop dying.',
    technologies: ['C++', 'Python', 'SQLite', 'Raspberry Pi'],
    github: 'https://github.com/Pokemonpower92/PiDration',
  },

];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="https://www.linkedin.com/in/john-carmack-307525158/">LinkedIn</a>
      <a href="https://github.com/pokemonpower92" target="_blank">GitHub</a>
    </nav>
  </header>

  <main>
    <img src="profile.png" alt="mimikyu" class="profile-pic">
    <section id="about" class="blurb">
      <div class="blurb-text">
        <h1>Hi, I'm John Carmack</h1>
        <p>
          I'm a math and physics nerd turned programmer and I'm thankful every day for that chance encounter with a c++ reference text.
        </p>
        </br>
        <p>
          I'm passionate about building extensible, maintainable software and infrastructure. I focus on backend systems and ETL pipelines but I'm excited to work in pretty much every domain in software.
        </p>
        <br/>
        <p>
          My favorite thing about software is that it's a team sport. I'd love to build cool things with you :-)
        </p>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="projects-list">
        ${projects.map(createProject).join('')}
      </div>
    </section>
  </main>

  <footer>
    <p>© 2025 John Carmack</p>
  </footer>
`;
