// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, User, Vendor, VendorCategory, Passcode } = initSchema(schema);

export {
  Post,
  User,
  Vendor,
  VendorCategory,
  Passcode
};