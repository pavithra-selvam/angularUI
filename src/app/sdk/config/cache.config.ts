import { endpoints } from "./api.config";
import { pgmendpoints } from "./api.config";
import { cacheableItem } from "./../features/caching/cache.model";

// Default expiry of cache in seconds
export const defaultExpiry = 3600;

/**
 * List of apiPaths that will be cached.
 * See cacheItem model for descriptions on the properties.
 */
export const cacheWhitelist: cacheableItem[] = [
  {
    name: "constantTypes",
    apiPath: endpoints.constants.fetch,
    invalidatedBy: [],
    expiresIn: 3600 * 24 * 7 * 4
  },
  {
    name: "contacts",
    apiPath: endpoints.contacts.fetch,
    invalidatedBy: [],
    expiresIn: 3600
  },
  {
    name: "programs",
    apiPath: pgmendpoints.programs.fetch,
    invalidatedBy: [],
    expiresIn: 3600
  }
];
