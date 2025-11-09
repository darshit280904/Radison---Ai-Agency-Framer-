"use client";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="mb-32 py-20 px-4 sm:px-6 lg:px-12 text-white"
    >
      {/* 🔹 Section Header */}
      <div className="flex justify-center">
        <p className="font-bold border border-white/20 text-white/50 p-1.5 rounded-xl px-4 mb-8 select-none">
          Contacts
        </p>
      </div>

      {/* 🔹 Grid Layout for Contact Info + Form */}
      <div
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-12 
          max-w-6xl 
          mx-auto 
          items-start
        "
      >
        {/* 🔸 Left Side — Contact Info */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Ask whatever you have in <br className="hidden sm:block" /> your
            mind
          </h2>

          <p className="font-medium text-gray-300 text-sm sm:text-base">
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>

          <div className="mt-6 space-y-3">
            <p className="text-white/50 hover:text-white cursor-pointer transition">
              ✉ <span className="ml-1">admin@raddision.com</span>
            </p>
            <p className="text-white/50 hover:text-white cursor-pointer transition">
              ☏ <span className="ml-1">(969) 819-8061</span>
            </p>
            <p className="text-white/50 hover:text-white cursor-pointer transition">
              ⚲ <span className="ml-1">43 Roselle St. New York</span>
            </p>
          </div>
        </div>

        {/* 🔸 Right Side — Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            bg-linear-to-bl 
            from-black 
            to-indigo-950 
            border border-white/20 
            rounded-2xl 
            p-6 sm:p-8 
            w-full 
            max-w-lg 
            mx-auto
            shadow-lg
          "
        >
          <div className="mb-4">
            <label htmlFor="name" className="text-sm block mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-white/20 bg-linear-to-bl from-black to-indigo-950 rounded-xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Jane Smith"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-sm block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-white/20 bg-linear-to-l from-black to-indigo-950 rounded-xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="jane@framer.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-sm block mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-white/20 bg-linear-to-tl from-black to-indigo-950 rounded-xl p-2 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Hi, I am reaching out for..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 mt-2 text-sm font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
