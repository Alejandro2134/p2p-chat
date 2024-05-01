import { HttpException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './models/message.model';
import { lastValueFrom, map } from 'rxjs';

const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY || '';

type currencyApiRes = {
  base: string;
  amount: number;
  result: { [key: string]: number; rate: number };
};

@Injectable()
export class MessagesService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Message) private messageModel: typeof Message,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<CreateMessageDto> {
    try {
      const [amount, from, to] = createMessageDto.content.split(' ');

      const currency = await lastValueFrom<currencyApiRes>(
        this.httpService
          .get(
            `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${CURRENCY_API_KEY}`,
          )
          .pipe(map((response) => response.data)),
      );

      await this.messageModel.create({
        content: createMessageDto.content,
        user: createMessageDto.user,
      });

      const res = new CreateMessageDto(
        currency.result[to].toString(),
        createMessageDto.user,
      );

      return res;
    } catch (error) {
      throw new HttpException('Unexpected error', 500);
    }
  }
}
