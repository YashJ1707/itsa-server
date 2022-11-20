import { IsString } from 'class-validator';

export class SubscribeDTO {
  @IsString()
  name: string;
  @IsString()
  email: string;
}
