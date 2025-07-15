import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#FF10F0] mb-4">⚡</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Electrical Services</h2>
          <p className="text-gray-600 mb-6">
            Professional electrical installations, repairs, and maintenance services
          </p>
          <Button
            onClick={() => navigate('/get-a-quote')}
            className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-colors"
          >
            Get a Quote
          </Button>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#FF10F0] mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction Services</h2>
          <p className="text-gray-600 mb-6">
            Complete construction solutions for residential and commercial projects
          </p>
          <Button
            onClick={() => navigate('/get-a-quote')}
            className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-colors"
          >
            Get a Quote
          </Button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#FF10F0] mb-4">🔧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
          <p className="text-gray-600 mb-6">
            Regular maintenance and inspection services to keep your systems running smoothly
          </p>
          <Button
            onClick={() => navigate('/get-a-quote')}
            className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-colors"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
