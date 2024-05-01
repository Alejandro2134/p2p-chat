import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Message extends Model<Message> {
  @Column
  content: string;

  @Column
  user: string;
}
