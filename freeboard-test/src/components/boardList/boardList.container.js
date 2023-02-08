import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardListUI from "./boardList.presenter"
import { FETCH_BOARDS } from "./boardList.queries"

export default function BoardListFunc() {
  const router = useRouter()

  const { data, fetchMore } = useQuery(FETCH_BOARDS)

  const onClickMovedDetail = (event) => {
    router.push(`/boards/boardDetail/${event.currentTarget.id}`)
  }

  const onLoadFunc = () => {
    if(data === undefined) return
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoards.length ?? 10) / 10 ) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if(fetchMoreResult?.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards]
          }
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
        }
      }
    })
  }

  const onClickUpdate = () => {

  }

  return <BoardListUI 
    data={data}
    onClickMovedDetail={onClickMovedDetail}
    onLoadFunc={onLoadFunc}
  />
}