import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackDTO, SubscribeDTO, UnsubscribeDTO } from './dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private service: ServicesService) {}
  @Post('subscribe')
  subscibeEmail(@Body() dto: SubscribeDTO) {
    return this.service.subscribeEmail(dto);
  }
  @Post('unsubscribe')
  unSubscribeEmail(@Body() dto: UnsubscribeDTO) {
    return this.service.unsubscribeEmail(dto);
  }
  @Post('feedback')
  saveFeedbackToDB(@Body() dto: FeedbackDTO) {
    return this.service.saveFeedbackToDB(dto);
  }
}
