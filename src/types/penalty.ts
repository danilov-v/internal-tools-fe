export type Penalty = {
  id: number;
  typeId: number;
  comment: string | null;
  createdAt: string;
  closedAt: Date | null;
  type?: string;
};
