import { Test, TestingModule } from '@nestjs/testing';
import { OrderOperationController } from './order-operation.controller';
import { OrderOperationService } from './order-operation.service';

describe('OrderOperationController', () => {
  let controller: OrderOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderOperationController],
      providers: [OrderOperationService],
    }).compile();

    controller = module.get<OrderOperationController>(OrderOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
