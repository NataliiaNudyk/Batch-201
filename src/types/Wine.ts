export interface Wine {
  id: number;
  name: string;
  batch: number | string;
  year: number | string;
  type: string;
  color: string;
  grapeVariety: string;
  capacity: string;
  manufacturer: string;
  region: string;
  pack: string;
  price: number;
  description: string;
  image: string | null;
  auditCart: string;
};