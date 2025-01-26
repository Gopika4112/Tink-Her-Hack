import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventInput, setEventInput] = useState("");
  const [hoveredDate, setHoveredDate] = useState(null); // To track the hovered date

  const styles = {
    calendar: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#f0f0f0",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    days: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    cell: {
      textAlign: "center",
      padding: "20px",
      cursor: "pointer",
      position: "relative",
    },
    date: {
      fontSize: "16px",
    },
    dateCircle: {
      border: "2px solid #4caf50", // Border around date to indicate event
      borderRadius: "50%",
      padding: "5px", // Add padding to form a circle around the date
    },
    eventMessage: {
      fontSize: "12px",
      marginTop: "5px",
    },
    eventForm: {
      marginTop: "20px",
      padding: "20px",
      borderTop: "2px solid #ccc",
    },
    eventFormInput: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    eventFormButton: {
      padding: "10px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    eventFormButtonHover: {
      backgroundColor: "#45a049",
    },
    tooltip: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#333",
      color: "#fff",
      padding: "5px",
      borderRadius: "4px",
      fontSize: "12px",
      whiteSpace: "nowrap",
      zIndex: 10,
    },
  };

  const renderHeader = () => {
    return (
      <div style={styles.header}>
        <button style={styles.button} onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          Previous
        </button>
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
        <button style={styles.button} onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          Next
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div style={styles.days}>
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "yyyy-MM-dd");
        const hasEvent = events[formattedDate];

        days.push(
          <div
            key={day}
            style={styles.cell}
            onClick={() => {
              setSelectedDate(formattedDate);
              setEventInput(events[formattedDate] || "");
            }}
            onMouseEnter={() => {
              setHoveredDate(formattedDate); // Track hovered date
            }}
            onMouseLeave={() => {
              setHoveredDate(null); // Reset hovered date
            }}
          >
            <span
              style={{
                ...styles.date,
                ...(hasEvent && styles.dateCircle), // Apply circle around the date if event exists
              }}
            >
              {format(day, "d")}
            </span>
            {hoveredDate === formattedDate && hasEvent && (
              <div style={styles.tooltip}>
                {events[formattedDate]} {/* Display event message */}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} style={styles.row}>{days}</div>);
      days = [];
    }
    return rows;
  };

  const handleEventSubmit = () => {
    if (selectedDate) {
      setEvents({
        ...events,
        [selectedDate]: eventInput,
      });
      setEventInput("");
      setSelectedDate(null);
    }
  };

  return (
    <div style={styles.calendar}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {selectedDate && (
        <div style={styles.eventForm}>
          <h3>Add Event for {selectedDate}</h3>
          <input
            type="text"
            value={eventInput}
            onChange={(e) => setEventInput(e.target.value)}
            style={styles.eventFormInput}
            placeholder="Enter event details"
          />
          <button
            onClick={handleEventSubmit}
            style={{
              ...styles.eventFormButton,
              ":hover": styles.eventFormButtonHover,
            }}
          >
            Save Event
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;




