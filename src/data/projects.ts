// PROJECT CONSTANTS
export const EN_URL = '?lan=EN'

// PROJECTS LOGOS
import edumetrica from '../assets/imgs/EDUMETRICA VERTICAL_SVG_Mesa de trabajo 1.svg'
import myshares from '../assets/imgs/myshares-logo.png'
import etc from '../assets/imgs/etc-logo.png'
import islay from '../assets/imgs/ISLAY COLOR BLANCO.png'
import portafolio from '../assets/imgs/logo-no-background.png'

// PROJECT IMGS
// ISLAY
import islay1 from '../assets/imgs/islay/islay1.png'
import islay2 from '../assets/imgs/islay/islay2.png'
import islay3 from '../assets/imgs/islay/islay3.png'
import islay4 from '../assets/imgs/islay/islay4.png'
import islay5 from '../assets/imgs/islay/islay5.png'
import islay6 from '../assets/imgs/islay/islay6.png'
import islay7 from '../assets/imgs/islay/islay7.png'
import islay8 from '../assets/imgs/islay/islay8.png'
import islay9 from '../assets/imgs/islay/islay9.png'
import islay10 from '../assets/imgs/islay/islay10.png'
import islay1s from '../assets/imgs/islay/islay1-s.png'
import islay2s from '../assets/imgs/islay/islay2-s.png'
import islay3s from '../assets/imgs/islay/islay3-s.png'
import islay4s from '../assets/imgs/islay/islay4-s.png'
import islay5s from '../assets/imgs/islay/islay5-s.png'
import islay6s from '../assets/imgs/islay/islay6-s.png'
import islay7s from '../assets/imgs/islay/islay7-s.png'
import islay8s from '../assets/imgs/islay/islay8-s.png'
import islay9s from '../assets/imgs/islay/islay9-s.png'
import islay10s from '../assets/imgs/islay/islay10-s.png'

// EDUMETRICA
import edu1 from '../assets/imgs/edumetrica/edu1.png'
import edu2 from '../assets/imgs/edumetrica/edu2.png'
import edu3 from '../assets/imgs/edumetrica/edu3.png'
import edu4 from '../assets/imgs/edumetrica/edu4.png'
import edu5 from '../assets/imgs/edumetrica/edu5.png'
import edu6 from '../assets/imgs/edumetrica/edu6.png'
import edu7 from '../assets/imgs/edumetrica/edu7.png'
import edu1s from '../assets/imgs/edumetrica/edu1-s.png'
import edu2s from '../assets/imgs/edumetrica/edu2-s.png'
import edu3s from '../assets/imgs/edumetrica/edu3-s.png'
import edu4s from '../assets/imgs/edumetrica/edu4-s.png'
import edu5s from '../assets/imgs/edumetrica/edu5-s.png'
import edu6s from '../assets/imgs/edumetrica/edu6-s.png'
import edu7s from '../assets/imgs/edumetrica/edu7-s.png'

// BLOG
import blog1 from '../assets/imgs/blog/blog1.png'
import blog2 from '../assets/imgs/blog/blog2.png'
import blog3 from '../assets/imgs/blog/blog3.png'
import blog4 from '../assets/imgs/blog/blog4.png'
import blog5 from '../assets/imgs/blog/blog5.png'
import blog1s from '../assets/imgs/blog/blog1-s.png'
import blog2s from '../assets/imgs/blog/blog2-s.png'
import blog3s from '../assets/imgs/blog/blog3-s.png'
import blog4s from '../assets/imgs/blog/blog4-s.png'
import blog5s from '../assets/imgs/blog/blog5-s.png'

// PORTAFOLIO
import lrp1 from '../assets/imgs/portafolio/lrp1.png'
import lrp2 from '../assets/imgs/portafolio/lrp2.png'
import lrp3 from '../assets/imgs/portafolio/lrp3.png'
import lrp4 from '../assets/imgs/portafolio/lrp4.png'
import lrp5 from '../assets/imgs/portafolio/lrp5.png'
import lrp6 from '../assets/imgs/portafolio/lrp6.png'
import lrp7 from '../assets/imgs/portafolio/lrp7.png'
import lrp8 from '../assets/imgs/portafolio/lrp8.png'
import lrp1s from '../assets/imgs/portafolio/lrp1-s.png'
import lrp2s from '../assets/imgs/portafolio/lrp2-s.png'
import lrp3s from '../assets/imgs/portafolio/lrp3-s.png'
import lrp4s from '../assets/imgs/portafolio/lrp4-s.png'
import lrp5s from '../assets/imgs/portafolio/lrp5-s.png'
import lrp6s from '../assets/imgs/portafolio/lrp6-s.png'
import lrp7s from '../assets/imgs/portafolio/lrp7-s.png'
import lrp8s from '../assets/imgs/portafolio/lrp8-s.png'

