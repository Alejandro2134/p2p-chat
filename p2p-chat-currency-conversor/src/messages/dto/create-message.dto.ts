export class CreateMessageDto {
  content: string;
  user: string;

  constructor(content: string, user: string) {
    this.content = content;
    this.user = user;
  }
}
