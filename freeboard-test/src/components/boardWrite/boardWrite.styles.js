import styled from "@emotion/styled";

export const RightContainer = styled.div`
  width: 764px;
  height: 708px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Right_ContentBox = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
`

export const Right_span = styled.span`
  font-size: 18px;
`

export const DivideLine2 = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin: 20px 0;
`

export const Right_ul = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Right_li = styled.li`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  :nth-of-type(2), :nth-of-type(3) {
    align-items: flex-start;
  }
`

export const Right_title = styled.span`
  font-size: 14px;
  width: 70px;
`

export const Right_Input = styled.input`
  width: 100%;
  margin-left: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  height: 40px;
  padding-left: 7px;

  ::placeholder {
    color: tomato
  }
`

export const Right_textarea = styled.textarea`
  width: 100%;
  height: 240px;
  margin-left: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  resize: none;
  padding: 7px;
  
  ::placeholder {
    color: tomato
  }
`

export const Imgbox_ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 12px;
`

export const Imgbox_li = styled.li`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px dashed #e5e5e5;
  cursor: pointer;
`

export const Imgbox_plus = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
`

export const textBox_ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const textBox_li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Right_ButtonBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  margin-top: 30px;
  padding: 5px 20px;
  border-radius: 30px;
  cursor: pointer;

  :nth-of-type(1) {
    background-color: #6400FF;
    color: #fff;
    margin-right: 5px;
  }
  :nth-of-type(2) {
    margin-left: 5px;
    background-color: #999;
  }
`