import "./Landing.css";
import {
  Row,
  Image,
  Spacer,
  Text,
  Display,
  Page,
  Col,
  Link,
} from "@geist-ui/react";
import TwoFactor from "../../assets/two-fac.svg";

import TypingDNA from "../TypingDNA/TypingDnaView";
import About from "../About/About";

function Landing() {
  return (
    <div className="landing">
      <Page size="large" dotBackdrop>
        <Page.Header></Page.Header>
        <Page.Content>
          <Row justify="start" align="middle">
            <Text h1 size={100} type="secondary">
              Embed
            </Text>
            <Text h1 size={100} type="success">
              &
            </Text>
            <Text h1 size={100} type="secondary">
              Share
            </Text>
          </Row>
          <Row justify="space-between" align="top">
            <Col span={12}>
              <Display width="30vw">
                <Image src={TwoFactor} />
              </Display>
            </Col>
            <Col span={10}>
              <Text h3>
                Sign your files and documents by embedding your typing pattern
              </Text>
              <Text p type="secondary" size="1.15em">
                Gone are the days, when your products/files/content was used
                without any credit to you. Easily sign your content with your
                typing pattern and embed them in the content, so no one can
                plagarize it.
              </Text>
              <Text p b type="warning" size="1.1em">
                Are you a designer? A musician? A developer? The next business
                tycoon? A freelancer? We got you covered
              </Text>
              <Text p type="secondary" size="1.15em">
                Secure your content now. Your work belongs only to you, and our
                mission is to ensure it stays that way
              </Text>
            </Col>
          </Row>
          <Spacer y={3} />
          <TypingDNA />
          <Spacer y={3} />
          <About />
        </Page.Content>
        <Page.Footer>
          <Link
            href="https://github.com/sauravhiremath/embed-and-share"
            icon
            color
          >
            © https://github.com/sauravhiremath/embed-and-share
          </Link>
        </Page.Footer>
      </Page>
    </div>
  );
}

export default Landing;
