import { IsEmail, IsString } from 'class-validator';

export class FeedbackDTO {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsEmail()
  email: string;
  @IsString()
  feedback_type: string;
}
