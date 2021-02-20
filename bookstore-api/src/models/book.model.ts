import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    price: number;
}
