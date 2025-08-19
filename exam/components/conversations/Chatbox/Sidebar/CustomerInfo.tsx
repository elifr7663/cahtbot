import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";

function CustomerInfo() {
  return (
    <>
      {/* Customer Info */}
      <h2 className="text-lg font-semibold mb-6">Customer Info</h2>

      {/* Basic Info Fields */}
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <User className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            value="Kane"
            readOnly
            className="w-full h-10 pl-10 pr-3 bg-white text-gray-900 border border-gray-200 rounded-md text-sm"
          />
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Mail className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-10 pl-10 pr-3 bg-white text-gray-500 border border-gray-200 rounded-md text-sm"
          />
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Phone className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full h-10 pl-10 pr-3 bg-white text-gray-500 border border-gray-200 rounded-md text-sm"
          />
        </div>
      </div>
    </>
  );
}

export default CustomerInfo;
