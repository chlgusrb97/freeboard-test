import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";

export default function BoardWriteFunc(props) {
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [writerErr, setWriterErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [titleErr, setTitleErr] = useState("")
  const [contentsErr, setContentsErr] = useState("")
  const CreateBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          }
        }
      })
      router.push(`/boards/boardDetail/${result.data.createBoard._id}`)
    } catch(error) {
      Modal.error({ content: "게시글 등록에 실패했습니다." })
    }
    Modal.success({ content: "게시글 등록에 성공했습니다." })
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const onClickCreateBoard = () => {
    if(!writer) {
      setWriterErr("작성자를 입력해주세요.")
    } else {
      setWriterErr("")
    }

    if(!password) {
      setPasswordErr("비밀번호를 입력해주세요.")
    } else {
      setPasswordErr("")
    }

    if(!title) {
      setTitleErr("제목을 입력해주세요.")
    } else {
      setTitleErr("")
    }

    if(!contents) {
      setContentsErr("내용을 입력해주세요.")
    } else {
      setContentsErr("")
    }

    if(writer && password && title && contents) {
      CreateBoard()
    }
  }

  const onClickMovedList = () => {
    router.push("/boards")
  }

  const onClickUpdate = async () => {
    const updateBoardInput = {}

    if(title !== "") updateBoardInput.title = title
    if(contents !== "") updateBoardInput.contents = contents

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.ID
        }
      })
      router.push(`/boards/boardDetail/${result.data.updateBoard._id}`)
    } catch(error) {
      Modal.error({ content: `${error.message}` })
    }
  }

  return (
    <BoardWriteUI 
      onClickCreateBoard={onClickCreateBoard}
      onClickMovedList={onClickMovedList}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerErr={writerErr}
      passwordErr={passwordErr}
      titleErr={titleErr}
      contentsErr={contentsErr}
      isEdit={props.isEdit}
      data={props.data}
    />
  )
}