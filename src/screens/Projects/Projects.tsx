import { useEffect } from 'react';

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Modern residential complex.jpg"
              alt="Modern Residential Complex"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Private Modern Residential Complex</h2>
          <p className="text-gray-600 mb-4">Luxury residential development with modern amenities</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2024</span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Modern office suit.jpg"
              alt="Modern Office Suit"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Modern Office Suit</h2>
          <p className="text-gray-600 mb-4">Professional office space with modern design features</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2022</span>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/modern fitness complex.jpg"
              alt="Private Modern Fitness Complex"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Private Modern Fitness Complex</h2>
          <p className="text-gray-600 mb-4">State-of-the-art fitness facility with advanced equipment</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2022</span>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/General ward hospital.jpg"
              alt="General Ward Hospital"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">General Ward Hospital</h2>
          <p className="text-gray-600 mb-4">Modern medical facility with comprehensive healthcare services</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2021</span>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Greenwood villa.jpg"
              alt="Greenwood Villa"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Greenwood Villa</h2>
          <p className="text-gray-600 mb-4">Luxury villa with sustainable design and green features</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2023</span>
          </div>
        </div>

        {/* Project Card 7 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Swimming pool.jpg"
              alt="Swimming Pool"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Swimming Pool</h2>
          <p className="text-gray-600 mb-4">Luxury swimming pool complex with modern amenities</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2023</span>
          </div>
        </div>

        {/* Project Card 8 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Water park.jpg"
              alt="Water Park"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Water Park</h2>
          <p className="text-gray-600 mb-4">Family-friendly water park with multiple attractions</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2017</span>
          </div>
        </div>

        {/* Project Card 9 - KIB */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/KIB.jpg"
              alt="KIB"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">KIB</h2>
          <p className="text-gray-600 mb-4">Office fitouts</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2025</span>
          </div>
        </div>

        {/* Project Card 10 - Kingstone Beach Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Kingstone beach bar.jpg"
              alt="Kingstone Beach Bar"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kingston Beach Bar</h2>
          <p className="text-gray-600 mb-4">Seaside bar and restaurant with ocean views</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2025</span>
          </div>
        </div>

        {/* Project Card 11 - Kingstone Gas */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Kingstone gas.jpg"
              alt="Kingstone Gas"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kingston Gas</h2>
          <p className="text-gray-600 mb-4">Centralized LPG system</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2023</span>
          </div>
        </div>

        {/* Project Card 12 - Kingstone Splash Park */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Kingstone splash park.jpg"
              alt="Kingstone Splash Park"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kingston Splash Park</h2>
          <p className="text-gray-600 mb-4">Family-friendly water attraction with slides and pools</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2024</span>
          </div>
        </div>

        {/* Project Card 13 - PEK Residential Gym */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src="/proj/Pek residential gym.jpg"
              alt="PEK Residential Gym"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">PEK Residential Gym</h2>
          <p className="text-gray-600 mb-4">Modern residential gym with premium fitness equipment</p>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Completion: 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
