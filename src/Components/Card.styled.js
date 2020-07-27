import styled from "styled-components";

export const StyledCard = styled.div`
  width: 300px;
  min-height: 350px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  @media (min-width: 700px) {
    width: 400px;
    min-height: 350px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center
    position: relative;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }
  @media (min-width: 1025px) {
    width: 550px;
    min-height: 500px;
    position: relative;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }
`;
