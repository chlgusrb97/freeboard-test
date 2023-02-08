import { useRouter } from "next/router"
import * as S from "./navigation.styles"

// const MOVED_LIST = ["/boards"]

export default function LayoutNavigation() {
  const router = useRouter()
  
  const ON_LISTBUTTON = ["/", "/boards",`/boards/boardDetail/${router.query.ID}/edit`]
  const ON_WRITEBUTTON = ["/boards/boardWrite", `/boards/boardDetail/${router.query.ID}`]

  const onClickMovedList = () => {
    router.push("/boards")
  }

  const onClickMovedWrite = () => {
    router.push("/boards/boardWrite")
  }

  const onListButton = ON_LISTBUTTON.includes(router.asPath); 
  const onWriteButton = ON_WRITEBUTTON.includes(router.asPath)

  return (
    <>
      <S.LeftContainer>
        <S.Left_head>
          <img src="/img/ic_conversation.png" />
          <S.Left_head_span>TALKR</S.Left_head_span>
        </S.Left_head>

        <S.DivideLine></S.DivideLine>

        <S.Left_body>
          <S.Left_body_category onClick={onClickMovedList}>
            <img src={onListButton ? "/img/ic_list.png" : "/img/ic_list_disabled.png"} />
            <S.Categoty_span>전체 글 보기</S.Categoty_span>
          </S.Left_body_category>
          <S.Left_body_category onClick={onClickMovedWrite}>
            <img src={onWriteButton ? "/img/ic_new.png" : "/img/ic_new_disabled.png"} />
            <S.Categoty_span>새 글 작성</S.Categoty_span>
          </S.Left_body_category>
        </S.Left_body>
      </S.LeftContainer>
    </>
  )
}
