import { useState } from "react";
import { VStack, Flex, Text, Button, Heading } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

export default function Setting() {
  const [checked, setChecked] = useState({
    notification: true,
    profileVisible: false,
    accountPrivate: false,
  });

  const handleToggle = (key) => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <VStack align="stretch" spacing={6} p={4}>
      <Flex justify="space-between" align="center">
        <Heading size="md">Settings</Heading>
        <Button colorScheme="blue">Save Changes</Button>
      </Flex>

      <VStack align="stretch" spacing={4}>
        <Flex justify="space-between" align="center">
          <Text>Notification</Text>
          <Switch
            isChecked={checked.notification}
            onChange={() => handleToggle("notification")}
          />
        </Flex>

        <Flex justify="space-between" align="center">
          <Text>Profile Visible</Text>
          <Switch
            isChecked={checked.profileVisible}
            onChange={() => handleToggle("profileVisible")}
          />
        </Flex>

        <Flex justify="space-between" align="center">
          <Text>Account Private</Text>
          <Switch
            isChecked={checked.accountPrivate}
            onChange={() => handleToggle("accountPrivate")}
          />
        </Flex>
      </VStack>
    </VStack>
  );
}
