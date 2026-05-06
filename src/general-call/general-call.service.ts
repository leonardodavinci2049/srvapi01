import { Injectable } from '@nestjs/common';
import { CreateGeneralCallDto } from './dto/create-general-call.dto';
import { UpdateGeneralCallDto } from './dto/update-general-call.dto';

@Injectable()
export class GeneralCallService {
  create(createGeneralCallDto: CreateGeneralCallDto) {
    return 'This action adds a new generalCall';
  }

  findAll() {
    return `This action returns all generalCall`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalCall`;
  }

  update(id: number, updateGeneralCallDto: UpdateGeneralCallDto) {
    return `This action updates a #${id} generalCall`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalCall`;
  }
}
