import { FaStar } from "react-icons/fa6";

export default function Rating({ info }) {
  return (
    <>
      {!isNaN(info.rating) && (
        <div className="flex items-center gap-2 text-lg">
          <div>
            <FaStar className="text-[#e8b647] text-xl" />
          </div>
          <div className="text-base font-medium">
            {Math.floor(info.rating * 10) / 10}
          </div>
        </div>
      )}
    </>
  );
}
