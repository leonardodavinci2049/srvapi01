import { PartialType } from '@nestjs/swagger';
import { CreateOrderSaleDto } from './create-order-sale.dto';

export class UpdateOrderSaleDto extends PartialType(CreateOrderSaleDto) {}
