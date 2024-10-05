import React, { useState } from "react";
import { useFormContext } from "../../Context/Task1";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Step6 = ({ onNext, onBack, Step }) => {
  const { formData, updateFormData } = useFormContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMembers, setSelectedMembers] = useState(
    formData.selectedMembers || []
  );
  const [error, setError] = useState(false);
  const maxSelectedMembers = 5;

  const navigate = useNavigate();

  const teamMembers = [
    { id: 1, name: "Fanny Russell" },
    { id: 2, name: "Rodney Meyer" },
    { id: 3, name: "Ellen Simmons" },
    { id: 4, name: "Virgie Kim" },
    { id: 5, name: "Emma Castro" },
    { id: 6, name: "Steve Mathew" },
    { id: 7, name: "Robert Pattinson" },
    { id: 8, name: "Steve Waugh" },
    { id: 9, name: "Chris Evans" },
    { id: 10, name: "Scarlett Johansson" },
  ];

  const handleAddMember = (member) => {
    if (
      !selectedMembers.some((m) => m.id === member.id) &&
      selectedMembers.length < maxSelectedMembers
    ) {
      setSelectedMembers((prevMembers) => [...prevMembers, member]);
      setSearchQuery("");
    }
  };

  const handleRemoveMember = (member) => {
    setSelectedMembers((prevMembers) =>
      prevMembers.filter((m) => m.id !== member.id)
    );
  };

  const toggleMemberSelection = (member) => {
    if (selectedMembers.some((m) => m.id === member.id)) {
      handleRemoveMember(member);
    } else {
      handleAddMember(member);
    }
  };

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedMembers.some((m) => m.id === member.id)
  );

  const handleNext = () => {
    if (selectedMembers.length === 0) {
      setError(true);
    } else {
      updateFormData("selectedMembers", selectedMembers);
      console.log(selectedMembers, formData);
      localStorage.setItem(
        "project",
        JSON.stringify({ ...formData, selectedMembers: selectedMembers })
      );
      toast.success("Project Created");
      navigate("/summary");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-full md:h-[600px] sm:max-w-md w-full">
        <h2 className="text-center text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
          Team Members
        </h2>

        {/* Add Member Input */}
        <div className="relative flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder={
                selectedMembers.length >= maxSelectedMembers
                  ? `Max ${maxSelectedMembers} members selected`
                  : "Search or Add a member"
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={selectedMembers.length >= maxSelectedMembers}
            />
            {/* Suggestions dropdown for filtered members */}
            {searchQuery && filteredMembers.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded w-full max-h-40 overflow-y-auto">
                {filteredMembers.map((member) => (
                  <li
                    key={member.id}
                    className="p-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                    onClick={() => handleAddMember(member)}
                  >
                    <span>{member.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Selected Members Display */}
        <div className="h-16 overflow-auto w-full flex">
          {selectedMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center bg-blue-100 text-blue-800 rounded-full h-1/2 px-2 mr-2 mb-2"
            >
              <span className="text-sm">{member.name}</span>
              <button
                className="ml-2 text-blue-600 hover:text-blue-800"
                onClick={() => handleRemoveMember(member)}
              >
                &times;
              </button>
            </div>
          ))}
          {/* Show error message if no members are selected */}
          {error && selectedMembers.length < 1 && (
            <div className="flex justify-center items-center w-full rounded-full h-1/2">
              <span className="text-md text-red-500 flex items-center">
                Please select at least one member.
              </span>
            </div>
          )}
          {selectedMembers.length < 1 && !error && (
            <div className="flex justify-center items-center w-full rounded-full h-1/2">
              <span className="text-md text-gray-400 flex items-center">
                Select Members
              </span>
            </div>
          )}
        </div>

        {/* Member List */}
        <ul className="space-y-2 overflow-y-auto h-[300px] mb-2">
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className="flex items-center p-2 border rounded cursor-pointer"
              onClick={() => toggleMemberSelection(member)}
            >
              <input
                type="checkbox"
                checked={selectedMembers.some((m) => m.id === member.id)}
                className="h-4 w-4"
                disabled={
                  selectedMembers.length >= maxSelectedMembers &&
                  !selectedMembers.some((m) => m.id === member.id)
                }
              />
              <span
                className={`flex-grow text-sm sm:text-base ml-2 text-gray-800 `}
              >
                {member.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Navigation Buttons */}
        <Navigation onNext={handleNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step6;
