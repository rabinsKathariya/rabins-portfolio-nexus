
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Facebook, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeInDown">Contact Me</h1>
            <p className="text-gray-600 text-lg animate-fadeInUp stagger-2">
              Have a project in mind or want to connect? Reach out to me using the contact information below.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                I'm interested in freelance opportunities, especially ambitious or large projects. 
                However, if you have other requests or questions, don't hesitate to contact me.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", content: "insrab464@gmail.com", href: "mailto:insrab464@gmail.com" },
                  { icon: Phone, title: "Phone", content: "+977 9868375317", href: "tel:+9779868375317" },
                  { icon: Facebook, title: "Facebook", content: "facebook.com/rabins.kathariya.1", href: "https://www.facebook.com/rabins.kathariya.1" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start animate-fadeInUp stagger-${index + 3}`}>
                    <div className="flex-shrink-0">
                      <div className="bg-brand-50 p-3 rounded-lg text-brand-500 hover-lift">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <a href={item.href} className="text-gray-600 hover:text-brand-500 transition-colors">
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg animate-fadeInUp stagger-6 hover-lift">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Current Availability</h3>
                <p className="text-gray-600">
                  I'm currently available for part-time freelance work and collaborations while I complete my studies. 
                  The best way to reach me is via email or Facebook.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md animate-fadeInRight hover-lift">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm based in Kailali, Nepal, but I'm available for remote work worldwide.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden shadow-md animate-scaleIn stagger-2 hover-lift">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112722.23527411122!2d80.57872665952505!3d28.699640014467386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a19bd13e9123b1%3A0xe6774a2ff9f330f!2sKailali!5e0!3m2!1sen!2snp!4v1716318881362!5m2!1sen!2snp" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kailali, Nepal Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
