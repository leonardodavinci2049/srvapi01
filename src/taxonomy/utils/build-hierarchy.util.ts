import { TblTaxonomyFindMenu } from '../types/taxonomy.type';

// Interface para categoria hierárquica
export interface HierarchicalCategory extends TblTaxonomyFindMenu {
  children?: HierarchicalCategory[];
}

/**
 * Função para converter lista de categorias em estrutura hierárquica
 * @param categories - Lista de categorias a serem organizadas
 * @returns Array de categorias raiz com suas respectivas subcategorias
 */
export function buildHierarchy(
  categories: TblTaxonomyFindMenu[],
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
