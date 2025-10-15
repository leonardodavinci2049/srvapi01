import { Injectable } from '@nestjs/common';

import { FindCategoryMenuDto } from './dto/find-category.menu.dto ';
import { findCategoryMenuQuery } from './query/find-category.menu.query';
import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { FindCategoryIdDto } from './dto/id-category.dto';
import { findCategoryIdQuery } from './query/id-category.query';
import {
  SpResultTaxonomyIdData,
  SpResultTaxonomyMenuData,
  tblCategoryRecords,
} from './types/category.type';

// Interface para categoria hierárquica
interface HierarchicalCategory extends tblCategoryRecords {
  children?: HierarchicalCategory[];
}

@Injectable()
export class CategoryService {
  constructor(private readonly dbService: DatabaseService) {}

  // Função para converter lista de categorias em estrutura hierárquica
  private buildHierarchy(
    categories: tblCategoryRecords[],
  ): HierarchicalCategory[] {
    const categoryMap = new Map<number, HierarchicalCategory>();
    const rootCategories: HierarchicalCategory[] = [];

    // Primeiro, criar um mapa de todas as categorias
    categories.forEach((category) => {
      categoryMap.set(category.ID_TAXONOMY!, { ...category, children: [] });
    });

    // Depois, construir a hierarquia
    categories.forEach((category) => {
      const categoryNode = categoryMap.get(category.ID_TAXONOMY!);

      if (
        category.PARENT_ID === 0 ||
        category.PARENT_ID === null ||
        category.PARENT_ID === undefined
      ) {
        // É uma categoria raiz
        rootCategories.push(categoryNode!);
      } else {
        // É uma categoria filha
        const parentNode = categoryMap.get(category.PARENT_ID);
        if (parentNode) {
          parentNode.children!.push(categoryNode!);
        }
      }
    });

    return rootCategories;
  }

  create() {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  async findCategoryMenu(dataJsonDto: FindCategoryMenuDto) {
    try {
      const queryString = findCategoryMenuQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyMenuData;

      const tblRecord = resultData[0];

      const qtRecords: number = tblRecord.length;

      if (qtRecords > 0) {
        // console.log('tblRecord', tblRecord);

        // Converter para estrutura hierárquica
        const hierarchicalCategories = this.buildHierarchy(tblRecord);

        // Criar nova estrutura de dados com categorias hierárquicas
        const hierarchicalResultData = [
          hierarchicalCategories,
          ...resultData.slice(1),
        ] as unknown as SpResultTaxonomyMenuData;

        return resultQueryData<SpResultTaxonomyMenuData>(
          qtRecords,
          0,
          '',
          hierarchicalResultData,
          qtRecords,
          '',
        );
      }

      return resultQueryData<SpResultTaxonomyMenuData>(
        qtRecords,
        0,
        '',
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

  async findCategoryId(dataJsonDto: FindCategoryIdDto) {
    try {
      const queryString = findCategoryIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyIdData;

      const tblRecord = resultData[0];

      const qtRecords: number = tblRecord.length;

      if (qtRecords > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultTaxonomyIdData>(
        qtRecords,
        0,
        '',
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

  update() {
    return `This action updates a  category`;
  }

  remove() {
    return `This action removes a  category`;
  }
}
