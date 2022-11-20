import { IsBoolean, IsString } from 'class-validator';

export class ResponseDTO {
  @IsBoolean()
  success: boolean;
  @IsString()
  message: string;
}
