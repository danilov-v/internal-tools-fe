export const SUCCESSFUL_PERSONNEL = [
  {
    id: 1,
    firstName: 'Сергей',
    lastName: 'Сивченко',
    middleName: 'Олегович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-11-27',
    unitId: 5,
  },
  {
    id: 2,
    firstName: 'Роман',
    lastName: 'Король',
    middleName: 'Олегович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 5,
  },
  {
    id: 3,
    firstName: 'Владислав',
    lastName: 'Уроднич',
    middleName: 'Иванович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 8,
  },
  {
    id: 4,
    firstName: 'Владислав',
    lastName: 'Гомезо',
    middleName: 'Игоревич',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 8,
  },
  {
    id: 5,
    firstName: 'Андрей',
    lastName: 'Домасевич',
    middleName: 'Олегович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 8,
  },
  {
    id: 6,
    firstName: 'Илья',
    lastName: 'Волосюк',
    middleName: 'Олегович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 10,
  },
  {
    id: 7,
    firstName: 'Игорь',
    lastName: 'Жевняк',
    middleName: 'Дмитриевич',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 11,
  },
  {
    id: 8,
    firstName: 'Николай',
    lastName: 'Солдунов',
    middleName: 'Олегович',
    calledAt: '2019-11-28',
    demobilizationAt: '2020-05-27',
    unitId: 11,
  },
];

export const FAILED_PERSONNEL = `Any predicate failed with the following errors:
- Expected \`unitId\` to be of type \`number\` but received type \`string\`
- Expected string \`unitId\` to be numeric, got \`\``;

export const SUCCESSFUL_PERSONNEL_DETAILS = {
  id: 1,
  firstName: 'Сергей',
  lastName: 'Сивченко',
  middleName: 'Олегович',
  calledAt: '28 ноября 2019',
  demobilizationAt: '27 ноября 2020',
  phone: '+375447556829',
  comment: null,
  birthday: '9 января 1995',
  position: 'Оператор ПВМ',
  unitId: 5,
  rankId: 18,
  maritalStatusId: 1,
};

export const FAILED_PERSONNEL_DETAILS = {
  message: 'Personnel with id 120 not found',
};

export const SUCCESSFUL_CREATE_PERSONNEL = {
  id: 8,
  firstName: 'Николай',
  lastName: 'Солдунов',
  middleName: 'Олегович',
  calledAt: '28 ноября 2019',
  demobilizationAt: '27 мая 2020',
  phone: '+375296684171',
  comment: null,
  birthday: '21 октября 1997',
  position: 'Оператор ПВМ',
  unitId: 11,
  rankId: 18,
  maritalStatusId: 1,
};

export const FAILED_CREATE_PERSONNEL = `Expected \`firstName\` to be of type \`string\` but received type \`undefined\``;
