import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiAuth0,
  SiTypescript,
} from 'react-icons/si';
import logoYourCountry from '../img/logoYourCountry.svg';
import blockbuster from '../img/BLOCKBUSTER.png';
import yourCountry from '../img/yourCountry.jpg';

const dataProjects = [
  {
    general: {
      logoProject: logoYourCountry,
      altImage: 'Your Country',
      linkDeployProject: 'https://github.com/AbimaelRueda/PI-countries',
      imageDeploy: yourCountry,
      linkRepositoryProject: 'https://github.com/AbimaelRueda/PI-countries',
      icons: [
        { color: '#F7E018', name: 'JavaScript', icon: <SiJavascript /> },
        { color: '#61DAFB', name: 'React', icon: <SiReact /> },
        { color: '#764ABC', name: 'Redux', icon: <SiRedux /> },
        { color: '#121212', name: 'ReactRouter', icon: <SiReactrouter /> },
        { color: '#43853D', name: 'Node.js', icon: <SiNodedotjs /> },
        { color: '#353535', name: 'Express', icon: <SiExpress /> },
        { color: '#52B0E7', name: 'Sequelize', icon: <SiSequelize /> },
        { color: '#336791', name: 'PostgresSQL', icon: <SiPostgresql /> },
      ],
    },
    spanish: {
      descriptionProject: [
        'Aplicación web con tema de países que realiza peticiones a una API y base de datos.',
        '📌 Realizar búsquedas por nombre de país.',
        '📌 Filtrar países por continente y/o actividad turistica.',
        '📌 Ordenar países alfabeticamente o por número de habitantes tanto de forma ascendente como descendente.',
        '📌 Crear actividades turisticas para uno o varios paises al mismo tiempo.',
      ],
    },
    english: {
      descriptionProject: [
        'Web application with country theme that makes requests to an API and database.',
        '📌 Search by country name.',
        '📌 Filter countries by continent and/or tourist activity.',
        '📌 Sort countries alphabetically or by number of inhabitants in ascending or descending order.',
        '📌 Create tourist activities for one or more countries at the same time.',
      ],
    },
  },
  {
    general: {
      logoProject: <p>BlockBuster</p>,
      altImage: 'BlockBuster',
      linkDeployProject: 'https://blockbuster-pf.vercel.app/',
      imageDeploy: blockbuster,
      linkRepositoryProject: 'https://github.com/Gabox18/Blockbuster_clone-PF',
      icons: [
        { color: '#F7E018', name: 'JavaScript', icon: <SiJavascript /> },
        { color: '#61DAFB', name: 'React', icon: <SiReact /> },
        { color: '#764ABC', name: 'Redux Toolkit', icon: <SiRedux /> },
        { color: '#121212', name: 'ReactRouter', icon: <SiReactrouter /> },
        { color: '#EB5424', name: 'Auth0', icon: <SiAuth0 /> },
        { color: '#43853D', name: 'Node.js', icon: <SiNodedotjs /> },
        { color: '#353535', name: 'Express', icon: <SiExpress /> },
        { color: '#336791', name: 'PostgresSQL', icon: <SiPostgresql /> },
        { color: '#000000', name: 'TypeScript', icon: <SiTypescript /> },
      ],
    },
    spanish: {
      descriptionProject: [
        'Es una aplicacion web de una réplica de la página Blockbuster, el usuario tendrá acceso a series y películas.',
        '📌 Rentar peliculas',
        '📌 Filtrarlas / Ordenarlas',
        '📌 Agregar productos al Shop',
        '📌 Y mas funcionalidades...',
      ],
    },
    english: {
      descriptionProject: [
        'It is a web application that replicates the Blockbuster website, the user will have access to series and movies.',
        '📌 Rent movies',
        '📌 Filter / Sort them',
        '📌 Add products to the Shop',
        '📌 And more features...',
      ],
    },
  },
];

export default dataProjects;
