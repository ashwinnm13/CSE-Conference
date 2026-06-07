import React, { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/Images/cs10.jpg";
import backgroundImage2 from "../../assets/Images/cs7.jpg";
import backgroundImage3 from "../../assets/Images/cs8.jpg";

const Organizing_Secretaries = [
  "Dr. P. Salini, Associate Professor, CSE, PTU",
  "Dr. M. Thenmozhi, Associate Professor, CSE, PTU",
  "Dr. J. I. Sheeba, Associate Professor, CSE, PTU",
];

const Joint_Secretaries = [
  "Dr. S. Lakshmana Pandian, Professor, CSE, PTU",
  "Dr. K. Sathiyamurthy, Professor, CSE, PTU",
  "Dr. R. Sarala, Professor, CSE, PTU",
];

const Organizing_Committee = [
  "Dr. E. Ilavarasan, Professor & Head, CSE, PTU",
  "Dr. F. Sagayaraj Francis, Professor, CSE, PTU",
  "Dr. G. Zayaraz, Professor, CSE, PTU",
  "Dr. R. Kalpana, Professor, CSE, PTU",
  "Dr. J. Jayabharathy, Professor, CSE, PTU",
  "Dr. N. Sivakumar, Professor, CSE, PTU",
  "Dr. J. Kumaran @ Kumar, Professor, CSE, PTU",
  "Dr. M. Thirumaran, Professor, CSE, PTU",
  "Dr. V. Akila, Associate Professor, CSE, PTU",
  "Dr. R. Kavitha Kumar, Programmer, CSE, PTU",
];

const State_Level_Advisory = [
  "Dr. K. Vivekanandan, Director (Academic and Educational Innovations), PTU",
  "Dr. Ka. Selvaradjou, Director (Planning and Development), PTU",
  "Dr. N. Sreenath, Dean, School of CSE & IT, PTU",
  "Dr. P. Ramesh Babu, Professor In-charge (Research), PTU",
  "Dr. T. Chithralekha, Professor, Pondicherry University",
  "Dr. A. Amuthan, Professor, CSE, PTU, Private Secretary to CM, Govt. of Puducherry",
  "Dr. B. Surendiran, Professor, National Institute of Technology Puducherry",
];

const National_Advisory = [
  "Dr. C. Krishna Mohan, Professor, IIT Hyderabad, Telangana",
  "Dr. V. Masilamani, Professor and Dean, IIITDM Kancheepuram, Tamil Nadu",
  "Dr. S. Nickolas, Professor, National Institute of Technology, Trichy, Tamil Nadu",
  "Dr. N. Selvaganesan, Professor, Indian Institute of Space Science and Technology, Kerala",
  "Dr. Rajendra Prasad Mahapatra, Professor and Dean NCR Campus, SRMIST Delhi",
  "Dr. Y. N Singh, Professor, Institute of Engineering and Technology, Lucknow, Uttar Pradesh",
  "Dr. Udai Pratap Rao, Associate Professor, National Institute of Technology, Patna",
  "Dr. R. Baskaran, Professor, Anna University, Chennai, Tamil Nadu",
  "Dr. Om Pal, Associate Professor, University of Delhi, Delhi",
  "Dr. N. Poonguzhali, Associate Professor, Jawaharlal Nehru University, New Delhi",
  "Dr. D. Vaithiyanathan, Assistant Professor, National Institute of Technology, Delhi",
  "Dr. Kalyan Sasidhar, Associate professor, DA-IICT, Gandhinagar, Gujarat",
  "Dr. Kollati Vijaya Kumar, Associate Professor, GITAM University, Visakhapatnam",
  "Dr. J. Harikiran, Professor, VIT-AP University, Amaravati, Andhra Pradesh",
  "Dr. E. Sivasankar, Associate Professor, National Institute of Technology, Trichy, Tamil Nadu",
  "Dr. S. Anandamurugan, Professor, Kongu Engineering College, Perundurai, Tamil Nadu",
  "Dr. D. Deepa, Professor, Bannari Amman Institute of Technology, Sathiyamangalam, Tamil Nadu",
  "Dr. G. Singaravel, Professor, K.S.R. College of Engineering, Tiruchengode, Tamil Nadu",
  "Dr. M.S. Thanabal, Professor, PSNA College of Engineering and Technology, Dindigul, Tamil Nadu",
  "Dr. S. Thilagamani, Professor, M. Kumarasamy College of Engineering, Karur, Tamil Nadu",
  "Dr. A. Mummoorthy, Professor, Vel Tech Institute of Science and Technology, Chennai, India",
  "Dr. M. Punithavalli, Professor, Bharathiar University, Coimbatore, Tamil Nadu",
  "Dr. K. Ramesh Babu, Professor, Vellore Institute of Technology University, Vellore, Tamil Nadu",
  "Dr. A. M. Abirami, Professor, Thiagarajar College of Engineering, Madurai, Tamil Nadu",
  "Dr. C. N. S. Vinoth Kumar, Professor, SRM Institute of Science and Technology, Tamil Nadu",
  "Dr. D. Karthika Renuka, Professor, PSG College of Technology, Coimbatore, Tamil Nadu",
  "Dr. V. Pattabiraman, Professor, VIT University, Chennai, Tamil Nadu",
  "Dr. K. Selvakumar, Professor, Annamalai University, Chidambaram, Tamil Nadu",
  "Dr. G. Niranjana, Professor, SRM Institute of Science and Technology, Tamil Nadu",
  "Dr. R. V. Siva Balan, Associate Professor, Christ University, Bengaluru, Karnataka",
  "Dr. B. Ramesh, Professor, Malnad College of Engineering, Hassan, Karnataka",
  "Dr. R. Bhavani, Professor, Annamalai University, Chidambaram, Tamil Nadu",
  "Dr. R. Srinivasan, Professor, Vel Tech. University, Tamil Nadu",
  "Dr. P. Ajitha, Professor, Sathyabama Institute of Science and Technology, Chennai",
  "Dr. M. Baskar, Professor, SRM Institute of Science and Technology, Tamil Nadu",
  "Dr. M. Marikkannan, Senior Assistant Professor, Government College of Engineering, Erode",
  "Dr. P. Sundaravadivel, Professor, Saveetha Engineering College, Chennai, Tamil Nadu",
  "Dr. T. Senthil Kumar, Professor, Amrita University, Coimbatore, Tamil Nadu",
  "Dr. Senduru Srinivasulu, Professor, Sathyabama Institute of Science & Technology, Tamil Nadu",
  "Dr. V.S. Felix Enigo, Associate Professor, SSN College of Engineering, Chennai, Tamil Nadu",
  "Dr. S. Saudia, Associate Professor, Manonmaniam Sundaranar University, Tamil Nadu",
  "Dr. D. Venkata Subbaiah, Professor, Lakireddy Bali Reddy College of Engineering, Andhra Pradesh",
  "Dr. U. Noorul Hussain, CEO, Intrust Innovation Labs, IITM Research Park, Chennai, Tamil Nadu",
  "Dr. Karthikeyan Vaiapury, Scientist, TCS Innovations Labs, Tata Consultancy Services, Tamil Nadu",
];

const International_Advisory = [
  "Dr. Peter Z. Revesz, Professor, University of Nebraska-Lincoln, Lincoln, USA",
  "Dr. Xiaolei Wang, LAB University of Applied Sciences, Lahti, Finland",
  "Dr. Gheorghiță Ghinea, Professor, Brunel University of London, United Kingdom",
  "Dr. Paul Rodrigues, Professor, King Khalid University, Abha, Saudi Arabia",
  "Dr. Balaji Palanisamy, Associate Professor, University of Pittsburgh, USA",
  "Dr. Rajarajan Sivaraj, Vice President of Solution Architecture, Aira Technologies, USA",
  "Dr. Gang Li, Professor, School of Information Technology, Deakin University, Australia",
  "Dr. Joan Lu, Professor, Leeds Beckett University, United Kingdom",
  "Dr. Ahmed Zobaa, Reader, Brunel University of London, United Kingdom",
  "Dr. Massimo FICCO, Professor, University of Salerno, Italy",
  "Dr Azida Zainol, SFHEA, Sheffield Hallam University, United Kingdom",
  "Dr. Pascal Lorenz, Professor, University of Haute Alsace, France",
  "Dr. Selwyn Piramuthu, Professor, University of Florida, USA",
  "Dr. Athirai A. Irissappane, Senior Principal Applied Scientist, Oracle, USA",
  "Mr. Jayakumar Challadurai, Founder & CEO, OneBill, USA",
  "Mr. Rithish Venkat Jogi, Leader, Microsoft Innovators Hub",
];

const CommitteeCard = ({ title, name, position, department }) => (
  <div className="bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 w-full max-w-md border border-blue-300/50 hover:shadow-blue-400/50">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
      {position && <p className="text-lg text-white mb-1">{position}</p>}
      {department && <p className="text-white mb-1">{department}</p>}
    </div>
  </div>
);

const SecretarySection = ({ title, members }) => (
  <div className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] rounded-xl p-6 shadow-lg border border-blue-300/30 hover:shadow-blue-500/50 transition-all duration-300">
    <h3 className="text-xl font-semibold text-white mb-4 text-center border-b border-blue-400 pb-2">
      {title}
    </h3>
    <ul className="space-y-2">
      {members.map((member, index) => (
        <li
          key={index}
          className="text-white text-center font-medium py-1 px-4 rounded-lg hover:bg-blue-500/20 transition-colors duration-200"
        >
          {member}
        </li>
      ))}
    </ul>
  </div>
);

