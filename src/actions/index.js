export const updatePostcode = (postcode) => {
  return {
    type: 'UPDATE_POSTCODE',
    postcode
  };
};

export const updateMoney = (money) => {
  return {
    type: 'UPDATE_MONEY',
    money
  };
};

export const search = (postcode, money) => {
  return {
    type: 'SEARCH',
    postcode,
    money
  }
}
