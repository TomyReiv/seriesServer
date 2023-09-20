import { IsBoolean, IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    id_saved:string;
    @IsString()
    name:string;
    @IsString()
    title:string;
    @IsString()
    image:string;
    @IsBoolean()
    complete:boolean;
}
