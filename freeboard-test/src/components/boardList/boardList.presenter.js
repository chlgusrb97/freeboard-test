import { getDate } from '@/src/commons/libraries/utils'
import InfiniteScroll from 'react-infinite-scroller'
import * as S from './boardList.styles'

export default function BoardListUI(props) {
  return (
    <>
      <S.Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadFunc}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoards?.map((el) => (
            <S.container key={el._id} id={el._id} onClick={props.onClickMovedDetail}>
              <S.Title>{el.writer}</S.Title>
              <S.Date>{getDate(el.createdAt)}</S.Date>
            </S.container>
          ))}
        </InfiniteScroll>
      </S.Wrapper>
    </>
  )
}