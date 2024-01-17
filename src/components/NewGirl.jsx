import { new_girlData } from "../mockData/new_girlData";
import Girl from "../assets/img/brands/girl.png";

export const NewGirlImage = ({ new_girl }) => {
    const { alt } = new_girl;
  
    return <img src={Girl} alt={alt} />;
};

export const ExceeedigGirlTemplateLeft1 = ({ new_girl__left_a1 }) => {
    const { button: { href, title }} = new_girl__left_a1;
  
    return (
        <a href={href} className="right_a1_girl"> {title}</a>
    );
};

export const ExceeedigGirlTemplate = ({ new_girl__left }) => {
    const { header, content } = new_girl__left;
    return (
      <>
        <h1 className="right_h1_girl">{header}</h1>
        <p className="right_p_girl">{content}</p>
      </>
    );
};

export const ExceeedigGirlTemplateLeft2 = ({ new_girl__left_a2 }) => {
    const { button: { href, title },} = new_girl__left_a2;
  
    return (
        <a href={href} className="right_a2_girl"> {title}</a>
    );
};


const NewGirl = () => {
  const { new_girl, new_girl__left_a1, new_girl__left, new_girl__left_a2, } = new_girlData;

  return (
    <>
      <div className="new_girl__left">
        <NewGirlImage new_girl={new_girl} /> 
      </div>
      <div className="girl__right">
        <ExceeedigGirlTemplateLeft1 new_girl__left_a1={new_girl__left_a1} /> 
        <ExceeedigGirlTemplate new_girl__left={new_girl__left} />
        <ExceeedigGirlTemplateLeft2 new_girl__left_a2={new_girl__left_a2} />
      </div>
    </>
  );
};

export default NewGirl;
