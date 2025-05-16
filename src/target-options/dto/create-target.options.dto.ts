import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import { CommentEnum } from "../entities/target-options.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTargetOptionDto {
    @ApiProperty({example: 1, description: 'target id'})
    @IsNotEmpty()
    @IsNumber()
    targetId: number

    @ApiProperty({example: 'do you like our service?', description: 'question to user'})
    @IsNotEmpty()
    @IsString()
    question: string

    @ApiProperty({example: 'ok', description: 'comment'})
    @IsNotEmpty()
    @IsString()
    comment: CommentEnum
}