import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ) {}

    async getAllBooks(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async getBook(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async createBook(book: Book) : Promise<void> {
        this.bookModel.create(book);
    }

    async modifyBook(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    async removeBook(id: number) : Promise<void> {
        const book: Book = await this.getBook(id);
        book.destroy();
    }
}
