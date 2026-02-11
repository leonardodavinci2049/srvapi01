import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { CustomerUpdInlEmailDto } from './dto/customer-upd-inl-email.dto';
import { CustomerUpdInlNameDto } from './dto/customer-upd-inl-name.dto';
import { CustomerUpdInlNotesDto } from './dto/customer-upd-inl-notes.dto';
import { CustomerUpdInlPhoneDto } from './dto/customer-upd-inl-phone.dto';
import { CustomerUpdInlSellerIdDto } from './dto/customer-upd-inl-seller-id.dto';
import { CustomerUpdInlTypeCustomerDto } from './dto/customer-upd-inl-type-customer.dto';
import { CustomerUpdInlTypePersonDto } from './dto/customer-upd-inl-type-person.dto';
import { CustomerUpdInlWhatsappDto } from './dto/customer-upd-inl-whatsapp.dto';
import { SpResultRecordUpdateType } from './types/costumer-inline.type';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

import { CustomerUpdInlEmailQuery } from './query/customer-upd-inl-email.query';
import { CustomerUpdInlNameQuery } from './query/customer-upd-inl-name.query';

import { CustomerUpdInlNotesQuery } from './query/customer-upd-inl-notes.query';
import { CustomerUpdInlPhoneQuery } from './query/customer-upd-inl-phone.query';
import { CustomerUpdInlSellerIdQuery } from './query/customer-upd-inl-seller-id.query';
import { CustomerUpdInlTypeCustomerQuery } from './query/customer-upd-inl-type-customer.query';
import { CustomerUpdInlTypePersonQuery } from './query/customer-upd-inl-type-person.query';
import { CustomerUpdInlWhatsappQuery } from './query/customer-upd-inl-whatsapp.query';

@Injectable()
export class CustomerInlineService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new customerInline';
  }

  async TaskCustomerUpdInlEmail(dataJsonDto: CustomerUpdInlEmailDto) {
    try {
      const queryString = CustomerUpdInlEmailQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update email failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdInlName(dataJsonDto: CustomerUpdInlNameDto) {
    try {
      const queryString = CustomerUpdInlNameQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update name failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async TaskCustomerUpdInlNotes(dataJsonDto: CustomerUpdInlNotesDto) {
    try {
      const queryString = CustomerUpdInlNotesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update notes failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async TaskCustomerUpdInlPhone(dataJsonDto: CustomerUpdInlPhoneDto) {
    try {
      const queryString = CustomerUpdInlPhoneQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update phone failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async TaskCustomerUpdInlSellerId(dataJsonDto: CustomerUpdInlSellerIdDto) {
    try {
      const queryString = CustomerUpdInlSellerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update seller ID failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async TaskCustomerUpdInlTypeCustomer(
    dataJsonDto: CustomerUpdInlTypeCustomerDto,
  ) {
    try {
      const queryString = CustomerUpdInlTypeCustomerQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update type customer failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdInlTypePerson(dataJsonDto: CustomerUpdInlTypePersonDto) {
    try {
      const queryString = CustomerUpdInlTypePersonQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update type person failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdInlWhatsapp(dataJsonDto: CustomerUpdInlWhatsappDto) {
    try {
      const queryString = CustomerUpdInlWhatsappQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update WhatsApp failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
