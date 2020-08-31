import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: 10vh auto;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  position: relative;
  background-color: white;
  border: 4px solid white;
  padding: 40px 120px;

  .progress {
    position: absolute;
    top: -3px;
    left: -4px;
    height: 10px;
    width: 20%;
    background: #51baf7;
  }

  .left-content {
    display: grid;
    grid-template-columns: 200px;

    div .number {
      font-size: 32px;
    }
  }
`;
