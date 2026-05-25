import { PartialType } from '@nestjs/swagger';
import { CreateOrderB2bDto } from './create-order-b2b.dto';

export class UpdateOrderB2bDto extends PartialType(CreateOrderB2bDto) {}
