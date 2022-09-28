import { ResourceWithOptions } from "adminjs";
import { Consumer } from "../../models";
import { ConsumerResourceOptions } from "./consumer";

export const adminJsResource: ResourceWithOptions[] = [
  {
    resource: Consumer,
    options: ConsumerResourceOptions,
  },
];
