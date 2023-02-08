import BoardWriteFunc from "@/src/components/boardWrite/boardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function BoardEdit() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.ID
    }
  })

  console.log(data)
  return <BoardWriteFunc isEdit={true} data={data} />
}