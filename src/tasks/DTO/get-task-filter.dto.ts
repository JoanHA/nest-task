import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../tasks.model";
import { Optional } from "@nestjs/common";

export class GetTaskFilterDto{
    @IsOptional()
    @IsEnum(TaskStatus)
    status?:TaskStatus;
    @IsOptional()
    @IsString()
    search?:string
}