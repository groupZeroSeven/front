import { Button_medium_text } from '../styles/global';

export const ButtonMedium = ({
  children,
  bgColor,
  fontColor,
  borderColor,
}: any) => {
  return (
    <Button_medium_text
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        borderColor,
      }}
    >
      {children}
    </Button_medium_text>
  );
};
