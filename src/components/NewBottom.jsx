import { new_bottomData } from "../mockData/new_bottomData";
import GPT from "../assets/img/brands/GPT-3.png";

export const BottomHeader = ({ top }) => {
    const { header } = top;
    return (
        <h1>{header}</h1>
    );
};

export const Button = ({ top_button }) => {
    const { button: { href, title },} = top_button;
  
    return (
        <a href={href}>
            <button className="cta_buttons__signin btn primary-btn">
                {title}
            </button>
        </a>
    );
};

export const LeftDownPng = ({ left_down_png }) => {
    const { alt } = left_down_png;
  
    return <img className="brands_section__img" src={GPT} alt={alt} />;
};

export const BottomContent = ({ PContent }) => {
    const { content } = PContent;
  
    return (
        <p>{content}</p>
    );
  };

export const ButtonA = ({ button }) => {
    const { href, title } = button;
  
    return (
        <a href={href}> {title}</a>
    );
  };

const NewBottom = () => {
    const { top, top_button, left_down_png, left_down, right_down_1, right_down_1a, right_down_2, right_down_2a, right_down_3, right_down_3a, } = new_bottomData;
  
    return (
      <>
        <div className="top">
          <BottomHeader top={top} /> 
          <Button top_button={top_button} /> 
        </div>
        <div className="down">
            <div className="left_down">
                <LeftDownPng left_down_png={left_down_png} /> 
                <BottomContent PContent={left_down} />
            </div>
            <div className="right_down">
                <div className="Item">
                    <BottomContent PContent={right_down_1} />
                    {right_down_1a.map((button, index) => (
          <         ButtonA key={index} button={button} />
                    ))}
                </div>
                <div className="Item">
                    <BottomContent PContent={right_down_2} /> 
                    {right_down_2a.map((button, index) => (
          <         ButtonA key={index} button={button} />
                    ))}
                </div>
                <div className="Item">
                    <BottomContent PContent={right_down_3} /> 
                    {right_down_3a.map((button, index) => (
          <         ButtonA key={index} button={button} />
                    ))}
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default NewBottom;