// SHARES
import share1 from '../assets/imgs/shares/share1.png'
import share2 from '../assets/imgs/shares/share2.png'
import share3 from '../assets/imgs/shares/share3.png'
import share4 from '../assets/imgs/shares/share4.png'
import share5 from '../assets/imgs/shares/share5.png'
import share6 from '../assets/imgs/shares/share6.png'
import share1s from '../assets/imgs/shares/share1-s.png'
import share2s from '../assets/imgs/shares/share2-s.png'
import share3s from '../assets/imgs/shares/share3-s.png'
import share4s from '../assets/imgs/shares/share4-s.png'
import share5s from '../assets/imgs/shares/share5-s.png'
import share6s from '../assets/imgs/shares/share6-s.png'

export interface ProjectDetails {
    overviewTitle: string,
    overview: string,
    featuresTitle: string,
    features: string[],
    techTitle: string,
    tech: string[],
}

export const projects = [
    {   
        id:100,
        imgs: [lrp1, lrp2, lrp3, lrp4, lrp5, lrp6, lrp7, lrp8],
        imgsL: [lrp1s, lrp2s, lrp3s, lrp4s, lrp5s, lrp6s, lrp7s, lrp8s],
        title: 'Portafolio',
        logo: portafolio,
        link: 'http://luisrodriguezpodesta.com',
        linkTitle: 'luisrodriguezpodesta.com',
        githubTitle: 'Repository',
        gitHubLink: '',
        details: {
            'ES': {
                overviewTitle: 'Descripción',
                overview: 'Aplicación web front-end diseñada para servir como un sitio personal que muestra mis habilidades en UI/UX y desarrollo de software. Esta aplicación proporciona una plataforma interactiva para exhibir mi currículum, experiencia profesional y los proyectos en los que he trabajado. Cada proyecto incluye descripciones detalladas y enlaces a demos y repositorios de GitHub, permitiendo a los visitantes explorar mi trabajo de manera completa.',
                featuresTitle: 'Características',
                features: [
                    'Muestra mi currículum completo, incluyendo educación, experiencia laboral, habilidades y certificaciones.',
                    'Destaca mi trayectoria profesional, detallando roles y responsabilidades en varios puestos.',
                    'Proporciona descripciones completas de los proyectos en los que he trabajado, detallando objetivos, metodologías y resultados.',
                    'Incluye enlaces a demos en vivo y repositorios de GitHub para cada proyecto, permitiendo a los visitantes ver e interactuar con mi trabajo.',
                    'Muestra mi experiencia en diseño UI/UX y tecnologías de desarrollo a través de secciones visualmente atractivas.',
                    'Presenta una galería de mi trabajo de diseño, demostrando tu habilidad en la creación de interfaces centradas en el usuario.',
                    'Asegura que el sitio sea accesible y visualmente atractivo en todos los dispositivos, incluyendo computadoras de escritorio, tablets y smartphones.',
                    'Proporciona una navegación intuitiva para mejorar la experiencia del usuario, permitiendo a los visitantes explorar fácilmente las diferentes secciones.',
                    'Incluye un formulario de contacto para que posibles clientes o empleadores puedan comunicarse contigo.',
                    'Proporciona enlaces a tus perfiles profesionales en redes sociales para oportunidades adicionales de networking.',
                ],
                techTitle: 'Stack Tecnológico',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                ]
            },
            'EN': {
                overviewTitle: 'Description',
                overview: 'Front-end web application designed to serve as a personal site that showcases my UI/UX and development skills. This app provides an interactive platform to display my resume, professional experience, and projects I have worked on. Each project includes detailed descriptions and links to demos and GitHub repositories, allowing visitors to explore my work comprehensively.',
                featuresTitle: 'Features',
                features: [
                    'Displays my complete resume, including education, work experience, skills, and certifications.',
                    'Highlights my professional journey, detailing roles and responsibilities at various positions.',
                    'Provides comprehensive descriptions of the projects I have worked on, outlining objectives, methodologies, and outcomes.',
                    'Includes links to live demos and GitHub repositories for each project, allowing visitors to view and interact with my work.',
                    'Showcases my expertise in UI/UX design and development technologies through visually appealing sections.',
                    'Features a gallery of my design work, demonstrating my proficiency in creating user-centric interfaces.',
                    'Ensures the site is accessible and visually appealing on all devices, including desktops, tablets, and smartphones.',
                    'Provides intuitive navigation to enhance user experience, allowing visitors to easily browse through different sections.',
                    'Includes a contact form for potential clients or employers to reach out to you.',
                    'Provides links to your professional social media profiles for further networking opportunities.',
                ],
                techTitle: 'Technology Stack',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                ]
            }
        },

    },
    {   
        id:200,
        imgs: [islay1, islay2, islay3, islay4, islay5, islay6, islay7, islay8, islay9, islay10],
        imgsL: [islay1s, islay2s, islay3s, islay4s, islay5s, islay6s, islay7s, islay8s, islay9s, islay10s],
        title: 'Municipalidad Distrital de Islay',
        logo: islay,
        link: 'https://desarrollo.muniislay.gob.pe',
        linkTitle: 'desarrollo.muniislay.gob.pe',
        githubTitle: 'Repository',
        gitHubLink: '',
        details: {
            'ES': {
                overviewTitle: 'Descripción',
                overview: 'Aplicación web front-end diseñada para promover el turismo en una ciudad. Esta aplicación utiliza la API de Google Maps para ayudar a los no residentes a descubrir varios lugares, proporcionando una experiencia interactiva e informativa. Los visitantes pueden explorar los tres principales atractivos turísticos con fotos detalladas e información histórica. Además, la aplicación ofrece información esencial sobre los servicios de emergencia en la ciudad, garantizando una visita segura y placentera.',
                featuresTitle: 'Características',
                features: [
                    'Muestra los tres principales lugares turísticos con fotos de alta calidad e información histórica completa.',
                    'Utiliza la API de Google Maps para proporcionar ubicaciones e indicaciones hacia estas atracciones.',
                    'Permite a los usuarios descubrir restaurantes, cafeterías, hoteles y otros puntos de interés cercanos utilizando la API de Google Maps.',
                    'Proporciona descripciones, calificaciones y reseñas para varios lugares.',
                    'Lista números de contacto esenciales de emergencia, como la policía, ambulancia y servicios de bomberos.',
                    'Muestra ubicaciones de hospitales y clínicas en el mapa para acceso rápido en caso de emergencias.',
                    'Asegura que la aplicación sea accesible y fácil de usar en todos los dispositivos, incluyendo smartphones, tablets y computadoras de escritorio.',
                    'Cuenta con un sistema de navegación fácil de usar para una navegación sin problemas.',
                ],
                techTitle: 'Stack Tecnológico',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                    'Goggle Maps API',
                ]
            },
            'EN': {
                overviewTitle: 'Description',
                overview: 'Front-end web application designed to promote tourism in a city. This app leverages the Google Maps API to help non-locals discover various places, providing an interactive and informative experience. Visitors can explore the three main tourist attractions with detailed pictures and historical information. Additionally, the app offers essential information about emergency services in the city, ensuring a safe and enjoyable visit.',
                featuresTitle: 'Features',
                features: [
                    'Displays the three main tourist places with high-quality pictures and comprehensive historical information.',
                    'Uses Google Maps API to provide locations and directions to these attractions.',
                    'Allows users to discover nearby restaurants, cafes, hotels, and other points of interest using Google Maps API.',
                    'Provides descriptions, ratings, and reviews for various places.',
                    'Lists essential emergency contact numbers such as police, ambulance, and fire services.',
                    'Shows locations of hospitals and clinics on the map for quick access in case of emergencies.',
                    'Ensures the app is accessible and user-friendly on all devices, including smartphones, tablets, and desktops.',
                    'Features an easy-to-use navigation system for seamless browsing.',
                ],
                techTitle: 'Technology Stack',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                    'Goggle Maps API',
                ]
            }
        },

    },
    {
        id:300,
        imgs: [blog1, blog2, blog3, blog4, blog5],
        imgsL: [blog1s, blog2s, blog3s, blog4s, blog5s],
        title: 'El Teclado de Socrates',
        logo: etc,
        link: '#',
        linkTitle: 'eltecladodesocrates.com',
        githubTitle: 'Repository',
        gitHubLink: '',
        details: {
            'ES': {
                overviewTitle: 'Descripción',
                overview: 'El Teclado de Sócrates es una aplicación web full-stack construida usando Django para el backend y React para el frontend. Este blog se centra en el desarrollo de software con una intención educativa, proporcionando a los lectores valiosas ideas, tutoriales y recursos para mejorar sus habilidades y conocimientos en programación.',
                featuresTitle: 'Características',
                features: [
                    'Organiza las publicaciones utilizando categorías y etiquetas para ayudar a los lectores a encontrar contenido relevante fácilmente.',
                    'Tutoriales y guías exhaustivas sobre varios temas de desarrollo de software.',
                    'Ejemplos prácticos de código y fragmentos para ilustrar conceptos y técnicas clave.',
                    'Ejercicios de codificación interactivos y cuestionarios para reforzar el aprendizaje.',
                    'Diseño completamente responsivo para asegurar una experiencia de lectura sin interrupciones en todos los dispositivos.',
                ],
                techTitle: 'Stack Tecnológico',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                    'Python',
                    'Django',
                    'mySQL',
                    'JWT (JSON Web Tokens)',
                ]
            },
            'EN': {
                overviewTitle: 'Description',
                overview: 'El Teclado de Sócrates is a Full-stack web application built using Django for the backend and React for the frontend. This blog focuses on software development with an educational intent, providing readers with valuable insights, tutorials, and resources to enhance their coding skills and knowledge.',
                featuresTitle: 'Features',
                features: [
                    'Organize posts using categories and tags to help readers find relevant content easily.',
                    'Comprehensive tutorials and guides on various software development topics.',
                    'Practical code examples and snippets to illustrate key concepts and techniques.',
                    'Interactive coding exercises and quizzes to reinforce learning.',
                    'Fully responsive design to ensure a seamless reading experience across all devices.',
                ],
                techTitle: 'Technology Stack',
                tech: [
                    'TypeScript',
                    'TailwindCSS',
                    'React',
                    'Python',
                    'Django',
                    'mySQL',
                    'JWT (JSON Web Tokens)',
                ]
            }
        },

    },
    {
        id:400,
        imgs: [edu1, edu2, edu3, edu4, edu5, edu6, edu7],
        imgsL: [edu1s, edu2s, edu3s, edu4s, edu5s, edu6s, edu7s],
        title: 'Edumetrica',
        logo: edumetrica,
        link: 'https://harmonious-longma-e97533.netlify.app',
        linkTitle: 'edumetrica.com',
        githubTitle: 'Repository',
        gitHubLink: '',
        details: {
            'ES': {
                overviewTitle: 'Descripción',
                overview: 'Edumetrica es una aplicación web y móvil full-stack diseñada para facilitar la comunicación y el intercambio de información entre los profesores y los padres de los alumnos. Esta aplicación permite a los profesores publicar información académica sobre sus estudiantes, incluyendo asignaturas, asistencia y calificaciones. La aplicación calcula automáticamente los promedios y resultados finales, que pueden ser entregados de manera organizada.',
                featuresTitle: 'Características',
                features: [
                    'Los profesores pueden ingresar datos sobre las asignaturas y la asistencia de cada estudiante.',
                    'Los profesores pueden publicar calificaciones y evaluaciones, que luego se utilizan para calcular automáticamente los promedios y resultados finales.',
                    'Los profesores pueden usar tanto la aplicación web como la móvil para publicar y gestionar la información de los estudiantes.',
                    'Los padres pueden acceder a la información académica de sus hijos a través de la aplicación móvil.',
                    'Los padres reciben notificaciones cuando se envía una calificación o se crea una tarea, asegurándose de que estén informados sobre el progreso de sus hijos.',
                    'Toda la información académica se organiza en categorías para facilitar el acceso y la revisión.',
                    'Informes y resúmenes generados automáticamente para el rendimiento, asistencia y calificaciones de los estudiantes',
                    'Interfaz intuitiva y fácil de usar tanto para las aplicaciones web como móvil para garantizar una experiencia de usuario sin problemas.',
                    'Garantizando la privacidad de los datos y el acceso seguro para profesores y padres.',
                ],
                techTitle: 'Stack Tecnológico',
                tech: [
                    'JavaScript',
                    'TailwindCSS',
                    'React',
                    'React Native',
                    'Python',
                    'Django',
                    'mySQL',
                    'Firebase Cloud Messaging',
                    'JWT (JSON Web Tokens)',
                ]
            },
            'EN': {
                overviewTitle: 'Description',
                overview: 'Edumetrica is a full-stack web and mobile application designed to facilitate communication and information sharing between school teachers and parents. This app allows teachers to post academic information about their students, including subjects, attendance, and grades. The application automatically calculates averages and final results, which can be delivered in an organized manner.',
                featuresTitle: 'Features',
                features: [
                    'Teachers can enter data on subjects and attendance for each student.',
                    'Teachers can post grades and assessments, which are then used to calculate averages and final results automatically.',
                    'Teachers can use either the web app or the mobile app to post and manage student information.',
                    'Parents can access their children academic information through the mobile app.',
                    'Parents receive notifications when a grade is submitted or an assignment is created, ensuring they stay informed about their child progress.',
                    'All academic information is organized into categories for easy access and review.',
                    'Automatically generated reports and summaries for student performance, attendance, and grades.',
                    'Intuitive and user-friendly interface for both web and mobile apps to ensure a seamless user experience.',
                    'Ensuring data privacy and secure access for both teachers and parents.',
                ],  
                techTitle: 'Technology Stack',
                tech: [
                    'JavaScript',
                    'TailwindCSS',
                    'React',
                    'React Native',
                    'Python',
                    'Django',
                    'mySQL',
                    'Firebase Cloud Messaging',
                    'JWT (JSON Web Tokens)',
                ]
            }
        },

    },
    {
        id:500,
        imgs: [share1, share2, share3, share4, share5, share6],
        imgsL: [share1s, share2s, share3s, share4s, share5s, share6s],
        title: 'MyShares',
        logo: myshares,
        link: 'https://myshares-web.com',
        linkTitle: 'myshares-web.com',
        githubTitle: 'Repository',
        gitHubLink: '#',
        details: {
            'ES': {
                overviewTitle: 'Descripción',
                overview: 'MyShares es una aplicación web full stack diseñada para conectar a personas que desean compartir sus cuentas de streaming con aquellos que necesitan acceso a servicios de streaming sin tener que comprar una suscripción completa. La aplicación también proporciona una función conveniente donde los usuarios pueden ingresar el título de una película o serie de televisión para descubrir en qué plataformas se está transmitiendo ese contenido.',
                featuresTitle: 'Características',
                features: [
                    'Los usuarios pueden registrarse e iniciar sesión de manera segura.',
                    'Los usuarios pueden crear y gestionar sus perfiles, especificando si están ofreciendo o buscando cuentas de streaming.',
                    'Los usuarios que ofrecen cuentas de streaming pueden crear listados con detalles como la plataforma, el número de espacios disponibles y el precio.',
                    'Los usuarios que buscan acceso pueden navegar por los listados disponibles y solicitar compartir una cuenta.',
                    'Los usuarios pueden ingresar el título de una película o serie de televisión.',
                    'La aplicación devuelve una lista de las plataformas de streaming donde el título ingresado está disponible actualmente.',
                    'Opciones de pago seguras para transacciones entre propietarios y buscadores de cuentas.',
                    'Los administradores pueden gestionar cuentas de usuario y monitorear la actividad en la plataforma.',
                ],
                techTitle: 'Stack Tecnológico',
                tech: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React JS',
                    'Python',
                    'Django',
                    'mySQL',
                    'AWS',
                ]
            },
            'EN': {
                overviewTitle: 'Description',
                overview: 'MyShares is a full stack web application designed to connect individuals who want to share their streaming accounts with those who need access to streaming services without purchasing an entire subscription. The app also provides a convenient feature where users can input the title of a movie or TV show to discover which platforms are currently streaming that content.',
                featuresTitle: 'Features',
                features: [
                    'Users can sign up and log in securely.',
                    'Users can create and manage their profiles, specifying whether they are offering or seeking streaming accounts.',
                    'Users offering streaming accounts can create listings with details such as the platform, number of available slots, and pricing.',
                    'Users seeking access can browse available listings and request to share an account.',
                    'Users can enter the title of a movie or TV show.',
                    'The app returns a list of streaming platforms where the entered title is currently available.',
                    'Secure payment options for transactions between account owners and seekers.',
                    'Admins can manage user accounts and monitor activity on the platform.',
                ],
                techTitle: 'Technology Stack',
                tech: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React JS',
                    'Python',
                    'Django',
                    'mySQL',
                    'AWS',
                ]
            }
        },
    },
]