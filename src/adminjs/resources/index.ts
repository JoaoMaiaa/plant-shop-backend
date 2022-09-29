import { ResourceWithOptions } from "adminjs";
import { Comment, Consumer } from "../../models";
import { commentResourceOptions } from "./comment";
import { consumerResourceOptions } from "./consumer";

export const adminJsResource: ResourceWithOptions[] = [
  {
    resource: Consumer,
    options: consumerResourceOptions,
  },
  {
    resource: Comment,
    options: commentResourceOptions,
  },
];
