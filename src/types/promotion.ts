export type Promotion = {
  id: number;
  typeId: number;
  comment: string | null;
  createdAt: string;
  closedAt: Date | null;
  type?: string;
};
