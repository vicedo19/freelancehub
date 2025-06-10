import {
  Box,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Stack,
  
} from "@chakra-ui/react";

function ProjectSection  ()  {
  const projectData = [
  { title: "Website Design", earnings: "$3,500", status: "Completed" },
    { title: "Social Campaign", earnings: "$2,800", status: "Pending Review" },
    { title: "Logo Creation", earnings: "$1,200", status: "In Progress" },
    { title: "App Development", earnings: "$4,500", status: "Delivered" },
  ]

  return (
    <Box>
      <Stack direction={["column", "row"]} spacing={4} mb={6} align="center">
        <Input placeholder="Search..." flex={1} />
        <Select w="150px" defaultValue="all">
          <option value="all">All</option>
          <option value="in-progress">In Progress</option>
          <option value="ended">Ended</option>
        </Select>
      </Stack>

      <SimpleGrid columns={1} spacing={4}>
        {projectData.map((project, index) => (
          <Card key={index} variant="outline">
            <CardHeader>
              <Heading size="md">{project.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Earnings: {project.earnings}</Text>
              <Text>Status: {project.status}</Text>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectSection;
