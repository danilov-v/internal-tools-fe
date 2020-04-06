export const SUCCESSFUL_UNIT = [
  {
    id: 1,
    name: 'военная академия',
    typeId: 1,
    parentUnit: null,
  },
  {
    id: 2,
    name: 'центр обеспечения учебного процесса',
    typeId: 2,
    parentUnit: 1,
  },
  {
    id: 3,
    name: 'рота информационных технологий',
    typeId: 4,
    parentUnit: 2,
  },
  {
    id: 4,
    name: '1 взвод',
    typeId: 5,
    parentUnit: 3,
  },
  {
    id: 5,
    name: '1 отделение',
    typeId: 6,
    parentUnit: 4,
  },
  {
    id: 8,
    name: '2 отделение',
    typeId: 6,
    parentUnit: 4,
  },
  {
    id: 9,
    name: '2 взвод',
    typeId: 5,
    parentUnit: 3,
  },
  {
    id: 10,
    name: '1 отделение',
    typeId: 6,
    parentUnit: 9,
  },
  {
    id: 11,
    name: '2 отделение',
    typeId: 6,
    parentUnit: 9,
  },
];

export const FAILED_UNIT = { message: 'Unauthorized' };

export const SUCCESSFUL_CREATE_UNIT = {
  id: 11,
  name: '2 отделение',
  typeId: 6,
  parentUnit: 9,
};

export const FAILED_CREATE_UNIT = `Internal server error.`;
