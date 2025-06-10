import { Box, VStack, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import './sidebar.css'
import { MdFeedback } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { LiaSignOutAltSolid } from "react-icons/lia";

export default function Sidebar() {
  return (
    <Box w="250px" bg="gray.300" p={4} boxShadow="md" h="100vh" >
      <VStack>
        <Link as={RouterLink} to="/profile" className="links"> <LiaSignOutAltSolid /> Profile Details</Link>
        <Link as={RouterLink} to="/projects" className="links"> <GoProjectSymlink /> Projects</Link>
        <Link as={RouterLink} to="/feedback" className="links" > <MdFeedback /> Feedback</Link>
        <Link as={RouterLink} to="/earnings" className="links" > <LiaSignOutAltSolid /> Earnings</Link>
        <Link as={RouterLink} to="/settings" className="links" > <RiSettings3Fill /> Settings</Link>
      </VStack>
    </Box>
  );
};

