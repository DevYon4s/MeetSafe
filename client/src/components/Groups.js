import React, { useState, useEffect } from "react";
import "./Groups.css";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/groups");
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

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
