import { IsString, IsInt, IsDate, IsOptional, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsDate()
  publishedDate: Date;

  @IsInt()
  pages: number;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsDate()
  @IsOptional()
  publishedDate?: Date;

  @IsNumber()
  @IsOptional()
  pages?: number;
}
