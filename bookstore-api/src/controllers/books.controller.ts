import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.booksService.getAllBooks();
    }

    @Get(':id')
    async getBook(@Param() params: number) : Promise<Book> {
        return this.booksService.getBook(params);
    }

    @Post()
    async createBook(@Body() book: Book) : Promise<void> {
        this.booksService.createBook(book);
    }

    @Put()
    async modifyBook(@Body() book: Book) : Promise<[number, Book[]]> {
        return this.booksService.modifyBook(book);
    }

    @Delete(':id')
    async removeBook(@Param() params: number) : Promise<void> {
        this.booksService.removeBook(params);
    }
}
