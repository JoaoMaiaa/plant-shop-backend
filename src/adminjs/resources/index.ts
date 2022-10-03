import { ResourceWithOptions } from "adminjs";
import { Category, Consumer, Product } from "../../models";
import { consumerResourceOptions } from "./consumer";
import { categoryResourceOptions } from "./category";
import { productResourceOptions, productResourceFeatures } from "./product";

export const adminJsResource: ResourceWithOptions[] = [
  {
    resource: Consumer,
    options: consumerResourceOptions,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Product,
    options: productResourceOptions,
    features: productResourceFeatures,
  },
];
