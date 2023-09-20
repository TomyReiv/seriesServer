import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Auth } from './entities/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>
  ){}

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {

    try{
      const newRegister = new this.authModel(createAuthDto)
      return await newRegister.save();
    }
    catch(error){
      if(error.code === 11000){
        throw new BadRequestException(`${createAuthDto.id_saved} already exist!`)
      } throw new InternalServerErrorException('Something terrible happend!')
    }
  }

  findAll() {
    return this.authModel.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }

  async  update(id: string, updateAuthDto: UpdateAuthDto): Promise<Auth>  {
    try {
      const updatedDocument = await this.authModel.findByIdAndUpdate(id, updateAuthDto, { new: true }); 
      return updatedDocument
    } catch (error) {
      throw new NotFoundException('Error encontrado');
    }
  }

 async remove(id: string) {
  try{
    const register = await this.authModel.findByIdAndDelete(id).exec();
    
    if (!register) {
      throw new NotFoundException('Registro no encontrado');
    } return `${register._id} deleted!`
  }catch(error){
    throw new NotFoundException('Registro no encontrado');
  }
  }
}
