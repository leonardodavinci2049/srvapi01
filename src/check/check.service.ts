import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { PrismaService } from 'src/prisma/prisma.service';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { CheckRecordsType } from './types/check.type';

import { CheckIfExistsDto } from './dto/check-if-exists.dto';

@Injectable()
export class CheckService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly prisma: PrismaService,
  ) {}

  async tskCheckIfEmailExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o email para comparação (trim e lowercase)
      const emailNormalizado = pe_term.trim().toLowerCase();

      // Consulta Prisma para verificar se o email existe
      const pessoa = await this.prisma.tbl_pessoa.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          EMAIL_DE_LOGIN: emailNormalizado,
        },
        select: {
          ID_TBL_PESSOA: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = pessoa?.ID_TBL_PESSOA ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = pessoa ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = pessoa
        ? 'E-mail já cadastrado na base de dados'
        : 'E-mail disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: pessoa ? 1 : 0,
        ID_RECORD: recordId,
      };

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCheckIfCpfExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o CPF para comparação (remove caracteres não numéricos)
      const cpfNormalizado = pe_term.replace(/\D/g, '');

      // Consulta Prisma para verificar se o CPF existe
      const pessoa = await this.prisma.tbl_pessoa.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          CPF: cpfNormalizado,
        },
        select: {
          ID_TBL_PESSOA: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = pessoa?.ID_TBL_PESSOA ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = pessoa ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = pessoa
        ? 'CPF já cadastrado na base de dados'
        : 'CPF disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: recordId > 1 ? 1 : 0,
        ID_RECORD: recordId,
      };

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCheckIfCnpjExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o CNPJ para comparação (remove caracteres não numéricos)
      const cnpjNormalizado = pe_term.replace(/\D/g, '');

      // Consulta Prisma para verificar se o CNPJ existe
      const pessoa = await this.prisma.tbl_pessoa.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          CNPJ: cnpjNormalizado,
        },
        select: {
          ID_TBL_PESSOA: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = pessoa?.ID_TBL_PESSOA ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = pessoa ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = pessoa
        ? 'CNPJ já cadastrado na base de dados'
        : 'CNPJ disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: recordId > 1 ? 1 : 0,
        ID_RECORD: recordId,
      };

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCheckIfTaxonomySlugExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o slug para comparação (trim e lowercase)
      const slugNormalizado = pe_term.trim().toLowerCase();

      // Consulta Prisma para verificar se o slug existe
      const taxonomy = await this.prisma.tbl_taxonomy.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          SLUG: slugNormalizado,
        },
        select: {
          ID_TAXONOMY: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = taxonomy?.ID_TAXONOMY ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = taxonomy ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = taxonomy
        ? 'Slug já cadastrado na base de dados'
        : 'Slug disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: recordId > 1 ? 1 : 0,
        ID_RECORD: recordId,
      };

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCheckIfProductNameExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o nome do produto para comparação (trim)
      const produtoNormalizado = pe_term.trim();

      // Consulta Prisma para verificar se o nome do produto existe
      const produto = await this.prisma.tbl_produto.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          PRODUTO: produtoNormalizado,
          INATIVO: 0,
        },
        select: {
          ID_TBL_PRODUTO: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = produto?.ID_TBL_PRODUTO ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = produto ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = produto
        ? 'Nome do produto já cadastrado na base de dados'
        : 'Nome do produto disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: recordId > 1 ? 1 : 0,
        ID_RECORD: recordId,
      };

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCheckIfProductSlugExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const { pe_system_client_id, pe_term } = dataJsonDto;

      // Normaliza o slug para comparação (trim e lowercase)
      const slugNormalizado = pe_term.trim().toLowerCase();

      // Consulta Prisma para verificar se o slug do produto existe
      const produto = await this.prisma.tbl_produto.findFirst({
        where: {
          ID_SYSTEM_CLIENTE: pe_system_client_id,
          SLUG: slugNormalizado,
          INATIVO: 0,
        },
        select: {
          ID_TBL_PRODUTO: true,
        },
      });

      // Valor do id retornado caso exista
      const recordId: number = produto?.ID_TBL_PRODUTO ?? 0;

      // Quantidade de registros retornados
      const qtRecords: number = produto ? 1 : 0;

      // Código do erro (0 = sem erro)
      const errorId: number = 0;

      // Mensagem de feedback
      const Feedback: string = produto
        ? 'Slug do produto já cadastrado na base de dados'
        : 'Slug do produto disponível para cadastro';

      // Objeto resultData com as informações solicitadas
      const resultData: CheckRecordsType = {
        ID_CHECK: recordId > 1 ? 1 : 0,
        ID_RECORD: recordId,
      };

      return resultQueryData<CheckRecordsType>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
