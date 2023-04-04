import { Button_big_text } from '../styles/global';

export const ButtonBig = ({
  children,
  bgColor,
  fontColor,
  borderColor,
}: any) => {
  return (
    <Button_big_text
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        borderColor,
      }}
    >
      {children}
    </Button_big_text>
  );
};
