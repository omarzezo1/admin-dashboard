import { useState } from 'react'
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId } from "./event-utils";


const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([])

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }


  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Calendar
          </h2>
          <p
            className={`mt-1 text-base dark:text-white text-black`}
          >
            Manage your events
          </p>
        </div>

        <div
          className={`w-full mt-8 flex gap-5 dark:text-white text-zinc-800`}
        >
          <div
            className={`demo-app-sidebar min-w-[200px] dark:bg-zinc-800 bg-slate-200 p-3 rounded-sm border-r-2 border-gray-400`}
          >
            <div className="demo-app-sidebar-section">
              <h2 className="mb-5">All Events ({currentEvents.length})</h2>
              <ul>
                {currentEvents.map((event) => (
                  <SidebarEvent key={event.id} event={event} />
                ))}
              </ul>
            </div>
          </div>
          <div className="min-w-[800px] flex-grow">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

export default Calendar;
