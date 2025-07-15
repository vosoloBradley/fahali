import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  budget: string;
  message: string;
};

const QuotePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        projectDetails: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Thank You!</h2>
            <p className="mt-2 text-gray-600">Your quote request has been submitted successfully.</p>
            <p className="text-gray-600">Our team will get back to you within 24 hours.</p>
            <Button 
              className="mt-6 bg-[#FF10F0] hover:bg-[#e000d0] text-white"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#FF10F0] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl">GCL</span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get a Quote
            </h1>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Installation</option>
                  <option value="commercial">Commercial Installation</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="inspection">Safety Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                  placeholder="Please provide details about your project..."
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  Estimated Budget (KES)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">KES</span>
                  </div>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="focus:ring-[#FF10F0] focus:border-[#FF10F0] block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF10F0] focus:ring-[#FF10F0] sm:text-sm p-2 border"
                  placeholder="Any additional information or questions..."
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FF10F0] hover:bg-[#e000d0] text-white"
              >
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
