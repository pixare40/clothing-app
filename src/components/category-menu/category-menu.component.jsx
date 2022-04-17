import DirectoryItem from "../directory-item/directory-item.component";
import "./category-menu.styles.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <DirectoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
