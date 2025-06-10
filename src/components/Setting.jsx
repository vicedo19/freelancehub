import { Box, Flex, Text, Switch, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function SettingSection() {
  const [checked, setChecked] = useState({
    notification: true,
    profileVisible: false,
    accountPrivate: false,
  });

  const handleToggle = (key) => {
    setChecked(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">Settings</Text>
        <Button colorScheme="blue">Save Changes</Button>
      </Flex>

      <VStack spacing={4} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Text>Notification</Text>
          <Switch
            isChecked={checked.notification}
            onChange={() => handleToggle('notification')}
          />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Text>Profile Visible</Text>
          <Switch
            isChecked={checked.profileVisible}
            onChange={() => handleToggle('profileVisible')}
          />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Text>Account Private</Text>
          <Switch
            isChecked={checked.accountPrivate}
            onChange={() => handleToggle('accountPrivate')}
          />
        </Flex>
      </VStack>
    </Box>
  );
}

/*
import { Box, Flex, Text, Switch, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function SettingSection() {
  const [checked, setChecked] = useState({
    notification: true,
    profileVisible: false,
    accountPrivate: false,
  });

  return (
    <Box>
      <Flex>
        <Text>Settings</Text>
        <Button>Save Changes</Button>
      </Flex>

      <VStack>
        <Flex>
          <Text>Notification</Text>
          <Switch.Root
            checked={checked}
            onCheckedChange={(e) => setChecked(e.checked)}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label />
          </Switch.Root>
        </Flex>

        <Flex>
          <Text>Profile Visible</Text>
          <Switch.Root
            checked={checked}
            onCheckedChange={(e) => setChecked(e.checked)}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label />
          </Switch.Root>
        </Flex>

        <Flex>
          <Text>Account Private</Text>
          <Switch.Root
            checked={checked}
            onCheckedChange={(e) => setChecked(e.checked)}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label />
          </Switch.Root>
        </Flex>
      </VStack>
    </Box>
  );
};
*/
