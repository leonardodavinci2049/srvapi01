import { Test, TestingModule } from '@nestjs/testing';
import { OrderReportsService } from './order-reports.service';

describe('OrderReportsService', () => {
  let service: OrderReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderReportsService],
    }).compile();

    service = module.get<OrderReportsService>(OrderReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
