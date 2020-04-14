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
  rank?: string;
  rankId: number;
  unitId: number;
};

export type PersonnelFormData = {
  comment?: string | null;
  id?: number;
  firstName: string;
  lastName: string;
  middleName: string;
  calledAt: Date | null;
  demobilizationAt: Date | null;
  birthday: Date | null;
  phone: string;
  position: string;
  unitName: string;
  unitId: string;
  platName: string;
  rankId: string;
  marriageStatus?: string;
};

export type PersonnelFilter = {
  unitId: number;
};
