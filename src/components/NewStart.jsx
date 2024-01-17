import { new_startData } from "../mockData/new_startData";

export const ExceeedigStartTemplateLeftP = ({ left_p_start }) => {
    const { button: { href, title },} = left_p_start;
  
    return (
        <a href={href} className="left_p_start"> {title}</a>
    );
};

export const ExceeedigStartTemplate = ({ right_h4_start }) => {
    const { header } = right_h4_start;
    return (
        <h3 className="right_h4_start">{header}</h3>
    );
};

export const ExceeedigStartTemplateRight = ({ start__right }) => {
    const { button: { href, title },} = start__right;
  
    return (
        <a href={href} className="cta_buttons__signin btn primary-btn"> {title}</a>
    );
};

const NewStart = () => {
    const { left_p_start, right_h4_start, start__right, } = new_startData;
  
    return (
      <>
        <div className="start__left">
            <ExceeedigStartTemplateLeftP left_p_start={left_p_start} /> 
            <ExceeedigStartTemplate right_h4_start={right_h4_start} />
        </div>
        <div className="start__right">
            <ExceeedigStartTemplateRight start__right={start__right} />
        </div>
      </>
    );
  };
  
  export default NewStart;