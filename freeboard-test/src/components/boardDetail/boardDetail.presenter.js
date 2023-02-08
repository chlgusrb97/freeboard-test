import * as S from "./boardDetail.styles"

export default function BoardDetailUI(props) {
  return (
    <>
      <S.Right_Container>
        <S.Right_span>{props.data?.fetchBoard.title}</S.Right_span>
        <S.DivideLine></S.DivideLine>
        {/* <S.ImgBox_ul>
          <S.ImgBox_li></S.ImgBox_li>
          <S.ImgBox_li></S.ImgBox_li>
          <S.ImgBox_li></S.ImgBox_li>
        </S.ImgBox_ul> */}
        
        <S.ContentsBox>
          <S.ContentsBox_Left>
            <S.UserImg src="/img/ic_account_circle.png" />
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
          </S.ContentsBox_Left>
          <S.ContentSBox_right>
            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          </S.ContentSBox_right>
          
        </S.ContentsBox>
      </S.Right_Container>
      <S.Right_ButtonBox>
        <S.Button onClick={props.onClickMovedBoardList}>글목록</S.Button>
        <S.Button onClick={props.onClickMovedBoardEdit}>수정</S.Button>
        <S.Button onClick={props.onClickDeleteButton}>삭제</S.Button>
      </S.Right_ButtonBox>
    </>
  )
}