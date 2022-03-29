import { TwitterIcon } from "assets/icons/Twitter";
import styled from "styled-components";
import theme from "ui/theme.config";
import TwitterBG from "assets/images/twitter-auth-bg.png";
type Props = {};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1 1 auto;
  .left_side {
    /* flex: 1; */
    .twitter_image_wrapper {
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    svg {
      position: absolute;
      top: 0;
      height: 100%;
      max-width: 350px;
    }
    .tw-icon {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .signing_action {
    flex: 1;
    min-width: 45vw;

    padding: 2rem;
    background-color: #000000;
    svg {
      height: 3rem;
    }
    h1 {
      font-size: 64px;
      font-weight: bold;
    }
    h3 {
      font-size: 31px;
      font-weight: bold;
    }
  }
  h1,
  h3 {
    color: white;
  }
`;
const SignIn = (props: Props) => {
  return (
    <Container>
      <div className="left_side">
        <div className="twitter_image_wrapper">
          <img src={TwitterBG} alt="twitter signin background" />
        </div>
        <div className="tw-icon">
          <TwitterIcon color="white" />
        </div>
      </div>
      <div className="signing_action">
        <TwitterIcon color="white" />
        <h1>Happening now</h1>
        <h3>Join Twitter today</h3>
      </div>
    </Container>
  );
};

export default SignIn;
