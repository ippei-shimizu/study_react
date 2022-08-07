import { useComments } from "src/hooks/useComments"

export const Comments = () => {
  const {data,error,isLoading,isEmpty} = useComments();

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }
  if(isEmpty) {
    return <div>データは空です。</div>
  }

  return (
    <ol>
      {data.map((comment)=> {
        return <li key={comment.id}>
          <a>{comment.body}</a>
        </li>;
      })}
    </ol>
  )
}