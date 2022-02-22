import { IsDefined, IsPositive, IsString, MinLength } from 'class-validator';
export class MvtOperationDto {
  @IsString()
  @MinLength(4)
  @IsDefined()
  owner: string;
  @IsString()
  @MinLength(4)
  @IsDefined()
  account: string;
  @IsDefined()
  @IsPositive()
  price: number;
}
