import { userData } from '@/constants/experiences';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

const UserCard = () => {
  const {
    name,
    titleTags,
    location,
    email,
    profileImageUrl,
    isOnline,
    bookACallUrl,
    number,
  } = userData;

  return (
    <div className="hidden md:block">
        <div className="
            w-full max-w-sm rounded-2xl p-4 border transition-colors duration-300
            bg-white text-gray-800 border-gray-200 shadow-xl
            dark:bg-gray-900 dark:text-white dark:border-gray-800
            "
        >

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="relative mb-1">
            <div className="w-15 h-15 rounded-full p-0.5" style={{ background: 'linear-gradient(45deg, #a700ff, #00ff66)', padding: '3px' }}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-full bg-gray-700" // bg-gray-700 is a placeholder background
                />
              </div>
            </div>
            {isOnline && (
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            )}
          </div>

          <h1 className="text font-bold mb-2">{name}</h1>

          {/* Tags */}
          <div className="flex flex-wrap space-x-2 gap-1">
            {titleTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full tracking-wider
                         bg-gray-100 text-gray-600
                         dark:bg-gray-800 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-3 border-gray-200 dark:border-gray-800" />

        {/* Contact Info */}
        <div className="space-y-3 mb-3">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin height={14} width={14} />
                <span className="ml-1 text-sm text-gray-800 dark:text-white">{location}</span>
            </div>
            {/* Email */}
            <a
                href={`mailto:${email}`}
                className="flex items-center max-w-[200px] text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-400 dark:hover:text-indigo-400"
            >
                <Mail height={14} width={14} className="shrink-0" />
                <span className="ml-1 text-sm truncate">
                    {email}
                </span>
            </a>
            <div
                className="flex items-center max-w-[200px] text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-400 dark:hover:text-indigo-400"
            >
                <Phone height={14} width={14} className="shrink-0" />
                <span className="ml-1 text-sm truncate">
                    {number}
                </span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <a
            href={bookACallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center px-1 py-3 rounded-xl font-semibold text-sm transition-all
                       bg-gray-900 text-white hover:bg-gray-800 shadow-md
                       dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 
                       cursor-not-allowed pointer-events-none opacity-20"
          >
            <Calendar height={14} width={14} />
            <span className="ml-2">Book a Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;