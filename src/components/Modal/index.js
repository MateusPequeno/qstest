import React, { memo, useContext, useState } from "react";
import PropTypes from "prop-types";

import {
  determineButtonActivity,
  formatCurrency,
  priceCalculator,
} from "utils";

import ItemCounter from "components/ItemCounter";
import { BasketContext } from "contexts/Basket";
import CustomButton from "components/CustomButton";

import {
  Card,
  CloseButton,
  CloseButtonAux,
  ColumnDiv,
  CustomButtonContainer,
  FooterDiv,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalImage,
  ModifierItemSubText,
  ModifierItemText,
  ModifierOptionsCard,
  ModifiersCard,
  OptionsDiv,
  RadioCircle,
} from "./styles";

const Modal = ({ onClose, modalData }) => {
  const modalHasAImage = modalData?.images?.length > 0;
  const { addToBasket } = useContext(BasketContext);
  const [selectedModifier, setSelectedModifier] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleModifierClick = (modifierItem) => {
    setSelectedModifier(modifierItem);
  };
  const handleCustomButtonClick = (selectedModifier, onClose) => {
    // eslint-disable-next-line no-unused-vars
    const { modifiers, ...updatedModalData } = modalData;
    updatedModalData.quantity = itemQuantity;

    if (selectedModifier) {
      updatedModalData.selectedModifier = selectedModifier;
    }

    onClose();
    addToBasket(updatedModalData);
  };

  return (
    <ModalContainer>
      <ModalContent pushtobottom={modalHasAImage ? false : true}>
        {modalHasAImage && <CloseButton onClick={onClose}>X</CloseButton>}
        {modalHasAImage && (
          <ModalImage src={modalData?.images[0]?.image} alt="Modal Image" />
        )}
        <Card>
          {!modalHasAImage && (
            <CloseButtonAux onClick={onClose}>X</CloseButtonAux>
          )}
          <ModalHeader>{modalData?.name}</ModalHeader>
          <ModalDescription>{modalData?.description}</ModalDescription>
        </Card>
        {modalData?.modifiers?.map((modifierItem, index) => (
          <React.Fragment key={index.toString()}>
            <ModifierOptionsCard>
              <ColumnDiv>
                <ModifierItemText>{modifierItem?.name}</ModifierItemText>
                <ModifierItemSubText>Select 1 option</ModifierItemSubText>
              </ColumnDiv>
            </ModifierOptionsCard>
            <OptionsDiv>
              {modifierItem?.items?.map((item, subIndex) => {
                const is_selected = selectedModifier?.id === item.id;
                return (
                  <ModifiersCard
                    key={subIndex.toString()}
                    onClick={() => handleModifierClick(item)}
                  >
                    <ColumnDiv>
                      <ModifierItemText>{item?.name}</ModifierItemText>
                      <ModifierItemSubText>
                        {formatCurrency(item?.price)}
                      </ModifierItemSubText>
                    </ColumnDiv>
                    <RadioCircle checked={is_selected.toString()} />
                  </ModifiersCard>
                );
              })}
            </OptionsDiv>
          </React.Fragment>
        ))}
        <FooterDiv>
          <ItemCounter
            onMinusClick={(itemQuantity) => {
              if (itemQuantity <= 1) return;
              setItemQuantity(itemQuantity - 1);
            }}
            onPlusClick={(itemQuantity) => {
              setItemQuantity(itemQuantity + 1);
            }}
            number={itemQuantity}
          />
          <CustomButtonContainer>
            <CustomButton
              active={determineButtonActivity(selectedModifier, modalData)}
              buttonText={`Add to order \u2022 ${priceCalculator(
                selectedModifier?.price,
                modalData?.price,
                itemQuantity,
                modalData
              )}`}
              onClick={() => {
                handleCustomButtonClick(selectedModifier, onClose);
              }}
            />
          </CustomButtonContainer>
        </FooterDiv>
      </ModalContent>
    </ModalContainer>
  );
};

Modal.propTypes = {
  modalData: PropTypes.shape({
    images: PropTypes.array,
    image: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    modifiers: PropTypes.array,
    price: PropTypes.number,
  }),
  onClose: PropTypes.node.isRequired,
};

export default memo(Modal);
