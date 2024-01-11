/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createVendorCategory = /* GraphQL */ `
  mutation CreateVendorCategory(
    $input: CreateVendorCategoryInput!
    $condition: ModelVendorCategoryConditionInput
  ) {
    createVendorCategory(input: $input, condition: $condition) {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const updateVendorCategory = /* GraphQL */ `
  mutation UpdateVendorCategory(
    $input: UpdateVendorCategoryInput!
    $condition: ModelVendorCategoryConditionInput
  ) {
    updateVendorCategory(input: $input, condition: $condition) {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const deleteVendorCategory = /* GraphQL */ `
  mutation DeleteVendorCategory(
    $input: DeleteVendorCategoryInput!
    $condition: ModelVendorCategoryConditionInput
  ) {
    deleteVendorCategory(input: $input, condition: $condition) {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const createPasscode = /* GraphQL */ `
  mutation CreatePasscode(
    $input: CreatePasscodeInput!
    $condition: ModelPasscodeConditionInput
  ) {
    createPasscode(input: $input, condition: $condition) {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const updatePasscode = /* GraphQL */ `
  mutation UpdatePasscode(
    $input: UpdatePasscodeInput!
    $condition: ModelPasscodeConditionInput
  ) {
    updatePasscode(input: $input, condition: $condition) {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const deletePasscode = /* GraphQL */ `
  mutation DeletePasscode(
    $input: DeletePasscodeInput!
    $condition: ModelPasscodeConditionInput
  ) {
    deletePasscode(input: $input, condition: $condition) {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
