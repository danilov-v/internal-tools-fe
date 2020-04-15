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
  birthday: Date | null;
  calledAt: Date | null;
  comment?: string | null;
  demobilizationAt: Date | null;
  firstName: string;
  id?: number;
  lastName: string;
  middleName: string;
  phone: string;
  position: string;
  rank?: string;
  rankId: string;
  unitName: string;
  unitId: string;
  platName: string;
  marriageStatus?: string;
};

export type PersonnelFilter = {
  unitId: number;
};
