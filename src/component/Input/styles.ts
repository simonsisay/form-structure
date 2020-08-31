import styled from "styled-components";
// import { textStyles } from "../../globalText";

type DivProps = {
  hasError: boolean;
};

export const Container = styled.div<DivProps>`
  width: 100%;
`;
