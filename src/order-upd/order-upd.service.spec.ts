import { Test, TestingModule } from '@nestjs/testing';
import { OrderUpdService } from './order-upd.service';

describe('OrderUpdService', () => {
  let service: OrderUpdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderUpdService],
    }).compile();

    service = module.get<OrderUpdService>(OrderUpdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
