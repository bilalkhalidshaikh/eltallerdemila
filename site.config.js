const apiUrl = "https://openacademy-api.herokuapp.com";

const siteMetadata = {
  title: "Ballon Decoration",
  author: {
    name: "El Taller de Mila",
    summary: "eltallerdemila",
  },
  description: "El Taller de Mila Ballon Decoration - Blow Up Your Balloon Design Skills with Us",
  siteUrl: "https://eltallerdemila.com/",
  language: "es-ES",
  social: {
    twitter: "eltallerdemila",
  },
};

const links = {
  search: "busqueda",
};

const apiLinks = {
  apiLoginUrl: apiUrl + "/login",
  apiSignupUrl: apiUrl + "/signup",
  testsUrl: apiUrl + "/academy/tests",
  getAllCourses: apiUrl + "/academy/courses",
  getItems: apiUrl + "/academy/items/",
};

const socialIcons = [
  {
    id: 0,
    icon: "github",
    // url: "https://github.com/tomasdetloging",
  },
  {
    id: 356,
    icon: "youtube",
    // url: "https://www.facebook.com/tomasdetloging",
  },
  {
    id: 3,
    icon: "linkedin",
    // url: "https://www.linkedin.com/in/tomasdetloging/",
  },
  {
    id: 2,
    icon: "instagram",
    // url: "https://www.instagram.com/tomasdetloging/",
  },
  {
    id: 4,
    icon: "twitter",
    // url: "https://www.twitter.com/tomasdetloging/",
  },
];

const navbarLinks = [
  { title: "El Taller de Mila", url: "https://eltallerdemila.com/" },
  { title: "Courses", url: "https://eltallerdemila.com/all-courses/" },
  // { title: "Blog", url: "/blog" },
  { title: "Get Started", url: "https://eltallerdemila.com/login" },

  // {
  //   title: "Cursos",
  //   submenu: [
  //     { title: "Inicio", url: "/" },
  //     { title: "Courses", url: "/courses" },
  //   ],
  // },
];

const hero = {
  mainTitle: "El Taller de Mila - Ballon Decoration",
  subTitle: "Blow Up Your Balloon Design Skills with Us  ",
  searchPlaceholder: "Buscar...",
  // VimeoVideoId: "208266874",
};

const allCourses = {
  title: "Cursos",
  subTitle: "Blow Up Your Balloon Design Skills with Us ",
  searchPlaceholder: "Buscar...",
  bestCourses: {
    title: "Mejores cursos",
    subTitle: "Blow Up Your Balloon Design Skills with Us ",
  },
  courses: {
    title: "Todos los cursos",
    subTitle: "Blow Up Your Balloon Design Skills with Us ",
  },
};

const singleCourse = {
  buttonStartText: "Empezar",
  description: {
    descriptionTitleText: "Descripcion del curso",
    contentTitleText: "Contenido del curso",
    requiredTitleText: "Requisitos del curso",
    required: [],
  },
};

const popularCourses = {
  title: "Cursos mas populares",
  subTitle: "Blow Up Your Balloon Design Skills with Us ",
};

const search = {
  title: "Resultados de la busqueda",
  searchPlaceholder: "Buscar...",
  labelResults: "resultados:",
};

const footer = {
  aboutText: "Comprometidos en darte el mejor contenido gratuito de internet.",
  LinksTitle: "Enlaces",
  links: [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
  ],
  newsLetterTitle: "NewsLetter",
  newsLetterText: "Registrate y recive las ultimas novedades por tu correo.",
};

module.exports = {
  exchangeRates: [
    {
      id: "BOB",
      text: "BS",
      conuntry: "Bolivia",
    },
    {
      id: "USS",
      text: "$",
      conuntry: "UUEE",
    },
    {
      id: "EUR",
      text: "€",
      conuntry: "",
    },
  ],

  extensions: [
    {
      id: "domain1",
      text: ".com",
      prices: [
        { id: "BOB", value: 10 },
        { id: "USS", value: 11 },
        { id: "EUR", value: 12 },
      ],
    },
    {
      id: "domain2",
      text: ".bo",
      prices: [
        { id: "BOB", value: 20 },
        { id: "USS", value: 21 },
        { id: "EUR", value: 22 },
      ],
    },
    {
      id: "domain3",
      text: ".com.bo",
      prices: [
        { id: "BOB", value: 30 },
        { id: "USS", value: 31 },
        { id: "EUR", value: 32 },
      ],
    },
  ],

  HostingTypes: [
    { id: "hosting1", text: "initial", price: { BOB: 150, USD: 21, EUR: 123 } },
    { id: "hosting2", text: "pyme", price: { BOB: 350, USD: 50, EUR: 123 } },
    {
      id: "hosting3",
      text: "enterprice1",
      price: { BOB: 700, USD: 88, EUR: 123 },
    },
    {
      id: "hosting4",
      text: "enterprice1",
      price: { BOB: 850, USD: 121, EUR: 123 },
    },
  ],
  links,
  socialIcons,
  siteMetadata,
  apiUrl,
  apiLinks,
  navbarLinks,
  hero,
  singleCourse,
  allCourses,
  popularCourses,
  footer,
  search,
  paymentMethods: require("./config/paymentMethods"),
};
