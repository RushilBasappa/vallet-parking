import firebase from './firebase';

const carDump = () => {
  const carRef = firebase.database().ref('car');
  const carData = {
    model: 'brezza',
    brand: 'maruti',
    vehicle_number: 'ap0010000',
  };
  carRef.child(carData.vehicle_number).set(carData);
};

const companyDump = () => {
  const companyRef = firebase.database().ref('/company');
  let companyData = {
    name: 'JP Morgan',
    hydraulic: true,
    short_name: 'jpm',
  };
  companyRef.child(companyData.short_name).set(companyData);
};

const space = () => {
  const spaceRef = firebase.database().ref('/space/jpm');
  let spaceData = {
    'a-10': {
      status: 'open',
    },
    'a-11': {
      status: 'close',
    },
  };
  spaceRef.set(spaceData);
};

export { carDump, companyDump, space };
