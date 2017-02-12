export const updatePostcode = (postcode) => {
  return {
    type: 'UPDATE_POSTCODE',
    postcode
  }
};

export const updateMoney = (money) => {
  return {
    type: 'UPDATE_MONEY',
    money
  }
};

export const search = (postcode, money) => {
  return {
    type: 'SEARCH_REQUESTED',
    postcode,
    money
  }
};

export const location = (lat, lng) => {
  return {
    type: 'GEOPRODUCT_SEARCH_REQUESTED',
    lat,
    lng
  }
};
