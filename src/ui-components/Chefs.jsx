/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Vendor } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ChefProfile from "./ChefProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function Chefs(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Vendor,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Chefs")}
    >
      {(item, index) => (
        <ChefProfile
          ChefProperties={item}
          height="auto"
          width="auto"
          margin="2rem 2rem 2rem 2rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ChefProfile>
        
      )}
    </Collection>
  );
}
