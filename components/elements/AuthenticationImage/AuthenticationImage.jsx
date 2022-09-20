import Image from "next/image";

const AuthenticationImage = ({ imgSrc, altText, imgCaption }) => {
  return (
    <>
      <figure>
        <Image src={imgSrc} alt={altText} height="500" width="700" />
      </figure>
      <p>{imgCaption}</p>
    </>
  );
};

export default AuthenticationImage;
