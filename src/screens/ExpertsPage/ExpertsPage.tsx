import { Mail, Phone, ArrowLeft, Check, MessageCircle, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

interface Director {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  responsibilities: string[];
  linkedin?: string;
}

const ExpertsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const directors: Director[] = [
    {
      id: 1,
      name: 'Jim Idalia',
      role: 'Director of Execution & Marketing',
      email: 'jimidalia24@example.com',
      phone: '+254728544518',
      image: '/avatar/jim.jpg',
      bio: 'Seasoned business leader with extensive experience in strategic planning and marketing within the energy sector.',
      responsibilities: [
        'Business Development',
        'Marketing Strategy',
        'Client Relations',
        'Brand Management',
        'Public Relations',
        'Execution',
      ],
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Kevin Mbarane',
      role: 'Director of Design & Engineering',
      email: 'info@mechsolve.co.ke',
      phone: '+254798765432',
      image: '/avatar/kevin.jpg',
      bio: 'Expert engineer with a passion for innovative gas solutions and sustainable energy systems.',
      responsibilities: [
        'Project Management',
        'Technical Oversight',
        'Quality Assurance',
        'Team Leadership'
      ],
      linkedin: '#'
    }
  ];

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8 group transition-all duration-300 hover:bg-gray-100"
          onClick={handleBackToHome}
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1 text-[#FF10F0]" />
          <span className="text-gray-700">Back to Home</span>
        </Button>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h1>
          <div className="w-20 h-1 bg-[#FF10F0] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries driving our company's success and innovation in the gas industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {directors.map((director) => (
            <div key={director.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&background=FF10F0&color=fff&size=512`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white">{director.name}</h3>
                  <p className="text-[#FF10F0] text-sm font-medium">{director.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{director.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wider text-gray-500">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {director.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#FF10F0]/10 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-[#FF10F0]" />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <a 
                        href={`tel:${director.phone}`}
                        className="flex items-center text-sm text-gray-600 hover:text-[#FF10F0] transition-colors group"
                      >
                        <Phone className="h-4 w-4 text-[#FF10F0] mr-2" />
                        <span>{director.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${director.email}`}
                        className="flex items-center text-sm text-gray-600 hover:text-[#FF10F0] transition-colors group mb-2"
                      >
                        <Mail className="h-4 w-4 text-[#FF10F0] mr-2" />
                        <span className="truncate max-w-[180px]">{director.email}</span>
                      </a>
                      <a 
                        href={`https://wa.me/${director.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-white bg-[#25D366] hover:bg-[#128C7E] px-3 py-1.5 rounded-md transition-colors w-full justify-center"
                      >
                        <MessageCircle className="h-3.5 w-3.5 mr-2" />
                        Message on WhatsApp
                      </a>
                    </div>
                    
                    {director.linkedin && (
                      <a 
                        href={director.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#FF10F0]/10 text-[#FF10F0] hover:bg-[#FF10F0]/20 transition-colors"
                        aria-label={`${director.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our directors are always available to discuss how we can help with your gas solutions.
          </p>
          <Button 
            className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertsPage;