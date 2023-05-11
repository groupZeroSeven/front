import { useEffect, useState } from "react"
import { StyledLargeProfilePic, StyledSmallProfilePic } from "./style";

interface iProfilePicProps {
  user: string;
  isLarge: boolean;
}
export const ProfilePic = ({user, isLarge}: iProfilePicProps) => {
  const [avatar, setAvatar] = useState<string>("")
  const [color, setColor] = useState<string>("")

  useEffect(() => {
    const avatar = () => {
      let initials = "";
      const name = user.split(" ")
      
      if (name.length === 1) {
        initials = name[0][0]
      }

      if (name.length >= 2) {
        for (var i = 0; i < 2; i++) {
          var firstLetter = name[i][0].toUpperCase();
          initials += firstLetter;
        }
      }
      setAvatar(initials)
    }
    const getRandomColor = () => {
      var randomNumber = Math.floor(Math.random() * 12) + 1;
      const color =  `--color-random-${randomNumber}`;
      setColor(color)
    }
    avatar()
    getRandomColor()
  }, [])
  return (
    <>
      {isLarge ? (
        <StyledLargeProfilePic style={{backgroundColor: `var(${color})`}}>
          {avatar}
        </StyledLargeProfilePic>
      ): (
        <StyledSmallProfilePic style={{backgroundColor: `var(${color})`}}>
          {avatar}
        </StyledSmallProfilePic>
      )}
    </>
  )
}