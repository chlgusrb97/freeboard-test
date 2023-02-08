import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const HIDDEN_BANNER = ["/boards/boardWrite"];
const HIDDEN_NAVIGATION = [""];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  background-color: #f9f9f9;
  padding: 30px 20px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;

`



export default function Layout(props) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isHiddenNavigation && <LayoutNavigation />}
        <Div>
          {!isHiddenBanner && <LayoutBanner />}
          <div>{props.children}</div>
        </Div>
      </Wrapper>
    </>
  );
}
