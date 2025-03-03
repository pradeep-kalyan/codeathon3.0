const ContactSection = ({ name, position, number, mail }) => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center bg-gray-900 hover:scale-105 transition-transform duration-1000 hover:border-l-4 hover:border-pink-600 m-5 p-6 rounded-lg shadow-lg"
    >
      <p className="font-bold text-2xl font-electro text-white">{name}</p>
      <h2 className="text-lg font-audio text-gray-300">{position}</h2>
      <a
        href={`tel:${number}`}
        className="text-lg font-semibold custom-cursor font-courier text-gray-200 hover:text-pink-500 hover:underline mt-2"
      >
        📞 {number}
      </a>
      <a
        href={`mailto:${mail}`}
        className="text-lg font-semibold custom-cursor font-courier text-gray-200 hover:text-pink-500 hover:underline mt-1"
      >
        ✉️ {mail}
      </a>
    </div>
  );
};

export default ContactSection;
