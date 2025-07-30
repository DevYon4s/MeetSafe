import React, { useState, useEffect } from "react";
import "./Groups.css";

const hardcodedGroups = [
  { id: 1, name: 'Bookworms United', image: 'https://cdn-v2.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg', description: 'A safe space for readers of all genres to share recommendations, discuss literature, and organize book club meetups.'},
  { id: 2, name: 'Traditional Games & Gebeta Club', image: 'https://cf.geekdo-images.com/aTsAClEwPQDHsgTBISjqpA__imagepage/img/EXt2JXuxPsGgajwTMekCq_XyQoo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1557975.jpg', description: 'Connect with others who love Ethiopian traditional games like Gebeta, or want to learn and play together in person.'},
  { id: 3, name: 'Geʽez Language Learners', image: 'https://encyclopedia.pub/media/common/202211/mceclip0-6375d45a6e3ad.png', description: 'Practice and learn Geʽez with others passionate about preserving Ethiopia’s ancient language and culture.'},
  { id: 4, name: 'Creative Writers & Poets', image: 'https://www.edynamiclearning.com/wp-content/uploads/2019/04/Creative-Writing-I-HIGH-RES.jpg', description: 'Share your writing, get feedback, and collaborate on creative projects with other aspiring writers and poets.'},
  { id: 5, name: 'Indigenous Music & Instruments', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv3bFS2BOuJ2Cha0eT49gK-YXgYk7lycJaQ&s', description: 'For those interested in Ethiopian music, traditional instruments, and cultural performances. Jam, learn, and celebrate together.'},
  { id: 6, name: 'Mental Health & Wellness Circle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtn9l1-1D4FUKHXR4ThGifPKPTtrmqNvBRzQ&s', description: 'A supportive group for open conversations about mental health, self-care, and building resilience—no judgment, just support.'},
  { id: 7, name: 'Outdoor Adventurers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfjaaP0DjotHX8h196scN6ia6oCd5kZp-Kg&s', description: 'Find hiking buddies, plan nature walks, and explore Ethiopia’s beautiful landscapes with like-minded explorers.'},
  { id: 8, name: 'Tech & Coding Nerds', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9lHdnN4sJI4aUinTpUmsbBhC63cEiBiXlA&s', description: 'Meet other tech enthusiasts, share coding tips, and collaborate on fun projects or hackathons.'},
  { id: 9, name: 'Art & Sketch Collective', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM-noVYYwbrH1hF7M536szmimMumpqYINSA&s', description: 'Connect with artists, illustrators, and doodlers. Share your work, learn new techniques, and create together.'},
  { id: 10, name: 'Language Exchange Café', image: 'https://www.fluent.community/wp-content/themes/fluentlv/img/pages/all-events-header.png', description: 'Share your photography passion, learn new skills, and organize photo walks to capture Ethiopia’s beauty together.'}
];

const Groups = () => {
  const [groups, setGroups] = useState(hardcodedGroups);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeMessageGroupId, setActiveMessageGroupId] = useState(null);

  const handleGroupClick = (groupId) => {
    setActiveMessageGroupId(groupId);
    setShowCreateForm(false);
  };

  const handleCreateGroupClick = () => {
    setShowCreateForm(true);
    setActiveMessageGroupId(null);
  };

  const CreateGroupForm = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("New Group:", { name, image, description });
      alert("Group creation is not yet implemented. Data logged to console.");
      setShowCreateForm(false);
      setName("");
      setImage("");
      setDescription("");
    };

    return (
      <div className="create-group-form-overlay">
        <div className="create-group-form-content">
          <h3>Create New Group</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Group Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <div className="form-buttons">
              <button type="submit">Create Group</button>
              <button type="button" onClick={() => setShowCreateForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Groups</h2>
      <div className="groups-container">
        {groups.map((group) => (
          <div
            key={group.id}
            className="group-card"
            onClick={() => handleGroupClick(group.id)}
          >
            <img src={group.image} alt={group.name} />
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            {activeMessageGroupId === group.id && (
              <div className="group-card-message">
                <p>
                  We are working to bring the groups feature to life so that you
                  can chat and have a great time with people that share your
                  interests.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMessageGroupId(null);
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
        <div
          className="group-card create-new-group-card"
          onClick={handleCreateGroupClick}
        >
          <h3>+ Create New Group</h3>
          <p>
            Don't see your niche? Be the first to create a group for your niche
            hobbies!
          </p>
        </div>
      </div>

      {showCreateForm && <CreateGroupForm />}
    </div>
  );
};

export default Groups;
