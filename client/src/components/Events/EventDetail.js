import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import EditEventForm from './EditEventForm';
import './EventDetail.css';

const ethiopianNames = [
  "Abebe", "Kebede", "Fatuma", "Chaltu", "Tigist", 
  "Aster", "Bekele", "Genet", "Solomon", "Meaza"
];

const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
};

const hardcodedEvents = [
  {
    id: 1,
    name: "Book Club Meetup",
    description: 'Discussing "The Shadow King" by Maaza Mengiste. All are welcome!',
    place: "Tomoca Coffee, Addis Ababa",
    maxParticipants: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzfk4wSHKUXF_jQLM7CLP9r4lZpKxoWs4Gg&s",
    creator: {
      id: 1,
      name: ethiopianNames[0],
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    participants: [
      { id: 1, name: ethiopianNames[0], photo: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: 2, name: ethiopianNames[1], photo: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 3, name: ethiopianNames[2], photo: "https://randomuser.me/api/portraits/men/22.jpg" }
    ],
    date_time: `Today at ${getRandomTime()}`
  },
  {
    id: 2,
    name: "Gebeta Tournament",
    description: "A friendly tournament of Gebeta. Prizes for the top 3 players!",
    place: "Unity Park, Addis Ababa",
    maxParticipants: 16,
    image: "https://cf.geekdo-images.com/aTsAClEwPQDHsgTBISjqpA__imagepage/img/EXt2JXuxPsGgajwTMekCq_XyQoo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1557975.jpg",
    creator: {
      id: 2,
      name: ethiopianNames[1],
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    participants: [
      { id: 2, name: ethiopianNames[1], photo: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 4, name: ethiopianNames[3], photo: "https://randomuser.me/api/portraits/women/33.jpg" }
    ],
    date_time: `Tomorrow at ${getRandomTime()}`
  },
  {
    id: 3,
    name: "Ge'ez Language Workshop",
    description: "An introductory workshop to the Ge'ez script and basic grammar.",
    place: "Addis Ababa University, Addis Ababa",
    maxParticipants: 30,
    image: "https://ethiopianhistory.com/images/the_Sabean.jpg",
    creator: {
      id: 3,
      name: ethiopianNames[2],
      photo: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    participants: [
      { id: 3, name: ethiopianNames[2], photo: "https://randomuser.me/api/portraits/men/22.jpg" },
      { id: 5, name: ethiopianNames[4], photo: "https://randomuser.me/api/portraits/women/55.jpg" }
    ],
    date_time: `This Friday at ${getRandomTime()}`
  },
  {
    id: 4,
    name: "Poetry Slam Night",
    description: "Share your original poetry or enjoy the performances of others.",
    place: "Fendika Azmari Bet, Addis Ababa",
    maxParticipants: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlohVn4xfjudXfPJVik9fgDdSzFvmu3z1sA&s",
    creator: {
      id: 4,
      name: ethiopianNames[3],
      photo: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    participants: [
      { id: 4, name: ethiopianNames[3], photo: "https://randomuser.me/api/portraits/women/33.jpg" },
      { id: 6, name: ethiopianNames[5], photo: "https://randomuser.me/api/portraits/women/66.jpg" }
    ],
    date_time: `Next Saturday at ${getRandomTime()}`
  },
  {
    id: 5,
    name: "Traditional Music Jam Session",
    description: "Bring your instruments and lets jam to some traditional Ethiopian tunes.",
    place: "The Ethiopian National Theatre, Addis Ababa",
    maxParticipants: 40,
    image: "https://torneter.com/cdn/shop/products/20200730_172152_1024x1024@2x.jpg?v=1596156792",
    creator: {
      id: 5,
      name: ethiopianNames[4],
      photo: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    participants: [
      { id: 5, name: ethiopianNames[4], photo: "https://randomuser.me/api/portraits/women/55.jpg" },
      { id: 7, name: ethiopianNames[6], photo: "https://randomuser.me/api/portraits/men/77.jpg" }
    ],
    date_time: `This Sunday at ${getRandomTime()}`
  },
  {
    id: 6,
    name: "Mental Health Awareness Walk",
    description: "A walk to raise awareness about mental health and wellness.",
    place: "Meskel Square, Addis Ababa",
    maxParticipants: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtLR0aO_zU-SIR_TxV2M8R62X8YhF31tNzQ&s",
    creator: {
      id: 6,
      name: ethiopianNames[5],
      photo: "https://randomuser.me/api/portraits/women/66.jpg"
    },
    participants: [
      { id: 6, name: ethiopianNames[5], photo: "https://randomuser.me/api/portraits/women/66.jpg" },
      { id: 8, name: ethiopianNames[7], photo: "https://randomuser.me/api/portraits/women/88.jpg" }
    ],
    date_time: `Next Monday at ${getRandomTime()}`
  },
  {
    id: 7,
    name: "Hiking Trip to Entoto Hills",
    description: "A scenic hike through the Entoto Hills. Pack a lunch and enjoy the views!",
    place: "Entoto Hills, Addis Ababa",
    maxParticipants: 25,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
    creator: {
      id: 7,
      name: ethiopianNames[6],
      photo: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    participants: [
      { id: 7, name: ethiopianNames[6], photo: "https://randomuser.me/api/portraits/men/77.jpg" },
      { id: 9, name: ethiopianNames[8], photo: "https://randomuser.me/api/portraits/men/99.jpg" }
    ],
    date_time: `Next Tuesday at ${getRandomTime()}`
  },
  {
    id: 8,
    name: "Tech Talk: The Future of AI",
    description: "A discussion on the latest trends and advancements in Artificial Intelligence.",
    place: "Iceaddis, Addis Ababa",
    maxParticipants: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4NRB6SkZ77KX1qJbBQ6v3h5h-FXzdKWC0g&s",
    creator: {
      id: 8,
      name: ethiopianNames[7],
      photo: "https://randomuser.me/api/portraits/women/88.jpg"
    },
    participants: [
      { id: 8, name: ethiopianNames[7], photo: "https://randomuser.me/api/portraits/women/88.jpg" },
      { id: 10, name: ethiopianNames[9], photo: "https://randomuser.me/api/portraits/women/10.jpg" }
    ],
    date_time: `Next Wednesday at ${getRandomTime()}`
  },
  {
    id: 9,
    name: "Plein Air Painting Session",
    description: "A casual painting session outdoors. All skill levels are welcome.",
    place: "Friendship Park, Addis Ababa",
    maxParticipants: 15,
    image: "https://media.istockphoto.com/id/1594228594/photo/close-up-image-of-a-young-creative-artists-hands-smeared-with-watercolors-holding-a-spatula.jpg?s=612x612&w=0&k=20&c=G-bXSkCLcgiaEkmD-GGe46TsrF0l6X2ebg-zAjtEFcA=",
    creator: {
      id: 9,
      name: ethiopianNames[8],
      photo: "https://randomuser.me/api/portraits/men/99.jpg"
    },
    participants: [
      { id: 9, name: ethiopianNames[8], photo: "https://randomuser.me/api/portraits/men/99.jpg" },
      { id: 1, name: ethiopianNames[0], photo: "https://randomuser.me/api/portraits/men/32.jpg" }
    ],
    date_time: `Next Thursday at ${getRandomTime()}`
  },
  {
    id: 10,
    name: "Amharic-English Language Exchange",
    description: "Practice your Amharic or English with native speakers.",
    place: "The Lime Tree, Addis Ababa",
    maxParticipants: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNXmtWJHC3DPV7MK9Y5BZBmrgJ413yjGo7A&s",
    creator: {
      id: 10,
      name: ethiopianNames[9],
      photo: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    participants: [
      { id: 10, name: ethiopianNames[9], photo: "https://randomuser.me/api/portraits/women/10.jpg" },
      { id: 2, name: ethiopianNames[1], photo: "https://randomuser.me/api/portraits/women/44.jpg" }
    ],
    date_time: `Next Friday at ${getRandomTime()}`
  }
];

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [event, setEvent] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock current user - in a real app, this would come from authentication context
  const currentUser = {
    id: 1,
    isCreator: event?.creator?.id === 1
  };

  useEffect(() => {
    const foundEvent = hardcodedEvents.find(e => e.id === parseInt(eventId));
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      navigate('/events');
    }
  }, [eventId, navigate]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowDropdown(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      console.log('Event deleted');
      navigate('/events');
    }
    setShowDropdown(false);
  };

  const handleSave = (updatedData) => {
    setEvent(prev => ({
      ...prev,
      ...updatedData
    }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (!event) {
    return <div>Loading event details...</div>;
  }

  const handleJoinEvent = () => {
    setIsOpen(true);
    setIsJoined(true);
  };

  const handleLeaveEvent = () => {
    setIsJoined(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

   return (
    <div className="event-detail-container">
      <div className="event-detail-card">
        <div className="event-header">
          <img src={event.image} alt={event.name} className="event-detail-image" />
          {currentUser.isCreator && !isEditing && (
            <div className="event-actions">
              <button className="event-menu-button" onClick={toggleDropdown}>
                <span>⋮</span>
              </button>
              {showDropdown && (
                <div className="event-menu-dropdown">
                  <button className="edit-button" onClick={handleEdit}>Edit Event</button>
                  <button className="delete-button" onClick={handleDelete}>Delete Event</button>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="event-detail-content">
          <h2>{event.name}</h2>
          
          <div className="event-meta">
            <p><strong>Location:</strong> {event.place}</p>
            <p><strong>Date & Time:</strong> {event.date_time}</p>
            <p><strong>Host:</strong> {event.creator.name}</p>
            <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
            <p><strong>Current Participants:</strong> {event.participants.length}</p>
          </div>
          
          <div className="event-description">
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>
          
          <div className="participants-section">
            <h3>Participants</h3>
            <div className="participants-grid">
              {event.participants.map(participant => (
                <div key={participant.id} className="participant-card">
                  <img 
                    src={participant.photo} 
                    alt={participant.name} 
                    className="participant-photo"
                  />
                  <p className="participant-name">{participant.name}</p>
                  {participant.id === event.creator.id && (
                    <span className="creator-badge">Creator</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="event-actions-buttons">
            {isJoined ? (
              <button className="leave-button" onClick={handleLeaveEvent}>
                Leave Event
              </button>
            ) : (
              <button className="join-button" onClick={handleJoinEvent}>
                I'm Coming
              </button>
            )}
            <button className="cancel-button" onClick={() => navigate('/events')}>
              Back to All Events
            </button>
          </div>
        </div>
      </div>

      {/* Headless UI Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="dialog-container" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="dialog-overlay" />
          </Transition.Child>

          <div className="dialog-content-wrapper">
            <div className="dialog-content-inner">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dialog-panel">
                  <Dialog.Title className="dialog-title">
                    Registration Confirmed
                  </Dialog.Title>
                  <div className="dialog-message">
                    <p>You are registered for the event! Don't forget to bring your national ID with you when coming to the event.</p>
                  </div>

                  <div className="dialog-actions">
                    <button
                      type="button"
                      className="dialog-confirm-button"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {isEditing && (
        <EditEventForm 
          event={event} 
          onSave={handleSave} 
          onCancel={handleCancelEdit} 
        />
      )}
    </div>
  );
};

export default EventDetail;