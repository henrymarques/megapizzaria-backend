export default interface Menu {
  id: number;

  title: string;

  categoryId: number;

  price: number;

  description: string;

  isActive: boolean;

  createdAt: Date;
}
