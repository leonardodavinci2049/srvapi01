import { PartialType } from '@nestjs/swagger';
import { CreateCustomerUpdDto } from './create-customer-upd.dto';

export class UpdateCustomerUpdDto extends PartialType(CreateCustomerUpdDto) {}
