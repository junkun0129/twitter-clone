import Image from "next/image";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};
function ProfileImage({ src, className = "" }: ProfileImageProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src ? (
        <Image src={src} alt="profile image" quality={100} fill></Image>
      ) : null}
    </div>
  );
}

export default ProfileImage;
