import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export default class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string

  @Column()
  content: string
}