import Image from "next/image";
import profileImg from "@/public/images/abbeydev.jpeg";

const Profile = () => {
  return (
    <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-amber-200 shadow-lg">
      <Image src={profileImg} alt="Profile" width={100} height={100} />
    </div>
  );
};

export default Profile;
