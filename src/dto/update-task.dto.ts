import { IsBoolean, IsOptional, IsString } from "@nestjs/class-validator";

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}