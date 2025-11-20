import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  create() {
    return 'This action adds a new system';
  }
}
