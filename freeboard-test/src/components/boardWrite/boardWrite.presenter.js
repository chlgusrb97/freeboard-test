import * as S from "./boardWrite.styles"

export default function BoardWriteUI(props) {
  console.log(props.data)
  return (
    <>
        <S.RightContainer>
          <S.Right_ContentBox>
            <S.Right_span>
              {props.isEdit ? "게시물 수정" : "새 글 작성"}
            </S.Right_span>

            <S.DivideLine2></S.DivideLine2>

            <S.Right_ul>
              <S.Right_li>
                <div style={{width: "60px"}}>
                  <S.Right_title style={{marginTop: "5px"}}>제목</S.Right_title>
                </div>
                <S.Right_Input 
                  onChange={props.onChangeTitle} 
                  placeholder={props.titleErr} 
                  defaultValue={props.data?.fetchBoard.title ??  ""}
                />
              </S.Right_li>
              <S.Right_li>
                <div style={{width: "60px"}}>
                  <S.Right_title style={{marginTop: "5px"}}>내용</S.Right_title>
                </div>
                <S.Right_textarea 
                  onChange={props.onChangeContents} 
                  placeholder={props.contentsErr} 
                  defaultValue={props.data?.fetchBoard.contents}
                />
              </S.Right_li>
              <S.Right_li>
                <div style={{width: "60px"}}>
                  <S.Right_title style={{marginTop: "5px"}}>이미지</S.Right_title>
                </div>
                <S.Imgbox_ul>
                  <S.Imgbox_li>
                    <S.Imgbox_plus src="/img/ic_plus.png" />
                  </S.Imgbox_li>
                  <S.Imgbox_li>
                    <S.Imgbox_plus src="/img/ic_plus.png" />
                  </S.Imgbox_li>
                  <S.Imgbox_li>
                    <S.Imgbox_plus src="/img/ic_plus.png" />
                  </S.Imgbox_li>
                </S.Imgbox_ul>
              </S.Right_li>
              <S.Right_li>
                <S.textBox_ul>
                  <S.textBox_li>
                    <S.Right_title>작성자</S.Right_title>
                    <S.Right_Input 
                      onChange={props.onChangeWriter} 
                      placeholder={props.writerErr} 
                      defaultValue={props.data?.fetchBoard.writer}
                    />
                  </S.textBox_li>
                  <S.textBox_li>
                    <S.Right_title>비밀번호</S.Right_title>
                    <S.Right_Input onChange={props.onChangePassword} placeholder={props.passwordErr} />
                  </S.textBox_li>
                </S.textBox_ul>
              </S.Right_li>
            </S.Right_ul>
          </S.Right_ContentBox>

          <S.Right_ButtonBox>
            <S.Button onClick={props.isEdit ? props.onClickUpdate : props.onClickCreateBoard}>
              {props.isEdit ? "수정" : "등록"}
            </S.Button>
            <S.Button onClick={props.onClickMovedList}>취소</S.Button>
          </S.Right_ButtonBox>
        </S.RightContainer>
    </>
  )
}