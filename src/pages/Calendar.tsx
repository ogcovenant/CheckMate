import { Box, Heading, Text } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <>
      <Box>
        <Heading>
          <Text>Calendar</Text>
        </Heading>
        <Box>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
