import Image from "next/image";

type Category = {
  name: string;
  bg: string;
  image: any;
};
const CategoryCard = (props: Category) => {
  const { name, bg, image } = props;
  return (
    <div className={`${bg} rounded-md flex flex-row justify-center`}>
      <Image
        src={image}
        width={40}
        height={32}
        alt={name}
        className="rounded-[50%] aspect-video p-2"
      />
      <div className="px-5 py-3 capitalize ">{name}</div>
    </div>
  );
};

export default CategoryCard;
