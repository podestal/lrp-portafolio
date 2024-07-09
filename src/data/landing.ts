export const languages = [
    {lan: 'ES'},
    {lan: 'EN'},
]

export interface Tag {
    title: string,
    styles: string,
}

export const navData = [
    {
        titleEs: 'Inicio',
        titleEn: 'Home',
        route: '/',
    },
    {
        titleEs: 'Proyectos',
        titleEn: 'Projects',
        route: '/projects',
    },
    {
        titleEs: 'Curriculum',
        titleEn: 'Resume',
        route: '/resume',
    },
]

export const heroData = {
    'ES': {
        title: 'Desarrollador Full Stack',
        description: 'Desarrollo aplicaciones web completas, desde el diseño hasta la implementación y optimización.',
    },
    'EN': {
        title: 'Full Stack Developer',
        description: 'I develop full stack web applications, from design to implementation and optimization.'
    }
}

const tagsFrontend = [
    {
        title: 'HTML',
        styles: 'text-slate-50 bg-gradient-to-r from-orange-600 to-orange-400'
    },
    {
        title: 'CSS',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-800 to-sky-400',
    },
    {
        title: 'TS',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-950 to-blue-700',
    },
    {
        title: 'React',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-500 to-blue-300',
    },
    {
        title: 'Tailwind',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-800 to-sky-400',
    },
]

const tagsBackend = [
    {
        title: 'Python',
        styles: 'text-slate-50 bg-gradient-to-r from-green-950 to-green-800'
    },
    {
        title: 'Django',
        styles: 'text-slate-50 bg-gradient-to-r from-green-950 to-green-800'
    },
    {
        title: 'MySQL',
        styles: 'text-slate-50 bg-gradient-to-r from-sky-700 to-orange-600'
    },
    {
        title: 'PostgreSQL',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-800 to-sky-400'
    },
    {
        title: 'Pytest',
        styles: 'text-slate-50 bg-gradient-to-r from-blue-500 via-green-500 to-red-500'
    },
    {
        title: 'Git',
        styles: 'text-slate-50 bg-black'
    },   
]

const tagsDevops = [
    {
        title: 'Linux',
        styles: 'text-black bg-slate-50'
    },
    {
        title: 'Nginx',
        styles: 'text-slate-50 bg-gradient-to-r from-green-950 to-green-800'
    },
    {
        title: 'AWS',
        styles: 'text-amber-500 bg-slate-50'
    },
    {
        title: 'Docker',
        styles: 'text-slate-50 bg-gradient-to-r from-sky-700 to-sky-400'
    },
    {
        title: 'GH Actions',
        styles: 'text-slate-50 bg-black'
    },
]

export const skills = {
    'ES': 
    {
        title: 'Habilidades',
        data: [
            {
                title: 'Frontend',
                description: 'Creación y mantenimiento de la parte visual e interactiva de sitios web y aplicaciones. optimización del rendimiento, accesibilidad y diseño responsivo, implementación de interfaces de usuario eficientes y atractivas. Por último desarrollo de funcionalidades complejas y mejora continuamente la experiencia del usuario.',
                styles: 'text-right self-end',
                tags: tagsFrontend
            },
            {
                title: 'Backend',
                description: 'Construcción y mantenimiento de la lógica del servidor, bases de datos y la infraestructura de aplicaciones web. Gestión de bases de datos, seguridad, y optimización del rendimiento del servidor. Asegurar que las aplicaciones sean escalables, seguras y eficientes.',
                styles: 'text-left self-start',
                tags: tagsBackend
            },
            {
                title: 'Devops',
                description: 'Trabajar en la automatización, integración continua, despliegue de aplicaciones y gestión de infraestructura como código.',
                styles: 'text-right self-end',
                tags: tagsDevops
            },
    ]},
    'EN': {
        title: 'Skills',
        data: [
        {
            title: 'Frontend',
            description: 'Creation and maintenance of the visual and interactive elements of websites and applications. Performance optimization, ensuring accessibility, and implementing responsive design. Lastly development of complex functionalities and continuously enhance the user experience.',
            styles: 'text-right self-end',
            tags: tagsFrontend
        },
        {
            title: 'Backend',
            description: 'Building and maintaining server logic, databases, and the infrastructure of web applications. Management of databases, security, and optimization of server performance. Ensure that applications are scalable, secure, and efficient.',
            styles: 'text-left self-start',
            tags: tagsBackend
        },
        {
            title: 'Devops',
            description: 'Work on automation, continuous integration, application deployment, and infrastructure as code management.',
            styles: 'text-right self-end',
            tags: tagsDevops
        },
    ]}
}

export const contactData = {
    'ES': {
        title: 'Envíame un mensaje',
        subTitle: 'Alguna pregunta o propuesta?. No dudes en contactarme',
        nameLabel: 'Tu Nombre',
        namePlaceHolder: 'Escribe tu nombre ...',
        emailLabel: 'Tu Correo Electrónico',
        emailPlaceHolder: 'Escribe tu correo electrónico ...',
        messageLabel: 'Tu Mensage',
        messagePlaceHolder: 'Hola Luis mi nombre es X, necesito una aplicación web para la empresa X, contáctame a la brevedad a este número X para discutirlo ...',
        buttonText: 'Enviar',
    },
    'EN': {
        title: 'Send me a message',
        subTitle: 'Any question or proposal?. Just send me a message',
        nameLabel: 'Your Name',
        namePlaceHolder: 'Write your name ...',
        emailLabel: 'Your Email',
        emailPlaceHolder: 'Write your email address ...',
        messageLabel: 'Your Message',
        messagePlaceHolder: 'Hi Luis my name is x, I need a web app for the companny X, reach out to me as soon as possible, my cellphone is X ...',
        buttonText: 'Send',
    },
}

export const aboutData = {
    'ES': {
        title: 'Soy Luis Alberto Rodríguez',
        aboutTitle: 'En Estos Años',
        description: 'Comencé mi carrera como desarrollador de software freelance, creando sitios web utilizando React, TypeScript, HTML y CSS. Mi pasión por el desarrollo me llevó a ampliar mis habilidades a través de la Amazon Technical Academy, donde aprendí desarrollo backend con Java y microservicios en AWS. Durante el último año, he estado trabajando en Axios Informática como desarrollador full stack, utilizando mi experiencia para construir y mantener aplicaciones web integrales. Mi trayectoria me ha dotado de un conjunto de habilidades diversas en tecnologías tanto de frontend como de backend, permitiéndome contribuir eficazmente a varios proyectos y equipos.',
    },
    'EN': {
        title: 'I am Luis Alberto Rodriguez',
        aboutTitle: 'Over the Years',
        description: 'I started my career as a freelance software developer, creating websites using React, TypeScript, HTML, and CSS. My passion for development led me to further my skills through the Amazon Technical Academy, where I learned backend development with Java and microservices on AWS. For the past year, I have been working at Axios Informática as a full stack developer, utilizing my expertise to build and maintain comprehensive web applications. My journey has equipped me with a diverse skill set in both frontend and backend technologies, enabling me to contribute effectively to various projects and teams.',
    }
}

export const devData = {
    'ES': {
        title: 'Trabajo',
        projects: 'Proyectos',
        experience: 'Experiencia',
        buttonText: 'Conoce Más',
    },
    'EN': {
        title: 'Work',
        projects: 'Projects',
        experience: 'Experience',
        buttonText: 'Learn More',
    }
}