import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Menu, Search, Sun, Moon, Instagram, Linkedin, Languages, X, ChevronDown, ChevronUp, Youtube } from 'lucide-react';
import { Introduction } from './components/Introduction';
import { Equipment } from './components/Equipment';
import { Material } from './components/Material';
import { Protocols } from './components/Protocols';
import { Activities } from './components/Activities';
import { Procedures } from './components/Procedures';
import { Documentation } from './components/Documentation';
import { Closure } from './components/Closure';
import { ResumenConclusiones } from './components/ResumenConclusiones';
import { References } from './components/References';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { searchSite, type SearchResult as SiteSearchResult } from './search';

type Section = 'introduccion' | 'equipamiento' | 'material' | 'protocolos' | 'actividades' | 'procedimientos' | 'documentacion' | 'cierre' | 'resumen-conclusiones' | 'referencias';

interface SubMenuItem {
  id: string;
  label: string;
}

interface MenuItem {
  id: Section;
  label: string;
  shortLabel?: string;
  sidebarLabel?: string;
  subItems?: SubMenuItem[];
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('introduccion');
  const [selectedSubSectionId, setSelectedSubSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMenuItems, setExpandedMenuItems] = useState<Section[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedSearchResultIndex, setHighlightedSearchResultIndex] = useState(0);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<Section | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Español');

  const languages = ['Español', 'English', 'Português', 'Français', 'Italiano', 'Deutsch'];
  const searchResults = useMemo(() => searchSite(searchQuery, 8), [searchQuery]);
  const showSearchResults = isSearchOpen && searchQuery.trim() !== '';

  const menuItems: MenuItem[] = [
    { 
      id: 'introduccion', 
      label: 'Introducción',
      subItems: []
    },
    { 
      id: 'equipamiento', 
      label: 'Equipamiento',
      subItems: [
        { id: 'equipamiento-sanitario', label: 'Sanitario' },
        { id: 'equipamiento-electromedico', label: 'Electromédico' },
        { id: 'equipamiento-informatico', label: 'Informático' }
      ]
    },
    { 
      id: 'material', 
      label: 'Material',
      subItems: [
        { id: 'material-fungible', label: 'Material fungible' },
        { id: 'material-no-fungible', label: 'Material no fungible' },
        { id: 'material-preparacion', label: 'Preparación, Control y Reposición del material' }
      ]
    },
    { 
      id: 'protocolos', 
      label: 'Protocolos de Puesta en Marcha',
      shortLabel: 'Protocolos PM',
      subItems: [
        { id: 'protocolos-gammacamara', label: 'Gammacámara' },
        { id: 'protocolos-pet', label: 'PET' }
      ]
    },
    { 
      id: 'actividades', 
      label: 'Actividades',
      sidebarLabel: 'Actividades de mantenimiento',
      subItems: [
        { id: 'actividades-generador', label: 'Generador' },
        { id: 'actividades-activimetro', label: 'Activímetro' }
      ]
    },
    { 
      id: 'procedimientos', 
      label: 'Protocolos de Protección Radiológica',
      shortLabel: 'Protocolos PR',
      subItems: [
        { id: 'procedimientos-monitoreo', label: 'Monitoreo de área y contaminación' },
        { id: 'procedimientos-gestion', label: 'Gestión de residuos radioactivos' }
      ]
    },
    { 
      id: 'documentacion', 
      label: 'Documentación',
      subItems: [
        { id: 'documentacion-averias', label: 'Registro de averías e incidencias' },
        { id: 'documentacion-archivo', label: 'Archivo e informes' }
      ]
    },
    { 
      id: 'cierre', 
      label: 'Cierre',
      sidebarLabel: 'Cierre de la instalación',
      subItems: []
    },
    { 
      id: 'resumen-conclusiones', 
      label: 'Resumen y Conclusiones',
      subItems: [
        { id: 'resumen-ejecutivo', label: 'Resumen' },
        { id: 'conclusiones-finales', label: 'Conclusiones' }
      ]
    },
    { 
      id: 'referencias', 
      label: 'Referencias',
      subItems: []
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'introduccion':
        return <Introduction />;
      case 'equipamiento':
        return (
          <Equipment
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'material':
        return (
          <Material
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'protocolos':
        return (
          <Protocols
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'actividades':
        return (
          <Activities
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'procedimientos':
        return (
          <Procedures
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'documentacion':
        return (
          <Documentation
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'cierre':
        return <Closure />;
      case 'resumen-conclusiones':
        return (
          <ResumenConclusiones
            selectedSubSectionId={selectedSubSectionId}
            onBackToOverview={() => setSelectedSubSectionId(null)}
          />
        );
      case 'referencias':
        return <References />;
      default:
        return <Introduction />;
    }
  };

  const handleSectionChange = (sectionId: Section, subSectionId: string | null = null) => {
    setActiveSection(sectionId);
    setSelectedSubSectionId(
      sectionId === 'equipamiento' ||
      sectionId === 'material' ||
      sectionId === 'protocolos' ||
      sectionId === 'actividades' ||
      sectionId === 'procedimientos' ||
      sectionId === 'documentacion' ||
      sectionId === 'resumen-conclusiones'
        ? subSectionId
        : null
    );
    setIsSidebarOpen(false);
    setIsSearchOpen(false);
  };

  const handleMenuEnter = useCallback((itemId: Section, e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + 8, left: rect.left });
    setHoveredMenuItem(itemId);
  }, []);

  const handleMenuLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenuItem(null);
    }, 150);
  }, []);

