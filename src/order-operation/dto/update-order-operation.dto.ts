import { PartialType } from '@nestjs/swagger';
import { CreateOrderOperationDto } from './create-order-operation.dto';

export class UpdateOrderOperationDto extends PartialType(CreateOrderOperationDto) {}
