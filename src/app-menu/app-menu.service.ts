import { Injectable } from '@nestjs/common';
import { CreateAppMenuDto } from './dto/create-app-menu.dto';
import { UpdateAppMenuDto } from './dto/update-app-menu.dto';

@Injectable()
export class AppMenuService {
  create(createAppMenuDto: CreateAppMenuDto) {
    return 'This action adds a new appMenu';
  }

  findAll() {
    return `This action returns all appMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appMenu`;
  }

  update(id: number, updateAppMenuDto: UpdateAppMenuDto) {
    return `This action updates a #${id} appMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} appMenu`;
  }
}
