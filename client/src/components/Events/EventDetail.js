import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditEventForm from "./EditEventForm";
import "./EventDetail.css";

const ethiopianNames = [
  "Abebe",
  "Kebede",
  "Fatuma",
  "Chaltu",
  "Tigist",
  "Aster",
  "Bekele",
  "Genet",
  "Solomon",
  "Meaza",
];

const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
};

const hardcodedEvents = [
  {
    id: 1,
    title: "Book Club Meetup",
    description:
      'Discussing "The Shadow King" by Maaza Mengiste. All are welcome!',
    location: "Tomoca Coffee, Addis Ababa",
    max_participants: 20,
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzfk4wSHKUXF_jQLM7CLP9r4lZpKxoWs4Gg&s",
    creator_id: 1,
    date_time: `Today at ${getRandomTime()}`,
    host_name: ethiopianNames[0],
  },
  {
    id: 2,
    title: "Gebeta Tournament",
    description:
      "A friendly tournament of Gebeta. Prizes for the top 3 players!",
    location: "Unity Park, Addis Ababa",
    max_participants: 16,
    cover_photo:
      "https://cf.geekdo-images.com/aTsAClEwPQDHsgTBISjqpA__imagepage/img/EXt2JXuxPsGgajwTMekCq_XyQoo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1557975.jpg",
    creator_id: 2,
    date_time: `Tomorrow at ${getRandomTime()}`,
    host_name: ethiopianNames[1],
  },
  {
    id: 3,
    title: "Ge'ez Language Workshop",
    description:
      "An introductory workshop to the Ge'ez script and basic grammar.",
    location: "Addis Ababa University, Addis Ababa",
    max_participants: 30,
    cover_photo: "https://ethiopianhistory.com/images/the_Sabean.jpg",
    creator_id: 3,
    date_time: `This Friday at ${getRandomTime()}`,
    host_name: ethiopianNames[2],
  },
  {
    id: 4,
    title: "Poetry Slam Night",
    description:
      "Share your original poetry or enjoy the performances of others.",
    location: "Fendika Azmari Bet, Addis Ababa",
    max_participants: 50,
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlohVn4xfjudXfPJVik9fgDdSzFvmu3z1sA&s",
    creator_id: 4,
    date_time: `Next Saturday at ${getRandomTime()}`,
    host_name: ethiopianNames[3],
  },
  {
    id: 5,
    title: "Traditional Music Jam Session",
    description:
      "Bring your instruments and lets jam to some traditional Ethiopian tunes.",
    location: "The Ethiopian National Theatre, Addis Ababa",
    max_participants: 40,
    cover_photo:
      "https://torneter.com/cdn/shop/products/20200730_172152_1024x1024@2x.jpg?v=1596156792",
    creator_id: 5,
    date_time: `This Sunday at ${getRandomTime()}`,
    host_name: ethiopianNames[4],
  },
  {
    id: 6,
    title: "Mental Health Awareness Walk",
    description: "A walk to raise awareness about mental health and wellness.",
    location: "Meskel Square, Addis Ababa",
    max_participants: 100,
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtLR0aO_zU-SIR_TxV2M8R62X8YhF31tNzQ&s",
    creator_id: 6,
    date_time: `Next Monday at ${getRandomTime()}`,
    host_name: ethiopianNames[5],
  },
  {
    id: 7,
    title: "Hiking Trip to Entoto Hills",
    description:
      "A scenic hike through the Entoto Hills. Pack a lunch and enjoy the views!",
    location: "Entoto Hills, Addis Ababa",
    max_participants: 25,
    cover_photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
    creator_id: 7,
    date_time: `Next Tuesday at ${getRandomTime()}`,
    host_name: ethiopianNames[6],
  },
  {
    id: 8,
    title: "Tech Talk: The Future of AI",
    description:
      "A discussion on the latest trends and advancements in Artificial Intelligence.",
    location: "Iceaddis, Addis Ababa",
    max_participants: 60,
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4NRB6SkZ77KX1qJbBQ6v3h5h-FXzdKWC0g&s",
    creator_id: 8,
    date_time: `Next Wednesday at ${getRandomTime()}`,
    host_name: ethiopianNames[7],
  },
  {
    id: 9,
    title: "Plein Air Painting Session",
    description:
      "A casual painting session outdoors. All skill levels are welcome.",
    location: "Friendship Park, Addis Ababa",
    max_participants: 15,
    cover_photo:
      "https://media.istockphoto.com/id/1594228594/photo/close-up-image-of-a-young-creative-artists-hands-smeared-with-watercolors-holding-a-spatula.jpg?s=612x612&w=0&k=20&c=G-bXSkCLcgiaEkmD-GGe46TsrF0l6X2ebg-zAjtEFcA=",
    creator_id: 9,
    date_time: `Next Thursday at ${getRandomTime()}`,
    host_name: ethiopianNames[8],
  },
  {
    id: 10,
    title: "Amharic-English Language Exchange",
    description: "Practice your Amharic or English with native speakers.",
    location: "The Lime Tree, Addis Ababa",
    max_participants: 30,
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNXmtWJHC3DPV7MK9Y5BZBmrgJ413yjGo7A&s",
    creator_id: 10,
    date_time: `Next Friday at ${getRandomTime()}`,
    host_name: ethiopianNames[9],
  },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundEvent = hardcodedEvents.find(e => e.id === parseInt(eventId));
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // Handle event not found, e.g., redirect to a 404 page or events list
      navigate('/events');
    }
  }, [eventId, navigate]);

  const handleUpdateEvent = (updatedEvent) => {
    // In a real app, you'd update your backend here
    setEvent(updatedEvent);
    setIsEditing(false);
  };

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="event-detail-container">
      {isEditing ? (
        <EditEventForm event={event} onUpdateEvent={handleUpdateEvent} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <img src={event.cover_photo} alt={event.title} className="event-detail-image" />
          <h1>{event.title}</h1>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date & Time:</strong> {event.date_time}</p>
          <p><strong>Host:</strong> {event.host_name}</p>
          <p><strong>Max Participants:</strong> {event.max_participants}</p>
          <button onClick={() => setIsEditing(true)}>Edit Event</button>
        </>
      )}
    </div>
  );
};

export default EventDetail;
