import React from "react";
import PropTypes from "prop-types";
import { ArrowDownIcon, ColapserDiv, ColapserText, IconButton } from "./styles";

const Colapser = ({ menuSection }) => (
  <ColapserDiv>
    <ColapserText>{menuSection?.name}</ColapserText>
    <IconButton>
      <ArrowDownIcon />
    </IconButton>
  </ColapserDiv>
);
Colapser.propTypes = {
  menuSection: PropTypes.shape({
    name: PropTypes.string,
  }),
};
export default Colapser;
