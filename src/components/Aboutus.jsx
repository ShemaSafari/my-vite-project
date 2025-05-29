import React from 'react';

const AboutUs = () => {
  return (
    <section id="About_us" className="bg-white px-6 py-12 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto pb-10">
        <h2 className="text-6xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-amber-600">Kindred Kitchen</span> – your go-to destination for celebrating the rich, diverse, and flavorful world of <span className="italic">indigenous African cuisines</span>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We created this blog with a simple mission in mind: <span className="font-medium text-gray-900">to bring African food to the forefront</span>, making it accessible, enjoyable, and easy to recreate, no matter where you are in the world.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you’re someone curious about African dishes or a fellow African living abroad and craving the taste of home, we’ve got you covered. Our recipes come with <span className="underline decoration-amber-500">clear, beginner-friendly instructions</span>, using ingredients you can find (or alternatives when you can't), so that anyone – from first-timers to seasoned home cooks – can experience the comfort and culture of African cooking.
        </p>
        <p className="text-lg text-gray-700">
          We believe that food is more than just nourishment; it’s a story, a memory, a connection to home. Through this blog, we hope to preserve and share the culinary heritage of Africa, one dish at a time.
        </p>
        <p className="text-lg text-gray-700 mt-6 font-medium">
          Thanks for joining us on this flavorful journey!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
