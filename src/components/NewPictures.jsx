import articlesData from "../mockData/new_picturesData";
import pictures1 from "../assets/img/brands/pictures1.png";
import pictures2 from "../assets/img/brands/pictures2.png";
import pictures3 from "../assets/img/brands/pictures3.png";
import pictures4 from "../assets/img/brands/pictures4.png";
import pictures5 from "../assets/img/brands/pictures5.png";

export const BottomContent = ({ item }) => {
    const { isPrimary, header, date, img:{ alt }, button: {href, title} } = item;
    const className = isPrimary ? "Item item_big" : "Item";
  
    return (
        <div className = {className}>
            <img src={
              alt==="One"? pictures1:
              alt==="Two"? pictures2:
              alt==="Three"? pictures3:
              alt==="Four"? pictures4:
              pictures5 
            } alt={alt} />
            <p>{date}</p>
            <h3>{header}</h3>
            <a href={href}> {title}</a>
        </div>
    );
  };

export const NewPictures = () => {

     const primaryArticleData = articlesData.filter((item) => 
        item.isPrimary===true)[0];
  
     const secondaryArticlesData = articlesData.filter((item) => 
        item.isPrimary===false);

     return (
         <>
            <div className="pictures_left">
             <BottomContent item = {primaryArticleData} /> 
           </div>
           <div className="pictures_right">
             {secondaryArticlesData.map((item, index) => (<BottomContent key={index} item={item} />) )} 
           </div>
         </>
       );  
 };
   export default NewPictures;