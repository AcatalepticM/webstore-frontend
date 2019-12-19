export class Product {

  id: number;
  name: string;
  price: number;
  thumbnailUrl: string;

  constructor(id: number, name: string, price: number, thumbnailUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.thumbnailUrl = thumbnailUrl;

 /* id: number;
  name: string;
  price: number;
  description: string;
  thumbnailUrl: string;
  categoryId: number;
  type: string;
  creatorId: number;

  constructor(id: number, name: string, price: number, description: string,
              thumbnailUrl: string, categoryId: number, type: string, creatorId: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.thumbnailUrl = thumbnailUrl;
    this.categoryId = categoryId;
    this.type = type;
    this.creatorId = creatorId;*/
  }
}
