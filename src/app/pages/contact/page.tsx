// import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white">
        <h1 className="text-4xl text-center font-bold mt-16">Contact Page</h1>      

      <section className="text-center py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Phone Number</h3>
            <p className="text-gray-700 mt-2">+63 998 857 4459</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Stratpoint Email</h3>
            <p className="text-gray-700 mt-2">i_rodfeliser.torre@stratpoint.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Workplace Address</h3>
            <p className="text-gray-700 mt-2">Globe Telecom Plaza Tower 1 Pioneer, cor Madison, Mandaluyong City, 1550 Metro Manila</p>
          </div>
        </div>
      </section>
    </div>
  );
}
