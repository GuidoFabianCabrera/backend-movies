import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested, IsOptional, ValidateIf, ValidationOptions, IsDefined, IsNotEmptyObject, IsObject, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

function IsNullable(validationOptions?: ValidationOptions) {
  return ValidateIf((_object, value) => value !== null, validationOptions);
}

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly duration: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly stars: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly reviewsCount: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly genre: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly age: string;

  @IsString()
  @ApiProperty()
  readonly imageUrl: string;

  @IsString()
  @ApiProperty()
  readonly videoUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly casts: string[];
}

export class UpdateMovieDto extends PartialType(CreateMovieDto) { }
