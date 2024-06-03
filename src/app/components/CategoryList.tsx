import CategoryCard from "./CategoryCard";
// export const categories = [
//   {
//     name: "style",
//     bg: "bg-blue-100",
//     image: "/images/style.png",
//   },
//   {
//     name: "fashion",
//     bg: "bg-red-100",
//     image: "/images/fashion.png",
//   },
//   {
//     name: "food",
//     bg: "bg-orange-100",
//     image: "/images/food.png",
//   },
//   {
//     name: "travel",
//     bg: "bg-purple-100",
//     image: "/images/travel.png",
//   },
//   {
//     name: "culture",
//     bg: "bg-lime-100",
//     image: "/images/culture.png",
//   },
//   {
//     name: "coding",
//     bg: "bg-green-100",
//     image: "/images/coding.png",
//   },
// ];
export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};
const CategoryList = async () => {
  const categories = await getData();
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Popular Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-center">
        {categories.map((category: { name: string; image: any }) => (
          <CategoryCard
            name={category.name}
            bg="bg-green-100"
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
