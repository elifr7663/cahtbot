import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"

export function Notes() {
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleCancel = useCallback(() => {
    setNotes("");
    setIsEditing(false);
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium">Notes</h3>
      {!isEditing && !notes && (
        <p className="text-sm text-gray-500">No notes yet</p>
      )}
      {isEditing ? (
        <>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes about this conversation"
            className="w-full h-20 p-3 text-sm bg-white text-gray-900 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2563eb] mb-4"
          />
          <div className="flex gap-2">
            <Button
              variant="secondary"
              className="flex-1 h-9 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 h-9 bg-gray-900 hover:bg-gray-800 text-white"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </>
      ) : (
        <Button
          variant="secondary"
          className="w-full h-10 justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>   
      )}
    </div>
  );
}
