import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./boardDetail.queries";
import BoardDetailUI from "./boardDetail.presenter";

export default function BoardDetailFunc() {
  const router = useRouter()

  const [deleteBoard] = useMutation(DELETE_BOARD)
  
  const {data} = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.ID }
  })

  const onClickMovedBoardList = () => {
    router.push("/boards")
  }

  const onClickMovedBoardEdit = () => {
    router.push(`/boards/boardDetail/${router.query.ID}/edit`)
  }

  const onClickDeleteButton = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.ID
      }
    })
    router.push("/boards")
  }



  return <
    BoardDetailUI data={data} 
    onClickMovedBoardList={onClickMovedBoardList}
    onClickMovedBoardEdit={onClickMovedBoardEdit}
    onClickDeleteButton={onClickDeleteButton}
  />
}