import { Category } from "../models/Category";

export const categoryService = {
  index: async () => {
    const categories = await Category.findAll();
    return categories;
  },

  findCategoryByName: async (name: string) => {
    const category = await Category.findAll({
      where: { name },
      include: {
        association: "products",
      },
    });
    return category;
  },
};
