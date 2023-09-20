import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
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
