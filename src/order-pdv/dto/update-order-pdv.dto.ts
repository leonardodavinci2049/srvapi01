import { PartialType } from '@nestjs/swagger';
import { CreateOrderPdvDto } from './create-order-pdv.dto';

export class UpdateOrderPdvDto extends PartialType(CreateOrderPdvDto) {}
