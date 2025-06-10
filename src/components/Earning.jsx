import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
} from "@chakra-ui/react";

const EarningSection = () => {
  return (
    <Box>
      <Flex>
        <Heading>Earnings</Heading>
        <Button variant="link">View All</Button>
      </Flex>

      <Stack>
        <Box flex={1}>
          <Stat>
            <StatLabel>Total Earnings</StatLabel>
            <StatNumber>$6,350</StatNumber>
          </Stat>
        </Box>
        <Box flex={1}>
          <Stat>
            <StatLabel>Available Balance</StatLabel>
            <StatNumber>$2,500</StatNumber>
          </Stat>
        </Box>
      </Stack>

      {/* Withdrawal Section */}
      <Box>
        <Text>Withdrawal Amount</Text>
        <Flex>
          <Input value="$3,800" readOnly />
        </Flex>
      </Box>

      

      {/* Search and Filter */}
      <Flex>
        <Input placeholder="search..." />
        <Select>
          <option>All</option>
          <option>Deposits</option>
          <option>Withdrawals</option>
        </Select>
      </Flex>

      {/* Transactions Table */}
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Client Name</Th>
              <Th>Earnings</Th>
              <Th>Feedback</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>"Website Redesign"</Td>
              <Td>"Acme Corp"</Td>
              <Td>"$1200"</Td>
              <Button>
                <Td>"View Details"</Td>
              </Button>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default EarningSection;
