import React, { Component } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { listVendors } from "../../graphql/queries";
import { Amplify, Storage } from "aws-amplify";
import { Button, Image } from "@aws-amplify/ui-react";

import { Chefs } from "../../ui-components";

export default class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = { chefs: [], responseUrl: "" };
  }
  componentDidMount() {
    this.listQuery();
  }
  listQuery = async () => {
    console.log("listing todos");
    const allChefs = await API.graphql(graphqlOperation(listVendors));
    let items = allChefs.data.listVendors.items;
    const newItems = await Promise.all(
      items.map(async (item) => {
        const imageUri = "public/users/" + item.userID + "/profileImg";
        console.log("imageUrl for " + item.user.userName + "" + imageUri);
        const imageUrl = await Storage.get(imageUri);
        item.image = imageUrl;
        console.log("imageUrl " + imageUrl);
        return item;
      })
    );

    this.setState({
      chefs: newItems.filter((chef) => chef._deleted != true),
      responseUrl: newItems[0].image,
    });
  };
  render() {
    return (
      <>
        <Button
          display="flex"
          gap="0"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          onClick={() => {
            this.props.signOut();
          }}
        ></Button>
        <Chefs overrides={{ Chefs: { items: this.state.chefs } }} />
      </>
    );
  }
}
