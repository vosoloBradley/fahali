import { useNavigate } from 'react-router-dom';
import { 
  BuildingIcon,
  HardHatIcon,
  SettingsIcon,
  TruckIcon,
  MessageSquare,
  Mail,
  X,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  UsersIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from "lucide-react";

const XIcon = X;
import { useState } from "react";
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "../../components/ui/card";

export const HomePage = (): JSX.Element => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);
  const navigate = useNavigate();

  // Services data
  const services = [
    {
      title: "Construction Contracting",
      description: "Complete construction solutions from foundation to finishing with certified professionals",
      icon: <BuildingIcon className="h-8 w-8" />,
      features: ["Residential Construction", "Commercial Buildings", "Industrial Projects"]
    },
    {
      title: "Engineering Consultancy",
      description: "Expert engineering advice and technical solutions for complex projects",
      icon: <SettingsIcon className="h-8 w-8" />,
      features: ["Structural Engineering", "MEP Design", "Technical Analysis"]
    },
    {
      title: "Architectural Design",
      description: "Innovative architectural planning and design services for modern spaces",
      icon: <HardHatIcon className="h-8 w-8" />,
      features: ["3D Modeling", "Space Planning", "Interior Design"]
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination and management with proven methodologies",
      icon: <TruckIcon className="h-8 w-8" />,
      features: ["Timeline Management", "Budget Control", "Quality Assurance"]
    }
  ];

  // Project portfolio data
  const projects = [
    {
      title: "Bazaar Shopping Complex",
      category: "Commercial",
      image: "/proj/Bazaar 1.jpg",
      description: "Modern retail development with integrated commercial spaces",
      completion: "2023"
    },
    {
      title: "Greenwood Villa",
      category: "Residential",
      image: "/proj/Greenwood villa.jpg",
      description: "Luxury residential villa with sustainable design",
      completion: "2022"
    },
    {
      title: "Modern Office Suite",
      category: "Commercial",
      image: "/proj/Modern office suit.jpg",
      description: "State-of-the-art office complex with eco-friendly features",
      completion: "2024"
    },
    {
      title: "Residential Complex",
      category: "Residential",
      image: "/proj/Modern residential complex.jpg",
      description: "Premium residential development with modern amenities",
      completion: "2023"
    },
    {
      title: "Sports & Fitness Complex",
      category: "Recreational",
      image: "/proj/modern fitness complex.jpg",
      description: "Modern fitness facility with advanced training equipment",
      completion: "2024"
    },
    {
      title: "Water Park & Resort",
      category: "Recreational",
      image: "/proj/Water park.jpg",
      description: "Family entertainment destination with water features",
      completion: "2023"
    },
    {
      title: "Hospital General Ward",
      category: "Healthcare",
      image: "/proj/General ward hospital.jpg",
      description: "Modern healthcare facility with patient-centric design",
      completion: "2022"
    },
    {
      title: "Luxury Swimming Pool",
      category: "Residential",
      image: "/proj/Swimming pool.jpg",
      description: "Custom-designed swimming pool with premium features",
      completion: "2023"
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      title: "Certified Experts",
      description: "Licensed professionals with years of experience and industry certifications",
      icon: <ShieldCheckIcon className="h-8 w-8" />
    },
    {
      title: "On-Time Delivery",
      description: "Committed to meeting project deadlines with efficient project management",
      icon: <ClockIcon className="h-8 w-8" />
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage ensuring superior results",
      icon: <CheckCircleIcon className="h-8 w-8" />
    },
    {
      title: "Professional Team",
      description: "Skilled engineers, architects, and specialists working collaboratively",
      icon: <UsersIcon className="h-8 w-8" />
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "GCL delivered our commercial project on time and within budget. Their attention to detail and professional approach exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Property Developer",
      company: "Johnson Developments",
      rating: 5
    },
    {
      quote: "The engineering consultancy provided by GCL helped us optimize our industrial facility design significantly, resulting in 30% cost savings.",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechCorp Industries",
      rating: 5
    },
    {
      quote: "Professional, reliable, and innovative. Fahali Building & Civil Engineering transformed our residential complex vision into reality with exceptional craftsmanship.",
      name: "Emma Williams",
      role: "Project Director",
      company: "Urban Living Ltd",
      rating: 5
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleTalkToExperts = () => {
    scrollToTop();
    navigate('/experts');
  };

  const handleGetAQuote = () => {
    scrollToTop();
    navigate('/get-a-quote');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Gas.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fahali Building & Civil Engineering</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Professional Construction & Engineering Solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/certifications">
              <Button 
                className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Button>
            </Link>
            <Button 
              onClick={handleTalkToExperts}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#FF10F0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#FF10F0]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-[#FF10F0] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <img 
                src="/site.jpg" 
                alt="About Us" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Fahali Building & Civil Engineering</h2>
              <p className="text-gray-600 mb-6">
                Fahali Building & Civil Engineering is a leading construction and engineering firm dedicated to delivering exceptional 
                quality and innovative solutions for residential, commercial, and industrial projects. With years of 
                experience in the industry, we have built a reputation for excellence, reliability, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of certified professionals is committed to providing end-to-end construction services, from 
                initial planning and design to project completion and handover. We take pride in our attention to detail, 
                use of high-quality materials, and adherence to strict safety standards.
              </p>
              <Button 
                className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={handleGetAQuote}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <div className="w-20 h-1 bg-[#FF10F0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[#FF10F0]">{project.category}</span>
                    <span className="text-sm text-gray-500">Completed: {project.completion}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-[#FF10F0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="w-16 h-16 bg-[#FF10F0]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-[#FF10F0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF10F0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetAQuote}
              className="bg-white text-[#FF10F0] hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get a Free Quote
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={handleTalkToExperts}
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-[#FF10F0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FF10F0]/10 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-[#FF10F0]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-gray-600">123 Construction Way, Industrial Area, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF10F0]/10 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-[#FF10F0]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-600">+254 700 000000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF10F0]/10 p-3 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-[#FF10F0]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Address</h4>
                    <p className="text-gray-600">info@fahaliengineering.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-[#FF10F0] hover:text-white p-3 rounded-full transition-colors duration-300">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-[#FF10F0] hover:text-white p-3 rounded-full transition-colors duration-300">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-[#FF10F0] hover:text-white p-3 rounded-full transition-colors duration-300">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white py-6 text-lg rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Icons */}
      {showFloatingIcons && (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col space-y-4">
          <Button 
            onClick={() => setShowFloatingIcons(false)}
            size="icon" 
            variant="ghost"
            className="self-end bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white"
          >
            <XIcon className="h-5 w-5" />
          </Button>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Chat on WhatsApp"
            asChild
          >
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-6 w-6 text-white" />
            </a>
          </Button>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-[#4267B2] hover:bg-[#365899] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Email Us"
            asChild
          >
            <a href="mailto:info@fahaliengineering.com">
              <Mail className="h-6 w-6 text-white" />
            </a>
          </Button>
        </div>
      )}

      {!showFloatingIcons && (
        <Button 
          onClick={() => setShowFloatingIcons(true)}
          size="icon" 
          className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-[#FF10F0] hover:bg-[#e000d0] text-white shadow-lg hover:scale-110 transition-all duration-300"
          title="Contact Us"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default HomePage;
