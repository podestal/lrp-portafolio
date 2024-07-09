export interface Tag {
    title: string,
    styles: string,
}

export const heroData = {
    title: {
        titleEs: 'Desarrollador Full Stack',
        titleEn: 'Full Stack Developer',
    },
    description: {
        descriptionEs: 'Desarrollo aplicaciones web completas, desde el diseño hasta la implementación y optimización.',
        descriptionEn: 'I develop full stack web applications, from design to implementation and optimization.'
    }
}

export const skills = [
    {
        title: {
            titleEs: 'Frontend',
            titleEn: 'Frontend',
        },
        description: {
            descriptionEs: 'Creación y mantenimiento de la parte visual e interactiva de sitios web y aplicaciones. optimización del rendimiento, accesibilidad y diseño responsivo, implementación de interfaces de usuario eficientes y atractivas. Por último desarrollo de funcionalidades complejas y mejora continuamente la experiencia del usuario.',
            descriptionEn: 'Creation and maintenance of the visual and interactive elements of websites and applications. Performance optimization, ensuring accessibility, and implementing responsive design. Lastly development of complex functionalities and continuously enhance the user experience.'
        },
        styles: 'text-right self-end',
        tags: [
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
    },
    {
        title: {
            titleEs: 'Backend',
            titleEn: 'Backend',
        },
        description: {
            descriptionEs: 'Construcción y mantenimiento de la lógica del servidor, bases de datos y la infraestructura de aplicaciones web. Gestión de bases de datos, seguridad, y optimización del rendimiento del servidor. Asegurar que las aplicaciones sean escalables, seguras y eficientes.',
            descriptionEn: 'Building and maintaining server logic, databases, and the infrastructure of web applications. Management of databases, security, and optimization of server performance. Ensure that applications are scalable, secure, and efficient.'
        },
        styles: 'text-left self-start',
        tags: [
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
            
        ],
    },
    {
        title: {
            titleEs: 'DevOps',
            titleEn: 'DevOps',
        },
        description: {
            descriptionEs: 'Trabajar en la automatización, integración continua, despliegue de aplicaciones y gestión de infraestructura como código.',
            descriptionEn: 'Work on automation, continuous integration, application deployment, and infrastructure as code management.'
        },
        styles: 'text-right self-end',
        tags: [
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
        ],
    },
]