import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-orange-50/40 px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-orange-700">Contact Food Team</h1>
        <p className="mt-2 text-sm text-gray-600">Ask us about menu, delivery, or your order.</p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Message</span>
            <textarea
              rows={4}
              placeholder="Write your food-related query"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-orange-500"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
