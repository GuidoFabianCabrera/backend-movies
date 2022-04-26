import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested, IsOptional, ValidateIf, ValidationOptions, IsDefined, IsNotEmptyObject, IsObject } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

function IsNullable(validationOptions?: ValidationOptions) {
  return ValidateIf((_object, value) => value !== null, validationOptions);
}

// class Origin {
//   @IsNullable()
//   @IsOptional()
//   @IsString()
//   @ApiProperty()
//   readonly name: string;

//   @IsNullable()
//   @IsOptional()
//   @IsString()
//   @ApiProperty()
//   readonly url: string;
// }

export class CreateActorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly bannerUrl: string;

  @IsString()
  @ApiProperty()
  readonly photoUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly birthday: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly genre: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly movies: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly biography: string;

}

export class UpdateActorDto extends PartialType(CreateActorDto) { }
