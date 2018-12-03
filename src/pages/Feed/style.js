import { css } from 'emotion';
import styled from 'react-emotion';
import { yellow, purple, orange } from 'constants/colors';

export const body = css`
  svg {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
  button {
    text-transform: none !important;
    height: 36px !important;
    min-height: 36px !important;
  }
  .shadow {
    height: 100%;
    width: 100%;
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    background-color: rgba(45, 43, 43, 0.2);
  }
  #postType {
    display: none;
  }
`;

export const latestGrid = css`
  @media (max-width: 1268px) {
    display: none;
  }
`;

export const mainGrid = css`
  padding: 0px 15px;
  @media (max-width: 468px) {
    padding: 0px;
  }
  @media (max-width: 1269px) {
    padding-left: 0px;
  }
  @media (max-width: 599px) {
    padding-right: 0px;
  }
`;

export const latestTab = css`
  display: none;
  @media (max-width: 1268px) {
    display: block;
  }
`;

export const latest = css`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
`;
export const latestTitle = css`
  height: auto;
  padding: 10px;
  color: ${purple};
  font-size: 12px;
  letter-spacing: 0.4px;
  font-family: 'Intro';
`;

export const favoriteIcon = css`
  height: 24px;
`;

export const LatestContent = styled('div')`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 25vh;
  max-height: 190px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
  .info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    flex-direction: column;
    box-sizing: border-box;
    width: 55%;
    height: 39%;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.87);
    bottom: 0;
    left: 0;
    position: absolute;
    padding: 6px 13px;
    margin-right: 0px !important;
    p {
      padding: 2px 0;
    }
    div {
      padding: 1px 0;
      overflow-wrap: break-word;
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
      svg {
        height: 18px;
        margin-right: 5px;
        margin-left: -3px;
        margin-top: -1px;
      }
    }
    .title {
      font-family: 'Intro';
      color: rgba(0, 0, 0, 0.87);
    }
    .date {
      font-family: 'Intro';
      color: rgba(0, 0, 0, 0.54);
    }
  }
`;

export const main = css`
  background-color: #f7f7f7;
`;

export const MainContent = styled('div')`
  border-radius: 3px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  background-color: white;
  margin-bottom: 15px;
  height: auto;
  width: 100%;
  p {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: 0.4px;
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const Image = styled('div')`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 350px;
  @media (max-width: 567px) {
    min-height: 175px !important;
  }
  @media (max-width: 1160px) {
    min-height: 250px;
  }
`;

export const mainInfo = css`
  height: auto;
  position: relative;
  padding: 10px;
  color: rgba(0, 0, 0, 0.87);
  .date {
    font-family: 'Intro';
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.54);
  }
`;
export const iWantIt = css`
  border-radius: 5px !important;
  width: 150px;
  height: 36px !important;
  min-height: 36px !important;
`;

export const outlinedIWantIt = css`
  border: solid 2px ${yellow} !important;
  padding: 0 !important;
  &:hover {
    border: solid 2px ${yellow};
  }
`;

export const outlinedButton = css`
  border: solid 2px ${yellow} !important;
  padding: 0 !important;
  margin-right: 15px;
  width: 150px;
  &:hover {
    background-color: ${yellow};
    color: white;
  }
`;

export const MainTitle = styled('p')`
  color: ${({ color }) => color};
  cursor: pointer;
`;

export const Interested = styled('span')`
  color: ${({ color }) => color};
  display: flex;
  margin-left: 5px;
`;

export const tab = css`
  width: 50%;
`;

export const actionButtons = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 11px;
`;

export const sortEventsButtons = css`
  display: flex;
  justify-content: space-between;
  font-family: 'Intro';
  div {
    font-size: 12px;
    margin-right: 23px;
  }
  button {
    text-transform: none;
    font-size: 12px;
  }
`;

export const searchIcons = css`
  display: flex;
  justify-content: flex-end;
  width: auto;
  img {
    margin-left: 25px;
    cursor: pointer;
  }
`;

export const description = css`
  font-size: 14px;
  margin-bottom: 10px;
  a {
    color: ${yellow};
    text-decoration: none;
  }
`;

export const Avatar = styled('div')`
  height: 40px;
  width: 40px;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 15px;
`;

export const favorites = css`
  display: flex;
  justify-content: flex-end;
`;

export const viewAllFavorites = css`
  float: right;
`;

export const favoritewithNrOfLikes = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const allLikesModal = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  .modal {
    width: 350px;
    height: 430px;
    border-radius: 31px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    z-index: 5;
  }
  .modalHeader {
    font-size: 15px;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(91, 113, 137, 0.79);
    border-top-right-radius: 28px;
    border-top-left-radius: 28px;
    color: white;
    img {
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }
  .backgroundShadow {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    background-color: rgba(45, 43, 43, 0.2);
  }
`;

export const closeIcon = css`
  height: 24px;
`;

export const favorite = css`
  overflow-y: auto;
  height: 363px;
  /* Width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #51bbbf;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #51bbbf;
  }
`;

export const favoriteInfo = css`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  img {
    margin-right: 5px;
    height: 14px;
    width: 14px;
    cursor: pointer;
  }
`;

export const avatarWithInfo = css`
  display: flex;
  align-items: center;
`;

export const favoriteName = css`
  font-size: 14px;
`;

export const applyForMentor = css`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 3px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  .question {
    font-family: Intro;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #7986cb;
    width: 90%;
    cursor: pointer;
  }
  .form {
    width: 90%;
  }
  button {
    height: 36px !important;
    width: 150px !important;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
  }
  .cancel {
    background-color: white;
    color: ${orange};
    border: 2px solid ${orange};
    margin-right: 15px;
    &:hover {
      background-color: ${orange};
      color: white;
    }
  }
  .send {
    background-color: ${orange};
    color: white;
    border: none;
  }
`;
export const formInputs = css`
  /* margin-left: 15px; */
  width: 80%;
`;

export const viewAllDescription = css`
  color: ${yellow};
  cursor: pointer;
`;

export const cursorPointer = css`
  cursor: pointer;
  color: #fcdfa7;
`;

export const closeModal = css`
  cursor: pointer;
  margin-right: 0 !important;
  float: right;
  display: none;
`;

export const calendarContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const calendar = css`
  border-radius: 15px;
  padding: 15px;
  background-color: white;
  width: 60%;
  height: 50%;
  z-index: 6;
  @media (max-width: 569px) {
    width: 100%;
    height: 75%;
  }
`;

export const backgroundShadow = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
`;
