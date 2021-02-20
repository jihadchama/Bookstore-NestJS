import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksController } from './controllers/books.controller';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'bookstore',
            autoLoadModels: true,
            synchronize: true
        }),
        SequelizeModule.forFeature([Book])
    ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
