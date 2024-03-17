import { getNameInitials } from "@/utilities/utilities";
import { Avatar as AntdAvatar } from "antd"
import { AvatarProps } from "antd/lib"


type Props = AvatarProps & {
    name?: string;
}

const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
        alt="John Doe"
        size={"small"}
        style={{ 
            backgroundColor: "#87d068",
            display: "flex",
            alignItems: "center",
            border: 'none',
            ...style
         }}
         {...rest}
    >
      {getNameInitials(name || "")}
    </AntdAvatar>
  )
}

export default CustomAvatar
