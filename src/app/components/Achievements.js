import Image from 'next/image';

const achievements = [
  { id: 1, imgSrc: '/images/achievements/achievements1.jpg', description: 'Reycaarto was the award winner of ITSAP from STPI Hyderabad' },
  { id: 2, imgSrc: '/images/achievements/achievements2.jpg', description: 'Appreciation Certificate from STPI Vijayawada' },
  { id: 3, imgSrc: '/images/achievements/achievements1.jpg', description: 'Achievement 3' },
  { id: 4, imgSrc: '/images/achievements/achievements2.jpg', description: 'Achievement 4' },
  { id: 5, imgSrc: '/images/achievements/achievements1.jpg', description: 'Achievement 5' },
];

const Achievements = () => {
  return (
    <div className="overflow-hidden relative w-full py-10">
      <div className="achievements-container flex gap-8 animate-marquee">
        {/* First set of cards */}
        <div className="flex gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="card bg-white p-4 rounded-lg shadow-lg w-64 flex-shrink-0"
            >
              <div className="image-container w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={achievement.imgSrc}
                  alt={achievement.description}
                  width={256}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second set of cards (for continuous loop) */}
        <div className="flex gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="card bg-white p-4 rounded-lg shadow-lg w-64 flex-shrink-0"
            >
              <div className="image-container w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={achievement.imgSrc}
                  alt={achievement.description}
                  width={256}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
