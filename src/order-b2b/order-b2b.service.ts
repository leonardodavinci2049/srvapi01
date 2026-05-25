import { Injectable } from '@nestjs/common';


@Injectable()
export class OrderB2bService {

  findAll() {
    return `This action returns all orderB2b`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderB2b`;
  }


  remove(id: number) {
    return `This action removes a #${id} orderB2b`;
  }
}