function OrganizCommittee() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mt-3 text-white mb-4">
              Organizing Committee
            </h1>
            <div className="w-32 h-1 bg-blue-300 mx-auto rounded-full"></div>
          </div>

          {/* Chief Patron - Centered */}
          <div className="flex justify-center mb-10">
            <CommitteeCard
              title="Chief Patron"
              name="Prof. S. Mohan"
              position="Vice Chancellor"
              department="Puducherry Technological University"
            />
          </div>

          {/* Patron & Co-Patron */}
          <div className="flex justify-center gap-12 mb-16 flex-wrap">
            <CommitteeCard
              title="Patron"
              name="Dr. R. Manoharan"
              position="Professor"
              department="Computer Science and Engineering, PTU"
            />

            <CommitteeCard
              title="Co-Patron"
              name="Dr. K. Saruladha"
              position="Professor"
              department="Computer Science and Engineering, PTU"
            />
          </div>

          {/* Secretaries Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
            <SecretarySection
              title="Organizing Secretaries"
              members={Organizing_Secretaries}
            />

            <SecretarySection
              title="Joint Secretaries"
              members={Joint_Secretaries}
            />
          </div>

          {/* Organizing Committee Section */}
          <div className="mt-12 mb-12">
            <SecretarySection
              title="Organizing Committee"
              members={Organizing_Committee}
            />
          </div>

          {/* State-level Advisory Committee Section */}
          <div className="mt-12 mb-12">
            <SecretarySection
              title="State-level Advisory Committee"
              members={State_Level_Advisory}
            />
          </div>

          {/* National Advisory Committee Section */}
          <div className="mt-12 mb-12">
            <SecretarySection
              title="National Advisory Committee"
              members={National_Advisory}
            />
          </div>

          {/* International Advisory Committee Section */}
          <div className="mt-12 mb-12">
            <SecretarySection
              title="International Advisory Committee"
              members={International_Advisory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizCommittee;
