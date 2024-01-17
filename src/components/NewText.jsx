import { new_textData } from "../mockData/new_textData";

export const ExceeedigTextTemplate1 = ({ new_text_1 }) => {
    const { header } = new_text_1;
    return (
        <h1>{header}</h1>
    );
};

export const ExceeedigTextTemplate2 = ({ new_text_2 }) => {
    const { header } = new_text_2;
    return (
        <h1>{header}</h1>
    );
};

const NewText = () => {
    const { new_text_1, new_text_2, } = new_textData;
  
    return (
      <>
          <ExceeedigTextTemplate1 new_text_1={new_text_1} /> 
          <ExceeedigTextTemplate2 new_text_2={new_text_2} /> 
      </>
    );
  };
  
  export default NewText;