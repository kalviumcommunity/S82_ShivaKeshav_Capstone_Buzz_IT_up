import React, { useState } from "react";
import { Save } from "lucide-react";

const OfflineSaveButton = ({ articleId, onSave }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate saving the article locally
      await onSave(articleId); // Pass the article ID to the save handler
      setIsSaved(true);
    } catch (error) {
      console.error("Failed to save article:", error);
      alert("Failed to save the article for offline access.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Button
      variant={isSaved ? "secondary" : "default"}
      disabled={isSaved || isSaving}
      onClick={handleSave}
      className="flex items-center gap-2"
    >
      <Save className="w-4 h-4" />
      {isSaved ? "Saved" : isSaving ? "Saving..." : "Save Offline"}
    </Button>
  );
};

export default OfflineSaveButton;