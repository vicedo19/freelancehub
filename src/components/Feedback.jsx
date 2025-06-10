import { Box, Flex, Heading, Text, Grid, GridItem, Button, Badge } from "@chakra-ui/react";

export default function FeedbackSection () {
  return (
    <Box>
      {/* Header with View All button */}
      <Flex>
        <Heading>Feedback</Heading>
        <Button>View All</Button>
      </Flex>

      {/* Rating Badge */}
      <Flex>
        <Text>Overall Ratings</Text>
        <Badge>4.0</Badge>
      </Flex>

      {/* Most Recent and Highest Rating Columns */}
      <Grid>
        <GridItem>
          <Text>Most Recent</Text>
          <Box>
            <Text>Vivamus suscipit tortor</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Text>Highest Rating</Text>
          <Box>
            <Text>Aliquam quis lectus elit venenatis</Text>
          </Box>
        </GridItem>
      </Grid>

      <Box>
        <Text>Donec rutrum velit et</Text>
      </Box>
    </Box>
  );
};
