import Image from "next/image";
interface CommentData {
  _id: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
  desc: string;
}
interface CommentProps {
  item: CommentData;
}

const Comment: React.FC<CommentProps> = ({ item }) => {
  const { user, createdAt, desc } = item;
  return (
    <div className="bg-gray-100 rounded px-2">
      <div className="flex flex-row justify-start gap-2 w-1/4 items-center mt-5 ">
        <Image
          src={user.image}
          alt=""
          width={20}
          height={20}
          className="rounded-[50%] block"
        />
        <p className="flex flex-col">
          <span className="font-bold">{user.name}</span>
          <span className="font-thin text-sm">{createdAt}</span>
        </p>
      </div>
      <span> {desc} </span>
    </div>
  );
};

export default Comment;
