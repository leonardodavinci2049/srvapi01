import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdAccountInternetDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsOptional()
  @IsString({ message: 'WEBSITE must be a valid string', each: true })
  WEBSITE: string;

  @IsOptional()
  @IsString({ message: 'FACEBOOK must be a valid string', each: true })
  FACEBOOK: string;

  @IsOptional()
  @IsString({ message: 'TWITTER must be a valid string', each: true })
  TWITTER: string;

  @IsOptional()
  @IsString({ message: 'LINKEDIN must be a valid string', each: true })
  LINKEDIN: string;

  @IsOptional()
  @IsString({ message: 'INSTAGRAM must be a valid string', each: true })
  INSTAGRAM: string;

  @IsOptional()
  @IsString({ message: 'TIKTOK must be a valid string', each: true })
  TIKTOK: string;

  @IsOptional()
  @IsString({ message: 'TELEGRAM must be a valid string', each: true })
  TELEGRAM: string;
}
