import { PartialType } from '@nestjs/swagger';
import { CreateOrderUpdDto } from './create-order-upd.dto';

export class UpdateOrderUpdDto extends PartialType(CreateOrderUpdDto) {}
