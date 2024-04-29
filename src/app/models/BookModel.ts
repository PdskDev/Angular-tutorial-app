export class Book {
  id: number;
  isbn: string;
  title: string;
  authors: string;
  published: string;
  description: string;
  coverImage: string;

  constructor(id: number, isbn: string, title: string, authors: string, published: string, description: string, coverImage: string){
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.authors = authors;
    this.published = published;
    this.description = description;
    this.coverImage = coverImage;
  }
}