  const handlePopupEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  }, []);

  const handlePopupLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenuItem(null);
    }, 150);
  }, []);

  const toggleMenuItem = (sectionId: Section) => {
    setExpandedMenuItems(prev => 
      prev.includes(sectionId) 
        ? []
        : [sectionId]
    );
  };

  useEffect(() => {
    if (!showSearchResults) {
      setHighlightedSearchResultIndex(0);
    }
  }, [showSearchResults]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!searchContainerRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearchOpen(query.trim() !== '');
    setHighlightedSearchResultIndex(0);
  };

  const handleSearchResultSelect = (result: SiteSearchResult) => {
    handleSectionChange(result.sectionId as Section, result.subSectionId ?? null);
    setSearchQuery('');
    setIsSearchOpen(false);
    setHighlightedSearchResultIndex(0);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSearchResults) {
      if (event.key === 'ArrowDown' && searchResults.length > 0) {
        event.preventDefault();
        setIsSearchOpen(true);
      }

      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedSearchResultIndex((currentIndex) =>
        Math.min(currentIndex + 1, searchResults.length - 1)
      );
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedSearchResultIndex((currentIndex) => Math.max(currentIndex - 1, 0));
    }

    if (event.key === 'Enter' && searchResults.length > 0) {
      event.preventDefault();
      handleSearchResultSelect(searchResults[highlightedSearchResultIndex] ?? searchResults[0]);
    }

    if (event.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageMenu(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Hero Background with Blue overlay */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudWNsZWFyJTIwbWVkaWNpbmUlMjByb29tJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY2NDkyMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Medicina Nuclear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3F5B6F]/95"></div>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3F5B6F]/98 backdrop-blur-sm shadow-md">
        {/* Top Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Social Icons - Left with Neon Glow */}
              <div className="flex items-center gap-4">
                <button 
                  className="text-[#FFB89A] transition-all hover:scale-110 active:scale-95"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  className="text-[#FFB89A] transition-all hover:scale-110 active:scale-95"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
                >
                  <X className="w-5 h-5" />
                </button>
                <button 
                  className="text-[#FFB89A] transition-all hover:scale-110 active:scale-95"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
                >
                  <Youtube className="w-5 h-5" />
                </button>
                <button 
                  className="text-[#FFB89A] transition-all hover:scale-110 active:scale-95"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>

              {/* Title - Center */}
              <h1 className="text-2xl font-bold text-white uppercase">
                Gestión Integral del Servicio de Medicina Nuclear
              </h1>

              {/* Controls - Right */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative" ref={searchContainerRef}>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => {
                      if (searchQuery.trim() !== '') {
                        setIsSearchOpen(true);
                      }
                    }}
                    onKeyDown={handleSearchKeyDown}
                    className="w-64 pl-10 pr-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F5B494]"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  
                  {/* Search Results Dropdown */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full mt-2 w-[28rem] max-w-[80vw] bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          {searchResults.length} resultado{searchResults.length === 1 ? '' : 's'}
                        </p>
                      </div>
                      {searchResults.map((result, index) => (
                        <button
                          key={result.id}
                          type="button"
                          onClick={() => handleSearchResultSelect(result)}
                          className={`w-full px-4 py-3 text-left border-b border-gray-100 last:border-b-0 transition-colors ${
                            highlightedSearchResultIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900">{result.title}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {result.sectionLabel}
                                {result.subSectionId ? ' · Subapartado' : ' · Sección'}
                              </p>
                            </div>
                            <span className="px-2 py-1 rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 whitespace-nowrap">
                              {result.resultType === 'reference'
                                ? 'Referencia'
                                : result.subSectionId
                                  ? 'Coincidencia'
                                  : 'Sección'}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-2 leading-relaxed">{result.excerpt}</p>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {showSearchResults && searchResults.length === 0 && (
                    <div className="absolute top-full mt-2 w-[28rem] max-w-[80vw] bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                      <p className="text-gray-700 text-sm font-medium">No se encontraron coincidencias</p>
                      <p className="text-gray-500 text-xs mt-1">
                        Prueba con términos como PET, radiofármacos, activímetro, protección radiológica o incidencias.
                      </p>
                    </div>
                  )}
                </div>

                {/* Language Selector with Neon Glow */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    className="text-[#FFB89A] transition-all hover:scale-110 active:scale-95"
                    style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
                  >
                    <Languages className="w-5 h-5" />
                  </button>
                  {showLanguageMenu && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                      {languages.map((language, index) => (
                        <button
                          key={index}
                          onClick={() => handleLanguageChange(language)}
                          className={`w-full px-4 py-2 text-left text-gray-700 text-sm hover:bg-gray-100 transition-colors ${
                            selectedLanguage === language ? 'bg-gray-100 font-semibold' : ''
                          }`}
                        >
                          {language}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg bg-white/10 text-[#F5B494] hover:bg-white/20 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6">
              {/* Hamburger Menu with Neon Glow */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg text-[#FFB89A] hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                style={{ filter: 'drop-shadow(0 0 15px rgba(255, 184, 154, 1)) drop-shadow(0 0 25px rgba(255, 184, 154, 0.8))' }}
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Horizontal Menu */}
              <nav className="flex items-center overflow-x-auto py-4 gap-2">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={(e) => handleMenuEnter(item.id, e)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button
                      onClick={() => handleSectionChange(item.id)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        activeSection === item.id
                          ? 'bg-[#F5B494] text-[#3F5B6F] font-semibold shadow-lg scale-105'
                          : 'text-[#F5B494] hover:bg-white/10 hover:scale-105 hover:shadow-md'
                      }`}
                    >
                      {item.shortLabel || item.label}
                      {item.subItems && item.subItems.length > 0 && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredMenuItem === item.id ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Popup de subopciones - posicionado fixed fuera del header */}
        {menuItems.map((item) => (
          item.subItems && item.subItems.length > 0 && hoveredMenuItem === item.id && (
            <div
              key={`popup-${item.id}`}
              className="fixed z-[100]"
              style={{
                top: popupPosition.top,
                left: popupPosition.left,
              }}
              onMouseEnter={handlePopupEnter}
              onMouseLeave={handlePopupLeave}
            >
              <div className="bg-[#2C4454] rounded-xl shadow-2xl border border-[#F5B494]/30 py-2 min-w-[220px] backdrop-blur-md"
                style={{ animation: 'popupFadeIn 0.15s ease-out' }}
              >
                <div className="px-4 py-2 border-b border-white/10 mb-1">
                  <span className="text-xs font-semibold text-[#F5B494]/60 uppercase tracking-wider">{item.label}</span>
                </div>
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => {
                      handleSectionChange(item.id, subItem.id);
                      setHoveredMenuItem(null);
                    }}
                    className="w-full text-left px-4 py-2.5 text-[#F5B494] hover:bg-[#F5B494]/15 hover:text-white text-sm transition-all duration-150 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5B494]/50"></span>
                    {subItem.label}
                  </button>
                ))}
              </div>
            </div>
          )
        ))}
      </header>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar with Blue background */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-[#3F5B6F] shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-[#F5B494] uppercase">
                  Menú
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-lg text-[#F5B494] hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    {/* Main Menu Item */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSectionChange(item.id)}
                        className={`flex-1 text-left px-4 py-3 rounded-lg transition-all ${
                          activeSection === item.id
                            ? 'bg-[#F5B494] text-[#3F5B6F] font-semibold'
                            : 'text-[#F5B494] hover:bg-white/10'
                        }`}
                      >
                        {item.sidebarLabel || item.label}
                      </button>
                      
                      {/* Toggle Submenu Button */}
                      {item.subItems && item.subItems.length > 0 && (
                        <button
                          onClick={() => toggleMenuItem(item.id)}
                          className="p-2 rounded-lg text-[#F5B494] hover:bg-white/10 transition-colors"
                        >
                          {expandedMenuItems.includes(item.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>
                    
                    {/* Submenu Items */}
                    {item.subItems && expandedMenuItems.includes(item.id) && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#F5B494]/30 pl-2">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleSectionChange(item.id, subItem.id)}
                            className="w-full text-left px-4 py-2 rounded-lg text-[#F5B494]/80 hover:text-[#F5B494] hover:bg-white/10 transition-all text-sm"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-40 min-h-screen text-white">
        <div className="max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#3F5B6F]/98 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#F5B494]">
              © 2025 Gestión Integral del Servicio de Medicina Nuclear. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-[#F5B494] hover:text-[#F5B494]/80 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-[#F5B494] hover:text-[#F5B494]/80 transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-sm text-[#F5B494] hover:text-[#F5B494]/80 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
