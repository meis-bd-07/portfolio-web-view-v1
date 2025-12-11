import { userData } from '@/constants/experiences';
import { Calendar, Mail, MapPin, Phone, MessageCircle, MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    whatsApp
  } = userData || {};

  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent('Hello Sifat,\nI have a project idea. I want someone to collaborate. Let\'s talk.')}`;

  return (
    <div
      className="
        w-full max-w-sm rounded-2xl p-4 border shadow-xl 
        text-gray-800 dark:text-white border-gray-200 dark:border-gray-800
        transition-colors duration-300
      "
      style={{
        background: 'linear-gradient(90deg, #B2E0F7 0%, #9BBFDE 100%)',
      }}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="relative mb-3">
          {/* Profile image gradient ring */}
          <div
            className="w-18 h-18 rounded-full p-[3px]"
            style={{
              background: 'linear-gradient(45deg, #757F9A, #7873f5)',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={profileImageUrl}
                alt={name + " | Mohammad Erfanul Islam Sifat"}
                className="w-full h-full object-fill rounded-full bg-gray-700"
              />
            </div>
          </div>

          {isOnline && (
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          )}
        </div>

        <h1 className="text-xl font-bold mb-2">{name}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {titleTags?.map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1 text-xs rounded-full tracking-wider text-white shadow-md
                bg-linear-to-r from-[#757F9A] to-[#7873f5]
                transition-transform duration-300 hover:scale-105
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200 dark:border-gray-800" />

      {/* Contact Info */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin height={16} width={16} />
          <span className="ml-2 text-sm">{location}</span>
        </div>

        <a
          href={`mailto:${email}`}
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors dark:text-gray-300 dark:hover:text-blue-300 overflow-hidden"
        >
          <Mail height={16} width={16} className="shrink-0" />
          <span className="ml-2 text-sm truncate">{email}</span>
        </a>

        <div className="flex items-center text-gray-600 hover:text-green-500 transition-colors dark:text-gray-300 dark:hover:text-green-300">
          <Phone height={16} width={16} className="shrink-0" />
          <span className="ml-2 text-sm truncate">{number}</span>
        </div>

        <Link to={whatsappLink} target='_blank' className="flex items-center text-gray-600 hover:text-green-500 transition-colors dark:text-gray-300 dark:hover:text-green-300">
          <MessageCircleMore height={16} width={16} className="shrink-0" />
          <span className="ml-2 text-sm truncate">{number}</span>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <a
          href={bookACallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full flex justify-center items-center px-4 py-3 rounded-xl font-semibold text-sm
            bg-gray-900 text-white shadow-md
            dark:bg-white dark:text-gray-900
            transition-transform duration-200 hover:scale-105
            cursor-not-allowed pointer-events-none opacity-20
          "
        >
          <Calendar height={16} width={16} />
          <span className="ml-2">Book a Call</span>
        </a>
      </div>
    </div>
  );
};

export default UserCard;
