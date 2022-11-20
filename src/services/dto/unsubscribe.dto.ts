import { IsString } from 'class-validator';

export class UnsubscribeDTO {
  @IsString()
  email: string;
}
