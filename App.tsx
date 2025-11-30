import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  GraduationCap,
  Monitor, 
  Wrench, 
  Calculator, 
  Scissors, 
  Palette, 
  Shirt, 
  Languages, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Info,
  ExternalLink,
  Calendar,
  Clock,
  Linkedin,
  Youtube,
  Instagram
} from 'lucide-react';
import { COURSES, SEDES } from './constants';
import { AreaType, Course } from './types';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'courses', label: 'Cursos' },
    { id: 'apply', label: 'Inscripción' },
    { id: 'sedes', label: 'Sedes' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
              <div className="text-orange-500">
                <GraduationCap size={32} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-blue-900 leading-none">CFP N° 10</span>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Formación Profesional</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeTab === link.id 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === link.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <div className="relative bg-blue-900 overflow-hidden animate-fade-in">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center transform scale-105 hover:scale-100 transition-transform duration-[20s]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="md:w-2/3 animate-slide-up">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wider mb-4 uppercase">
            Ciclo Lectivo 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Cursos de <br/><span className="text-orange-400">Capacitación</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Prepárate para el futuro con nuestra amplia oferta educativa. 
            Cursos gratuitos para afiliados en Informática, Oficios, Contable, Estética, Idiomas y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onExplore}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 active:translate-y-0"
            >
              Explorar Cursos
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              Más Información
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 bg-orange-500 w-full absolute bottom-0"></div>
    </div>
  );
};

const AreaCard = ({ area, icon: Icon, onClick }: { area: AreaType, icon: React.ElementType, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:border-orange-400 transform hover:-translate-y-2 hover:scale-105"
  >
    <div className="p-4 rounded-full bg-blue-50 text-blue-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mb-4 shadow-sm group-hover:shadow-orange-200">
      <Icon size={32} />
    </div>
    <h3 className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors duration-300">{area}</h3>
  </button>
);

// --- Teacher Components ---

interface Teacher {
  name: string;
  role: string;
  image: string;
}

const TEACHERS: Teacher[] = [
  {
    name: "Glenda Giraudi",
    role: "Trayecto Peluquero-a Profesional",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Carlos Rodriguez",
    role: "Instructor de Informática",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Mariana Vezzoni",
    role: "Coordinadora de Estética",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Esteban Quito",
    role: "Instructor de Oficios",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
  }
];

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg h-96 cursor-pointer bg-gray-100">
    {/* Image */}
    <img 
      src={teacher.image} 
      alt={teacher.name} 
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        {teacher.name}
      </h3>
      <p className="text-gray-300 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
        {teacher.role}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
        <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors" title="YouTube">
          <Youtube size={20} />
        </a>
      </div>
    </div>
  </div>
);

const TeacherTeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-extrabold text-gray-800 uppercase tracking-tight text-center">
            Equipo Docente
          </h2>
          <div className="h-1.5 w-24 bg-green-400 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEACHERS.map((teacher, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <TeacherCard teacher={teacher} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const FilterSection = ({ 
  selectedArea, 
  setSelectedArea, 
  searchTerm, 
  setSearchTerm 
}: { 
  selectedArea: AreaType | 'Todas', 
  setSelectedArea: (a: AreaType | 'Todas') => void,
  searchTerm: string,
  setSearchTerm: (s: string) => void
}) => {
  const areas = [
    { type: AreaType.INFORMATICA, icon: Monitor },
    { type: AreaType.OFICIOS, icon: Wrench },
    { type: AreaType.CONTABLE, icon: Calculator },
    { type: AreaType.ESTETICA, icon: Scissors },
    { type: AreaType.ARTISTICA, icon: Palette },
    { type: AreaType.TEXTIL, icon: Shirt },
    { type: AreaType.IDIOMAS, icon: Languages },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 animate-slide-up">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Catálogo de Cursos</h2>
        <div className="relative w-full md:w-1/3 group">
          <input
            type="text"
            placeholder="Buscar por título, requisitos, duración..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 group-hover:text-orange-500 transition-colors" size={18} />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        <button
          onClick={() => setSelectedArea('Todas')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
            selectedArea === 'Todas' 
              ? 'bg-blue-900 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Todas
        </button>
        {areas.map((area) => (
          <button
            key={area.type}
            onClick={() => setSelectedArea(area.type)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
              selectedArea === area.type 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <area.icon size={14} />
            {area.type}
          </button>
        ))}
      </div>
    </div>
  );
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:border-orange-200 group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors">
            {course.area}
          </span>
          <span className="text-sm text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded">
            {course.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.content}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-orange-600 text-sm font-bold hover:text-orange-700 transition-colors group-hover:translate-x-1 duration-300"
        >
          {expanded ? 'Ver menos' : 'Ver detalles y sedes'}
          {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
      </div>

      {expanded && (
        <div className="px-6 pb-6 pt-0 bg-gray-50 border-t border-gray-100 mt-2 animate-fade-in">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contenidos</h4>
              <p className="text-sm text-gray-700">{course.content}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Requisitos</h4>
              <p className="text-sm text-gray-700">{course.requirements}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Sedes y Horarios</h4>
              <ul className="space-y-2">
                {course.locations.map((loc, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2 bg-white p-2 rounded border border-gray-100 shadow-sm">
                    <MapPin size={14} className="mt-1 text-orange-500 flex-shrink-0" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RegistrationStep = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-orange-500 transition-colors duration-300">
      {number}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-800 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const RegistrationView = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Inscripción 2026</h2>
        <p className="text-gray-600">Sigue los pasos a continuación para garantizar tu vacante.</p>
      </div>

      {/* SIU GUARANI INFO BLOCK */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-12 shadow-sm animate-slide-up transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            <Info className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              Requisito Obligatorio: Preinscripción SIU GUARANÍ
            </h3>
            <p className="text-indigo-800 mb-4 text-sm leading-relaxed">
              Por disposición del Ministerio de Educación debes preinscribirte por SIU GUARANÍ. 
              Si ya usas o fuiste estudiante de Formación Profesional deberás blanquear tu clave; 
              si es tu primera vez deberás generar tu usuario nuevo.
            </p>
            
            <a 
              href="http://guarani-autogestionagencia.bue.edu.ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg mb-6 group"
            >
              Ir a SIU GUARANÍ <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="flex items-center text-indigo-900 font-bold text-base mb-4">
                  <Calendar size={18} className="mr-2 text-indigo-600" />
                  Períodos de Preinscripción
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col bg-indigo-50 p-3 rounded-lg border border-indigo-100 transition-colors hover:bg-indigo-100">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">1º Período</span>
                    <span className="font-semibold text-gray-800">01/12/2025 al 19/12/2025</span>
                  </div>
                  <div className="flex flex-col bg-indigo-50 p-3 rounded-lg border border-indigo-100 transition-colors hover:bg-indigo-100">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">2º Período</span>
                    <span className="font-semibold text-gray-800">02/02/2026 al 28/02/2026</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="flex items-center text-indigo-900 font-bold text-base mb-4">
                  <Clock size={18} className="mr-2 text-indigo-600" />
                  Fechas Clave
                </h4>
                <div className="space-y-3">
                   <div className="flex items-center p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="mr-3 bg-white p-2 rounded-full shadow-sm text-indigo-600 border border-indigo-50">
                      <span role="img" aria-label="pin">📌</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Inscripciones cursos</p>
                      <p className="font-semibold text-gray-800">Desde el 1 de Diciembre 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="mr-3 bg-white p-2 rounded-full shadow-sm text-indigo-600 border border-indigo-50">
                      <span role="img" aria-label="rocket">🚀</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Inicio de clases</p>
                      <p className="font-semibold text-gray-800">9 de Marzo 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-indigo-800 bg-indigo-100/50 p-4 rounded-md border border-indigo-100">
                <strong>Importante:</strong> Cuando terminas la pre-inscripción a los cursos, tenés que <u>validar tus datos</u> presentándote en la sede donde seleccionaste para realizar la capacitación, llevando la documentación requerida en el cuadernillo publicada en Classroom.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 animate-slide-up animation-delay-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">Pasos SEC para el beneficio</h3>
        <div className="space-y-8">
          <RegistrationStep 
            number={1} 
            title="Ingreso a la plataforma SEC" 
            description="Ingresa en beneficios.sec.org.ar/CursosDeCapacitacion o desde la app “SoySEC” con tu usuario SEC."
          />
          <RegistrationStep 
            number={2} 
            title="Solicitar Beneficio" 
            description="Haz clic en el botón 'SOLICITAR BENEFICIO' y selecciona al beneficiario/a de la solicitud."
          />
          <RegistrationStep 
            number={3} 
            title="Selección del Curso" 
            description="Completa los datos solicitados y selecciona el curso al cual deseas inscribirte (un formulario por solicitante por curso)."
          />
          <RegistrationStep 
            number={4} 
            title="Pre-inscripción" 
            description="Una vez completo y enviado, recibirás un mail de recepción a tu solicitud de pre-inscripción."
          />
          <RegistrationStep 
            number={5} 
            title="Confirmación Presencial" 
            description="Debes dirigirte personalmente a la sede correspondiente dentro de las 72 hs. hábiles con fotocopia del DNI y carnet de afiliado/a SEC para confirmar la vacante."
          />
          <RegistrationStep 
            number={6} 
            title="Inscripción Finalizada" 
            description="Una vez presentada la documentación y abonada la matrícula/cuota cooperadora, recibirás un mail de confirmación final."
          />
        </div>
      </div>

      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 animate-slide-up animation-delay-400">
        <h3 className="flex items-center gap-2 text-xl font-bold text-orange-800 mb-4">
          <FileText className="text-orange-600" />
          Documentación a presentar
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 size={18} className="mt-1 text-green-600" />
            Carnet de afiliado/a SEC, con cuota al día.
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 size={18} className="mt-1 text-green-600" />
            Fotocopia del DNI. Para extranjeros, fotocopia del pasaporte o precaria.
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 size={18} className="mt-1 text-green-600" />
            ¡Revisá si el curso solicita documentación adicional en los requisitos!
          </li>
        </ul>
      </div>
    </div>
  );
};

const MapModal = ({ sede, onClose }: { sede: { name: string, mapQuery: string } | null, onClose: () => void }) => {
  if (!sede) return null;

  const mapSrc = `https://maps.google.com/maps?width=100%25&height=600&hl=es&q=${encodeURIComponent(sede.mapQuery)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl animate-slide-up relative" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-900 p-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <MapPin className="text-orange-400" />
            {sede.name}
          </h3>
          <button onClick={onClose} className="hover:bg-blue-800 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full bg-gray-100">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src={mapSrc}
            title={`Mapa ${sede.name}`}
            className="absolute inset-0"
          >
          </iframe>
        </div>
        <div className="p-4 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

const SedesView = () => {
  // Use mapQuery from constants since types might not be updated yet in local scope but are in constants
  const [selectedSede, setSelectedSede] = useState<{ name: string, mapQuery: string } | null>(null);

  // Extend SEDES type locally for this component to include mapQuery if needed, 
  // but assuming constants.ts is updated, we access it directly.
  const sedesWithMap = SEDES.map(s => ({...s, mapQuery: (s as any).mapQuery || s.address + ", CABA, Argentina"}));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Sedes</h2>
        <p className="text-gray-600">Acércate a la sede más cercana para confirmar tu inscripción o realizar consultas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up animation-delay-200">
        {sedesWithMap.map((sede, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-transparent hover:border-orange-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className={`h-2 w-full ${sede.color}`}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{sede.name}</h3>
              <div className="flex items-start gap-3 mb-3 text-gray-600">
                <MapPin className="mt-1 flex-shrink-0 text-gray-400" size={18} />
                <p>{sede.address}</p>
              </div>
              <div className="flex items-start gap-3 mb-6 text-gray-600">
                <Phone className="mt-1 flex-shrink-0 text-gray-400" size={18} />
                <p className="text-sm">{sede.contact}</p>
              </div>
              
              <button 
                onClick={() => setSelectedSede(sede)}
                className="flex items-center justify-center gap-2 w-full py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group"
              >
                <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                Ver Ubicación en Mapa
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-900 text-white rounded-2xl p-8 text-center animate-slide-up animation-delay-400 shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Horarios de Atención</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-blue-800/50 p-4 rounded-lg hover:bg-blue-800 transition-colors">
            <p className="text-orange-400 font-bold uppercase text-sm mb-1">Administración</p>
            <p className="text-xl">Lunes a Viernes de 9 a 20 hs</p>
          </div>
          <div className="bg-blue-800/50 p-4 rounded-lg hover:bg-blue-800 transition-colors">
            <p className="text-orange-400 font-bold uppercase text-sm mb-1">Verano (Ene-Feb)</p>
            <p className="text-xl">Lunes a Viernes de 12 a 18 hs</p>
          </div>
        </div>
      </div>

      <MapModal sede={selectedSede} onClose={() => setSelectedSede(null)} />
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedArea, setSelectedArea] = useState<AreaType | 'Todas'>('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    // Helper function for accent-insensitive search
    const normalizeText = (text: string) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    return COURSES.filter(course => {
      const matchesArea = selectedArea === 'Todas' || course.area === selectedArea;
      
      const term = normalizeText(searchTerm);
      const matchesSearch = 
        normalizeText(course.title).includes(term) || 
        normalizeText(course.content).includes(term) ||
        normalizeText(course.requirements).includes(term) || // Added requirements search
        normalizeText(course.duration).includes(term);       // Added duration search

      return matchesArea && matchesSearch;
    });
  }, [selectedArea, searchTerm]);

  const handleExplore = () => {
    setActiveTab('courses');
    window.scrollTo(0, 0);
  };

  const handleAreaClick = (area: AreaType) => {
    setSelectedArea(area);
    setActiveTab('courses');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'courses':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen animate-fade-in">
            <FilterSection 
              selectedArea={selectedArea} 
              setSelectedArea={setSelectedArea} 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up animation-delay-200">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300 animate-fade-in">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-900">No se encontraron cursos</h3>
                <p className="text-gray-500 mt-2">Intenta cambiar los filtros o el término de búsqueda.</p>
                <button 
                  onClick={() => {setSelectedArea('Todas'); setSearchTerm('');}}
                  className="mt-4 text-orange-600 font-medium hover:text-orange-700 underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        );
      case 'apply':
        return <RegistrationView />;
      case 'sedes':
        return <SedesView />;
      case 'home':
      default:
        return (
          <>
            <Hero onExplore={handleExplore} />
            
            <section id="about" className="py-16 bg-white animate-fade-in">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Capacitación para el Futuro</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Los múltiples cambios que la última década ha provocado en el ámbito de la producción y los servicios
                  generan la necesidad de nuevos conocimientos. El Sindicato Empleados de Comercio de Capital Federal
                  ofrece una respuesta acorde a las necesidades de los trabajadores, con programas actualizados año tras año.
                </p>
              </div>
            </section>

            <section className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Áreas de Formación</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  <AreaCard area={AreaType.INFORMATICA} icon={Monitor} onClick={() => handleAreaClick(AreaType.INFORMATICA)} />
                  <AreaCard area={AreaType.OFICIOS} icon={Wrench} onClick={() => handleAreaClick(AreaType.OFICIOS)} />
                  <AreaCard area={AreaType.CONTABLE} icon={Calculator} onClick={() => handleAreaClick(AreaType.CONTABLE)} />
                  <AreaCard area={AreaType.ESTETICA} icon={Scissors} onClick={() => handleAreaClick(AreaType.ESTETICA)} />
                  <AreaCard area={AreaType.ARTISTICA} icon={Palette} onClick={() => handleAreaClick(AreaType.ARTISTICA)} />
                  <AreaCard area={AreaType.TEXTIL} icon={Shirt} onClick={() => handleAreaClick(AreaType.TEXTIL)} />
                  <AreaCard area={AreaType.IDIOMAS} icon={Languages} onClick={() => handleAreaClick(AreaType.IDIOMAS)} />
                  <button 
                    onClick={handleExplore}
                    className="flex flex-col items-center justify-center p-6 bg-orange-500 rounded-xl shadow-sm hover:bg-orange-600 transition-all duration-300 text-white transform hover:-translate-y-2 hover:shadow-lg"
                  >
                    <Search size={32} className="mb-4" />
                    <h3 className="font-bold text-lg">Ver Todos</h3>
                  </button>
                </div>
              </div>
            </section>

            {/* Teacher Team Section */}
            <TeacherTeamSection />
            
            <section className="py-16 bg-blue-900 text-white text-center">
              <div className="max-w-4xl mx-auto px-4 animate-slide-up">
                <h2 className="text-3xl font-bold mb-6">¿Estás listo para empezar?</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  La inscripción es gratuita para afiliados. Asegura tu vacante hoy mismo.
                </p>
                <button 
                  onClick={() => { setActiveTab('apply'); window.scrollTo(0,0); }}
                  className="bg-white text-blue-900 font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Requisitos de Inscripción
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar activeTab={activeTab} setActiveTab={(t) => { setActiveTab(t); window.scrollTo(0,0); }} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-orange-500" />
              <span className="text-white font-bold text-lg">SEC Capacitación</span>
            </div>
            <p className="text-sm leading-relaxed">
              Secretaría de Cultura y Capacitación.<br/>
              Sindicato Empleados de Comercio de Capital Federal.<br/>
              Carlos Pérez - Subsecretario General<br/>
              Armando Cavalieri - Secretario General
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contacto General</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <Phone size={14} /> 0800-345-1120
              </p>
              <p className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <Phone size={14} /> 11-3682-6116 (Whatsapp)
              </p>
              <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail size={14} /> culturaycap@sec.org.ar
              </p>
              <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Monitor size={14} /> www.sec.org.ar
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">Youtube</a>
            </div>
            <div className="mt-6">
              <p className="text-xs">
                © 2026 Sindicato Empleados de Comercio.<br/>Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;