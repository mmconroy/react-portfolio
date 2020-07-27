import styled from "styled-components";

export const StyledAboutMe = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
}
@media (min-width: 750px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}
@media (min-width: 999px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem;
    margin-top: 3rem;
    width: 55%;
    }
}`;
