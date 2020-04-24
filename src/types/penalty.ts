export type Penalty = {
  id?: number;
  personnelId: number;
  typeId: number;
  comment: string | null;
  createdAt?: string;
  closedAt?: Date | null;
  type?: string;
};
