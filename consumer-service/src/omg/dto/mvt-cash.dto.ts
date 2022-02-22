import {
  IsBoolean,
  IsDefined,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class MvtCashDto {
  @IsString()
  @MinLength(4)
  @IsDefined()
  sender: string;
  @IsString()
  @MinLength(4)
  @IsDefined()
  receiver: string;
  @IsDefined()
  @IsPositive()
  amount: number;
  @IsDefined()
  @IsBoolean()
  newed: boolean;
}
