import { Test, TestingModule } from '@nestjs/testing';
import { OrderOperationService } from './order-operation.service';

describe('OrderOperationService', () => {
  let service: OrderOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderOperationService],
    }).compile();

    service = module.get<OrderOperationService>(OrderOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
