import { Test, TestingModule } from '@nestjs/testing';
import { OrderUpdController } from './order-upd.controller';
import { OrderUpdService } from './order-upd.service';

describe('OrderUpdController', () => {
  let controller: OrderUpdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderUpdController],
      providers: [OrderUpdService],
    }).compile();

    controller = module.get<OrderUpdController>(OrderUpdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
