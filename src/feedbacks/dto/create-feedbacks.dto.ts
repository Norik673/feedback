import { IsString, IsNumber, IsNotEmpty, IsOptional, MaxLength, MinLength, Max } from "class-validator";
import { TypeEnum } from "../entities/feedbacks.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedbackDto {
    @ApiProperty({example: 1, description: 'target id'})
    @IsNotEmpty()
    @IsNumber()
    targetId: number;

    @ApiProperty({example: 5, description: 'grade feedback'})
    @IsNumber()
    @IsOptional()
    @Max(100)
    grade?: number;

    @ApiProperty({example: 'good', description: 'comment'})
    @IsString()
    @IsOptional()
    @MinLength(2)
    comment?: string;

    @ApiProperty({example: 'ok', description: 'type feedback'})
    @IsOptional()
    type?: TypeEnum;
}