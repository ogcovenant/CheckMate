import { Box, Heading, Text } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

const Calendar = () => {
  return (
    <>
      <Box height={"100%"} p={0}>
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={0}
        >
          <Text fontSize={28}>Calendar</Text>
        </Heading>
        <Box height={"100%"} mt={3}>
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
            initialView="dayGridMonth"
            height={"100%"}
            contentHeight={"auto"}
            handleWindowResize={true}
            showNonCurrentDates={false}
            fixedWeekCount={false}
            headerToolbar={{
              left: "title",
              center: "timeGridDay,timeGridWeek,dayGridMonth,listWeek",
              right: "prev,next",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
