export const PREDICTION_RESULTS: { [key: string]: string[] } = {
  ORTIZ: [
    "dr ortiz clínica galilea",
    "dr ortiz cardiólogo",
    "dr ortiz cirujano",
    "dr ortiz especialista",
    "dr ortiz tratamientos",
    "dr ortiz consulta",
    "dr ortiz experiencia",
    "dr ortiz investigaciones",
    "dr ortiz publicaciones",
    "dr ortiz premios",
  ],
  PENAS: [
    "penas por envenenamiento",
    "penas por envenenamiento argentina",
    "penas por envenenamiento código penal",
    "penas por envenenamiento de aguas",
    "penas por envenenamiento alimentos",
    "penas por envenenamiento medicamentos",
  ],
  BONAR: [
    "bonar autopartes",
  ],
  MATRICULA: [
    "matricula fumigador"
  ]
};

export const getLegalContent = (query: string) => {
  if (query.toLowerCase().includes("penas por envenenamiento")) {
    return {
      results: [
        {
          title:
            'Art. 200: "Será reprimido con reclusión o prisión de tres a diez años',
          content:
            'el que envenenare o adulterare, de un modo peligroso para la salud, aguas potables o sustancias alimenticias o medicinales, destinadas al uso público o al consumo de una colectividad de personas".',
          source: "Revista Pensamiento Penal",
          url: "https://www.pensamientopenal.com.ar/cpc38027",
        },
        {
          title:
            'Art. 200: "Será reprimido con reclusión o prisión de tres a diez años',
          content:
            'el que envenenare o adulterare, de un modo peligroso para la salud, aguas potables o sustancias alimenticias o medicinales, destinadas al uso público o al consumo de una colectividad de personas".',
          source: "Revista Pensamiento Penal",
          url: "https://www.pensamientopenal.com.ar/cpc38027",
        },
        {
          title:
            'Art. 200: "Será reprimido con reclusión o prisión de tres a diez años',
          content:
            'el que envenenare o adulterare, de un modo peligroso para la salud, aguas potables o sustancias alimenticias o medicinales, destinadas al uso público o al consumo de una colectividad de personas".',
          source: "Revista Pensamiento Penal",
          url: "https://www.pensamientopenal.com.ar/cpc38027",
        },
        {
          title:
            'Art. 200: "Será reprimido con reclusión o prisión de tres a diez años',
          content:
            'el que envenenare o adulterare, de un modo peligroso para la salud, aguas potables o sustancias alimenticias o medicinales, destinadas al uso público o al consumo de una colectividad de personas".',
          source: "Revista Pensamiento Penal",
          url: "https://www.pensamientopenal.com.ar/cpc38027",
        },
      ],
      questions: [
        "¿Cuántos años de cárcel dan por envenenamiento?",
        "¿Qué dice el artículo 247 del Código Penal Argentino?",
        "¿Qué es el envenenamiento en derecho penal?",
      ],
    };
  }
  return null;
};
