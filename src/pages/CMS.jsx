import React, { useState } from "react";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

const CMS = () => {
  const [contentType, setContentType] = useState("articles");
  const [isFormOpen, setFormOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    title: "",
    body: "",
  });
  const [contentData, setContentData] = useState({
    articles: [
      { id: 1, title: "Travel Tips", body: "Pack light, carry essentials..." },
      { id: 2, title: "Top Destinations", body: "Paris, Rome, Tokyo..." },
    ],
    destinations: [
      { id: 1, title: "Paris", body: "The city of light..." },
      { id: 2, title: "Rome", body: "The eternal city..." },
    ],
    travelTips: [
      { id: 1, title: "Packing Tips", body: "Use packing cubes..." },
      { id: 2, title: "Safety Tips", body: "Keep your valuables safe..." },
    ],
  });

  const handleContentTypeChange = (e) => {
    setContentType(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContent({
      ...newContent,
      [name]: value,
    });
  };

  const handleAddContent = (e) => {
    e.preventDefault();
    const updatedContentData = {
      ...contentData,
      [contentType]: [
        ...contentData[contentType],
        { ...newContent, id: contentData[contentType].length + 1 },
      ],
    };
    setContentData(updatedContentData);
    setFormOpen(false);
    setNewContent({
      title: "",
      body: "",
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">CMS - {contentType.charAt(0).toUpperCase() + contentType.slice(1)}</h1>
        </div>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
          onClick={() => setFormOpen(true)}
        >
          <FiPlus className="mr-2" />
          Add New
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Content Type</h2>
        <select
          value={contentType}
          onChange={handleContentTypeChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="articles">Articles</option>
          <option value="destinations">Destinations</option>
          <option value="travelTips">Travel Tips</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <ContentTable content={contentData[contentType]} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New {contentType.charAt(0).toUpperCase() + contentType.slice(1)}</h2>
            <form onSubmit={handleAddContent}>
              <div className="mb-4">
                <label className="block mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newContent.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Body</label>
                <textarea
                  name="body"
                  value={newContent.body}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ContentTable = ({ content }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Title</th>
            <th className="px-4 py-2 border text-left">Body</th>
            <th className="px-4 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">{item.body}</td>
              <td className="px-4 py-2 border flex">
                <button className="text-yellow-500 hover:text-yellow-700 mr-4">
                  <FiEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CMS;
