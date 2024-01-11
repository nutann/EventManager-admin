/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      location
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      type
      userName
      email
      image
      location
      bio
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        userName
        email
        image
        location
        bio
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      userID
      vendorID
      user {
        id
        type
        userName
        email
        image
        location
        bio
        phone
        createdAt
        updatedAt
      }
      vendorCategory {
        id
        vendorType
        vendorSubCategory
        createdAt
        updatedAt
      }
      longitude
      latitude
      createdAt
      updatedAt
      vendorUserId
      vendorVendorCategoryId
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        vendorID
        longitude
        latitude
        createdAt
        updatedAt
        vendorUserId
        vendorVendorCategoryId
        user {
          email
          id
          bio
          createdAt
          location
          image
          phone
          type
          updatedAt
          userName
        }
      }
      nextToken
    }
  }
`;
export const getVendorCategory = /* GraphQL */ `
  query GetVendorCategory($id: ID!) {
    getVendorCategory(id: $id) {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const listVendorCategories = /* GraphQL */ `
  query ListVendorCategories(
    $filter: ModelVendorCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vendorType
        vendorSubCategory
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userbyEmail = /* GraphQL */ `
  query UserbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userName
        email
        image
        location
        bio
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vendorbyUserID = /* GraphQL */ `
  query VendorbyUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorbyUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        vendorID
        longitude
        latitude
        createdAt
        updatedAt
        vendorUserId
        vendorVendorCategoryId
      }
      nextToken
    }
  }
`;
export const getPasscode = /* GraphQL */ `
  query GetPasscode($id: ID!) {
    getPasscode(id: $id) {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const listPasscodes = /* GraphQL */ `
  query ListPasscodes(
    $filter: ModelPasscodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPasscodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pass_code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
