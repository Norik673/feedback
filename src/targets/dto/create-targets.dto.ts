import { IsString, IsNumber, IsNotEmpty, IsOptional, MinLength, MaxLength, Max } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTargetDto {
    @ApiProperty({example: 5, description: 'rating target'})
    @IsNumber()
    @IsOptional()
    @Max(100)
    rating?: number;

    @ApiProperty({example: 'room', description: 'target name'})
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @MinLength(3)
    name: string;
}