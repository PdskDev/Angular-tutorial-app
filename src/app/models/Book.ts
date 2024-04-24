export class Book {
  isbn: number;
  title: string;
  authors: string;
  published: string;
  description: string;
  coverImage: string;

  constructor(isbn: number, title: string, authors: string, published: string, description: string, coverImage: string){
    this.isbn = isbn;
    this.title = title;
    this.authors = authors;
    this.published = published;
    this.description = description;
    this.coverImage = coverImage;
  }
}
