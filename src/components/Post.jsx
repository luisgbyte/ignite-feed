export function Post({ author, content }) {
  return (
    <div>
      <span>{author}</span>
      <br />
      <span>{content}</span>
    </div>
  );
}
