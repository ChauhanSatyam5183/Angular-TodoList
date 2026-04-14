export class Todo{
  sno: number;
  title: string;
  description: string;
  isActive: boolean;

   constructor(sno: number, title: string, description: string, isActive: boolean) {
    this.sno = sno;
    this.title = title;
    this.description = description;
    this.isActive = isActive;
  }
}