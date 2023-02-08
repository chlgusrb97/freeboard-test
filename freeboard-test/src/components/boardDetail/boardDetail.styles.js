import styled from "@emotion/styled";

export const Right_Container = styled.div`
  width: 764px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 20px 40px 83px 20px;
`

export const Right_span = styled.span`
  font-size: 18px;
`

export const DivideLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin: 20px 0;
`

export const ImgBox_ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImgBox_li = styled.li`
  width: 220px;
  height: 125px;
  background-color: gray;
  margin-bottom: 30px;
`

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`
export const ContentsBox_Left = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 43px;
`

export const UserImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const Writer = styled.p`
  font-size: 14px;
  display: fixed;
`

export const ContentSBox_right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Contents = styled.div`
  font-size: 15px;
`

export const Right_ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  margin-top: 30px;
  padding: 5px 20px;
  border-radius: 30px;
  background-color: #999;
  color: #fff;
  cursor: pointer;

  :nth-of-type(2) {
    margin-right: 10px;
    margin-left: 10px;

  }

  :hover {
    background-color: #6400FF;
  }
`