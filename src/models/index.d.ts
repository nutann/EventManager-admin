import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendorCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PasscodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPost = {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly description: string;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly description: string;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerUser = {
  readonly id: string;
  readonly type: string;
  readonly userName: string;
  readonly email: string;
  readonly image?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly type: string;
  readonly userName: string;
  readonly email: string;
  readonly image?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerVendor = {
  readonly id: string;
  readonly userID: string;
  readonly vendorID: string;
  readonly user?: User | null;
  readonly vendorCategory?: VendorCategory | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorUserId?: string | null;
  readonly vendorVendorCategoryId?: string | null;
}

type LazyVendor = {
  readonly id: string;
  readonly userID: string;
  readonly vendorID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly vendorCategory: AsyncItem<VendorCategory | undefined>;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorUserId?: string | null;
  readonly vendorVendorCategoryId?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor, VendorMetaData>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor, VendorMetaData>) => MutableModel<Vendor, VendorMetaData> | void): Vendor;
}

type EagerVendorCategory = {
  readonly id: string;
  readonly vendorType: string;
  readonly vendorSubCategory?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendorCategory = {
  readonly id: string;
  readonly vendorType: string;
  readonly vendorSubCategory?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VendorCategory = LazyLoading extends LazyLoadingDisabled ? EagerVendorCategory : LazyVendorCategory

export declare const VendorCategory: (new (init: ModelInit<VendorCategory, VendorCategoryMetaData>) => VendorCategory) & {
  copyOf(source: VendorCategory, mutator: (draft: MutableModel<VendorCategory, VendorCategoryMetaData>) => MutableModel<VendorCategory, VendorCategoryMetaData> | void): VendorCategory;
}

type EagerPasscode = {
  readonly id: string;
  readonly pass_code?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPasscode = {
  readonly id: string;
  readonly pass_code?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Passcode = LazyLoading extends LazyLoadingDisabled ? EagerPasscode : LazyPasscode

export declare const Passcode: (new (init: ModelInit<Passcode, PasscodeMetaData>) => Passcode) & {
  copyOf(source: Passcode, mutator: (draft: MutableModel<Passcode, PasscodeMetaData>) => MutableModel<Passcode, PasscodeMetaData> | void): Passcode;
}