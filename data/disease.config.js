var DiseaseConfig = {
  ebola: {
    numPoints : 500,
    color: 'yellow',
    minDate: new Date(2010, 1, 1),
    maxDate: new Date(),
    center: {
      latitude: 34,
      longitude: -118
    },
    radius: 10000000,
    label: "Ebola Virus",
    key: 'ebola'
  },
  h1n1: {
    numPoints: 500,
    color: 'red',
    minDate: new Date(2010, 1, 1),
    maxDate: new Date(2016, 6, 1),
    center: {
      latitude: -5,
      longitude: -6
    },
    radius: 10000000,
    label : "Influenza (H1N1)",
    key: 'h1n1'
  }
}
