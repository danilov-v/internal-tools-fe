export type Personnel = {
  calledAt: string;
  demobilizationAt: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  unitId: number;
};

export type PersonnelDetails = {
  birthday: string;
  calledAt: string;
  comment?: string | null;
  demobilizationAt: string;
  firstName: string;
  id?: number;
  lastName: string;
  middleName: string;
  phone: string;
  position: string;
  rankId: number;
  unitId: number;
};

export type PersonnelFilter = {
  unitId: number;
};

export type PersonnelRemoval = {
  comment?: string;
  personnelId: number;
  typeId: number;
};

export type PersonnelRemovalType = {
  id: number;
  name: string;
};
