import Link from "next/link";

const AuthenticationSuccess = ({ title, linkURL, linkName }) => {
  return (
    <>
      <h1>{title}</h1>
      <Link href={`/${linkURL}`} passHref>
        <a>{linkName}</a>
      </Link>
    </>
  );
};

export default AuthenticationSuccess;
