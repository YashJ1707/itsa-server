import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Unsubscribable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDTO, SubscribeDTO, UnsubscribeDTO } from './dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  //API to subscribe email
  async subscribeEmail(dto: SubscribeDTO) {
    try {
      const response = await this.prisma.subscribe.create({
        data: {
          email: dto.email,
          name: dto.name,
        },
      });
      if (!response) {
        console.log('Email already subscribed');
      }
      console.log(response);
      return { message: 'Email Subscribed successfully', success: true };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return { message: 'Email already subscribed', success: false };
        }
        return { message: 'Uknown error occured', success: false };
      }
    }
  }

  async unsubscribeEmail(dto: UnsubscribeDTO) {
    try {
      const response = await this.prisma.subscribe.delete({
        where: {
          email: dto.email,
        },
      });
      return { message: 'Email Unsubscribed', success: true };
    } catch (error) {
      console.log(error);

      return { message: 'Uknown error occured', success: false };
    }
  }

  async saveFeedbackToDB(dto: FeedbackDTO) {
    try {
      const response = await this.prisma.feedback.create({
        data: {
          email: dto.email,
          feedback_type: dto.feedback_type,
          first_name: dto.first_name,
          last_name: dto.last_name,
        },
      });
      return { message: 'Feedback registered successfully', success: true };
    } catch (error) {
      console.log(error);

      return { message: 'Uknown error occured', success: false };
    }
  }
}
