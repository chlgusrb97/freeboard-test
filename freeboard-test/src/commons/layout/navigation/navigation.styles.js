import styled from "@emotion/styled";

export const LeftContainer = styled.div`
  width: 200px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
`

export const Left_head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Left_head_span = styled.span`
  font-size: 16px;
  margin-left: 6px;
`

export const Left_body = styled.div`
  display: flex;
  flex-direction: column;
`

export const Left_body_category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Categoty_span = styled.span`
  font-size: 14px;
  margin-left: 12px;
  color: #000
  /* color: ${(props) => props.onListButton === true ? "#000" : "#999"} */
`

export const DivideLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin: 30px 0;
`