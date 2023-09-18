const getProduct = gql`
  query FindProduct($findProductId: ID!) {
    findProduct(id: $findProductId) {
      color
      id
      name
      reviews {
        body
        id
      }
    }
  }
`;
