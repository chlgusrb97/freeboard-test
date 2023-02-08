import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 470px;
  overflow: auto;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none;
  }
`

export const container = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`

export const Title = styled.span`
  font-size: 14px;
  color: #333;
`

export const Date = styled.span`
  font-size: 14px;
  color: #999
`