import styled from 'styled-components';

import { 
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaLock
} from 'react-icons/fa';

export const Container = styled.div`
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }

  .container:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe 100%);
    top: -10%;
    right: 48%;
    transform: translateY(-50%) !important;
    transition: 1.8s ease-in-out;
    z-index: 6;
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .signin-signup {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transition: 1s 0.7s ease-in-out;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 5rem;
      overflow: hidden;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      transition: 0.2s 0.7s ease-in-out;
    }

    form.sign-in-form {
      z-index: 2;
    }

    form.sign-up-form {
      z-index: 1;
      opacity: 0;
    }

    .btn {
      width: 150px;
      height: 49px;
      border: none;
      outline: none;
      border-radius: 49px;
      cursor: pointer;
      background-color: #5995fd;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      margin: 10px 0;
      transition: .5s;

      &:hover {
        background-color: #4d84e2;
      }
    }

    .btn.transparent {
      margin: 0;
      background: none;
      border: 2px solid #fff;
      width: 130px;
      height: 41px;
      font-weight: 600;
      font-size: 0.8rem;
    }
  }

  .title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }

  //Panels Container
  .panels-container {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    z-index: 6;
  }

  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .left-panel {
    pointer-events: all;
    padding: 3rem 12% 2rem 17%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .image {
    width: 100%;
    transition: 1.1s .4s ease-in-out;
    transition-delay: 0.4s;
  }

  .right-panel .content,
  .right-panel .image {
    transform: translateX(800px);
  }

  /* ANIMATION */

  .container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
  }

  .container.sign-up-mode .right-panel .content,
  .container.sign-up-mode .right-panel .image {
    transform: translateX(0);
  }

  .container.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container.sign-up-mode .right-panel {
    pointer-events: all;
  }

  .container.sign-up-mode .signin-signup {
    left: 25%;
  }

  .container.sign-up-mode form.sign-in-form {
    z-index: 1;
    opacity: 0;
  }

  .container.sign-up-mode form.sign-up-form {
    z-index: 2;
    opacity: 1;
  }

  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 100vh;
    }
    .container:before {
      /* display: none; */
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
    .signin-signup {
      width: 100%;
      top: 95%;
      left: 50%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }
    .panels-container {
      /* background-color: green; */
      z-index: 10;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }
    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
    }
    .panel .content {
      padding-right: 15%;
      transition: 0.9s 0.8s ease-in-out;
    }
    .panel h3 {
      font-size: 1.2rem;
    }
    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }
    .image {
      width: 200px;
      transition: 0.9s 0.6s ease-in-out;
    }
    .left-panel {
      grid-row: 1 / 2;
    }
    .right-panel {
      grid-row: 3 / 4;
    }
    .right-panel .content,
    .right-panel .image {
      transform: translateY(300px);
    }
    .container.sign-up-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }
    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }
    .container.sign-up-mode .signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
      left: 50%;
    }
  }

  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }
    .image {
      display: none;
    }
    .panel .content {
      padding: 0.5rem 1rem;
    }
    .container {
      padding: 1.5rem;
    }
    .container:before {
      bottom: 72%;
      left: 50%;
    }
    .container.sign-up-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }

`;

export const InputField = styled.div`
  position: relative;
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 .4rem;

  i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
    transition: 0.5s;
  }

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;

    &::placeholder {
      color: #aaa;
      font-weight: 500;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  a {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    transition: 0.3s;
  }

  a:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

export const FaceLogo = styled(FaFacebook)``;

export const InstaLogo = styled(FaInstagram)``;

export const WhatsLogo = styled(FaWhatsapp)``;

export const UserLogo = styled(FaUser)``;

export const LockLogo = styled(FaLock)``;

export const EnvelopeLogo = styled(FaEnvelope)``;

