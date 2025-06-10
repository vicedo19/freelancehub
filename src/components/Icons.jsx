
import { Icon } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


export const SearchIcon = () => (
    <Icon size="md" color="tomato">
        <CiSearch />
    </Icon>
)

export const NotificationIcon = () => (
    <Icon size="md" color="tomato">
        <IoIosNotificationsOutline />
    </Icon>
)

export const UserIcon = () => (
    <Icon size="md" color="tomato">
        <FaRegUser />
    </Icon>
)