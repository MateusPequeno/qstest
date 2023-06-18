export function formatCurrency(value) {
  // Check if the value is a number
  if (typeof value !== "number") return;

  // Convert the number to a fixed decimal point with two digits
  const formattedValue = value.toFixed(2);

  // Format the number with thousands separators and currency symbol
  const formattedCurrency =
    "R$ " +
    formattedValue.replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

  return formattedCurrency;
}

export function determineWhichPriceToShow(item) {
  const price = item?.modifiers?.[0]?.items?.[0]?.price ?? item?.price;
  return formatCurrency(price);
}

export const priceCalculator = (
  modifierPrice,
  modalDataPrice,
  itemQuantity,
  modalData
) => {
  if (modalDataPrice === 0 && !modifierPrice)
    return formatCurrency(
      itemQuantity * modalData?.modifiers[0]?.items[0]?.price
    );
  if (modifierPrice) {
    return formatCurrency(itemQuantity * modifierPrice);
  } else {
    return formatCurrency(itemQuantity * modalDataPrice);
  }
};

export const determineButtonActivity = (selectedModifier, modalData) => {
  if (modalData.modifiers && modalData.modifiers.length > 0) {
    return selectedModifier ? true : false;
  } else {
    return true;
  }
};
