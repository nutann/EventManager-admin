/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
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
export const onCreateVendorCategory = /* GraphQL */ `
  subscription OnCreateVendorCategory {
    onCreateVendorCategory {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVendorCategory = /* GraphQL */ `
  subscription OnUpdateVendorCategory {
    onUpdateVendorCategory {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVendorCategory = /* GraphQL */ `
  subscription OnDeleteVendorCategory {
    onDeleteVendorCategory {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePasscode = /* GraphQL */ `
  subscription OnCreatePasscode {
    onCreatePasscode {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePasscode = /* GraphQL */ `
  subscription OnUpdatePasscode {
    onUpdatePasscode {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePasscode = /* GraphQL */ `
  subscription OnDeletePasscode {
    onDeletePasscode {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
