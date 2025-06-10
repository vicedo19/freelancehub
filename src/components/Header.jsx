import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Avatar,
  Link,
  Spacer,
  
} from "@chakra-ui/react";

import { NotificationIcon, SearchIcon, UserIcon } from "./Icons";



  const Header = () => {
    return (
        <Flex as="header" width="100%" height="64px" alignItems="center">
            {/* Left Section: Logo */}
            <Flex alignItems="center">
                <Box/>
                <Text>
                    FreelanceHub
                </Text>
            </Flex>

            {/* Middle Section: Navigation Links */}
            <Flex alignItems="center">
                <Link href="#">
                Dashboard
                </Link>
                <Link href="#">
                Projects
                </Link>
                <Link href="#">
                Clients
                </Link>
            </Flex>

            <Spacer display={{ base: 'none', md: 'block' }} /> 

            {/* Right Section: Search, Icons, Avatar */}
            <Flex alignItems="center">
                {/* Search Bar */}
                <InputGroup>
                <InputLeftElement>
                <SearchIcon/>
                </InputLeftElement>
                <Input
                type="text"
                placeholder="search..."
                borderRadius="md"
                borderColor="gray.200"
                _placeholder={{ color: 'gray.400' }}
                focusBorderColor="brand.500"
                bg="gray.50"
                />
                </InputGroup>

                {/* Notification Icon */}
                <IconButton
                aria-label="Notification"
                icon={ <NotificationIcon/> }
                variant="ghost"
                isRound
                size="md"
                color="gray.600"
                _hover={{ bg: 'gray.100' }}
                />

                {/* User Profile Icon */}
                <IconButton
                aria-label="User Profile"
                icon={() => <UserIcon size={20}/>}
                variant="ghost"
                isRound
                size="md"
                color="gray.600"
                _hover={{ bg: 'gray.100' }}
                />

                {/* User Avatar */}
                <Avatar
                name="Victor"
                src=""
                size="md"
                cursor="pointer"
                border="2px solid"
                borderColor="gray.200"
                _hover={{ borderColor: 'brand.500' }}
                />
            </Flex>
        </Flex>
    );
  };

  export default Header;