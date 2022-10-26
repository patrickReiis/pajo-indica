import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import type { Book as BookType } from '../../types';

@Unique(['title', 'author'])
@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number

    @Column('varchar', { length: 300, name: 'title' })
    title!: BookType['title'];

    @Column('varchar', { length: 300})
    genre!: BookType['genre'];

    @Column('varchar', { length: 300 })
    author!: BookType['author'];

    @Column('jsonb')
    keywords!: BookType['keywords'];

    @Column('varchar', { length: 100, nullable: true}) // It's nullable because for setting the path for the image it needs the Id 
    imagePath!: string; // format: public/media/<id>.<image-format>

}
