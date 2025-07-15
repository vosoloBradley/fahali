import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const certificates = [
  {
    title: 'Certificate of Incorporation',
    description: 'Official document verifying the company registration',
    image: '/cert/Cert of incorp.jpg'
  },
  {
    title: 'Companies Act 2015',
    description: 'Compliance with Kenya Companies Act',
    image: '/cert/Company act.jpg'
  },
  {
    title: 'Certificate of Registration',
    description: 'Business registration certificate',
    image: '/cert/Cert of reg.jpg'
  },
  {
    title: 'KRA PIN Certificate',
    description: 'Tax registration certificate',
    image: '/cert/Kra pin.jpg'
  },
  {
    title: 'Tax Compliance Certificate',
    description: 'Up-to-date tax compliance',
    image: '/cert/Tax compliance.jpg'
  },
  {
    title: 'Unified Business Permit',
    description: 'Valid business permit',
    image: '/cert/Unified biz.jpg'
  },
  {
    title: 'NCA Certificate of Registration',
    description: 'National Construction Authority registration',
    image: '/cert/Nca reg.jpg'
  },
  {
    title: 'NCA Contractor Annual Practicing Licence',
    description: 'Valid contractor license',
    image: '/cert/Nca annual practicing.jpg'
  }
];

const majorProjects = [
  {
    title: 'Project A',
    description: 'Large-scale construction project',
    image: '/projects/project-a.jpg'
  },
  {
    title: 'Project B',
    description: 'Commercial building development',
    image: '/projects/project-b.jpg'
  },
  {
    title: 'Project C',
    description: 'Industrial facility construction',
    image: '/projects/project-c.jpg'
  }
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF10F0] to-[#E000D0] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Certifications & Credentials</h1>
          <p className="text-xl md:text-2xl">Professional credentials and major projects</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Trust & Professionalism</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Fahali Building & Civil Engineering, we are committed to excellence and professionalism in every aspect of our operations. 
              Our comprehensive credentials and certifications demonstrate our dedication to quality, compliance, and industry best practices. 
              Each certificate represents our commitment to delivering exceptional service and maintaining the highest standards in construction and engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Our Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Major Projects Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Major Projects Engaged</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link to="/">
          <Button className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-4 rounded-full">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
