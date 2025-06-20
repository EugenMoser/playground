interface SecoundPageProps {}

export default function SecondPage({}: SecoundPageProps): React.JSX.Element {
  return (
    <>
      <h1>This is the Second Page</h1>

      <a
        href="/"
        className="text-blue-500"
      >
        Home Page
      </a>
    </>
  );
}
