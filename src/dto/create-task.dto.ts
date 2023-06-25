import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "@nestjs/class-validator";

export /**interface**/ class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}
