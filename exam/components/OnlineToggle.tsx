import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAgentOnline, setAgentOffline } from "@/store/agentStatusSlice";

interface OnlineToggleProps {
  agentId: string;
}

const OnlineToggle = ({ agentId }: OnlineToggleProps) => {
  const dispatch = useDispatch();
  const agentStatus = useSelector((state: RootState) => 
    state.agentStatus.agents[agentId] || { isOnline: false });

  const handleToggle = useCallback(() => {
    if (agentStatus.isOnline) {
      dispatch(setAgentOffline({ id: agentId }));
    } else {
      dispatch(setAgentOnline({ id: agentId }));
    }
  }, [dispatch, agentStatus.isOnline, agentId]);

  return (
    <div className="flex items-center gap-1">
      <span className="text-sm">You're</span>
      <span
        className={`text-sm font-semibold ${
          agentStatus.isOnline ? "text-emerald-500" : "text-gray-500"
        }`}
      >
        {agentStatus.isOnline ? "ONLINE" : "OFFLINE"}
      </span>
      <button
        onClick={handleToggle}
        className="relative"
        aria-label="Toggle online status"
      >
        <div
          className={`w-8 h-4 rounded-full transition-colors ${
            agentStatus.isOnline ? "bg-emerald-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
            agentStatus.isOnline ? "right-0.5" : "left-0.5"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default OnlineToggle;