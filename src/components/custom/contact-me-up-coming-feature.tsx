import { Calendar, Mail, MessageCircle, Star } from "lucide-react";

export default function ContactCardUpComing() {
  return (
    <div className="mt-10 p-6 bg-black rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-border overflow-hidden">
      <div className="flex items-center space-x-4">
        <Star className="text-indigo-500 w-10 h-10 animate-bounce" />
        <div>
          <h2 className="text-2xl font-bold text-white dark:text-white">
            Contact Me
          </h2>
          <p className="text-gray-400 dark:text-gray-300 mt-1">
            Awesome features are coming soon! Stay tuned.
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        <li className="flex items-center space-x-3">
          <Mail className="text-indigo-500 w-6 h-6" />
          <span className="text-gray-300 dark:text-gray-300">Send an Email</span>
        </li>
        <li className="flex items-center space-x-3">
          <Calendar className="text-indigo-500 w-6 h-6" />
          <span className="text-gray-300 dark:text-gray-300">Book a Meeting</span>
        </li>
        <li className="flex items-center space-x-3">
          <MessageCircle className="text-indigo-500 w-6 h-6" />
          <span className="text-gray-300 dark:text-gray-300">Send a Message</span>
        </li>
      </ul>

      <div className="mt-6 text-center">
        <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-500 bg-indigo-100/20 rounded-full animate-pulse">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
