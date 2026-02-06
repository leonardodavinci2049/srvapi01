import { Test, TestingModule } from '@nestjs/testing';
import { OrderReportsController } from './order-reports.controller';
import { OrderReportsService } from './order-reports.service';

describe('OrderReportsController', () => {
  let controller: OrderReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderReportsController],
      providers: [OrderReportsService],
    }).compile();

    controller = module.get<OrderReportsController>(OrderReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
