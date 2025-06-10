
import { Box, Heading, Text, Button, Avatar, Stack } from "@chakra-ui/react";


const ProfileSection = () => {
    return (
        <Box mb={8}>
            <Stack direction="row" spacing={4} align="center" mb={4}>
                <Avatar size="xl" name="Samantha James" src="./assets/profile.png" />
                <Box>
                    <Heading as="h2" size="md"> Samantha James </Heading>
                    <Text color="gray.600">UI/UX Designer</Text>
                    <Text>Specializing in user experience and user interface design for web and mobile applications.</Text>
                </Box>
            </Stack>
            <Button>Edit Profile</Button>
        </Box>
    );
};

export default ProfileSection;