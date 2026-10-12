/**
 * Thamizha Construction - Master Site Configuration
 * Pure English configuration with centralized contact information.
 * Headquartered in Trichy, serving all of Tamil Nadu.
 */
export const siteConfig = {
  brand: {
    name: "Thamizha Construction",
    tagline: "Building Trust, Shaping Spaces",
    establishedYear: 2011,
    yearsOfExperience: 14,
    description: "Premier architectural planning, turnkey construction, and engineering craftsmanship across Tamil Nadu. Headquartered in Trichy with projects executed across all major cities and districts statewide.",
    serviceArea: "All Tamil Nadu Districts (Trichy, Chennai, Coimbatore, Madurai, Salem, Thanjavur, Karur, Tirunelveli & Statewide)",
  },

  contact: {
    phone: "+91 99443 51752",
    phoneDisplay: "+91 99443 51752",
    altPhone: "+91 431 276 5432",
    whatsappNumber: "9944351752",
    whatsappDisplay: "+91 99443 51752",
    email: "gokulakumar2005@gmail.com",
    address: {
      street: "No. 45, Second Cross, Salai Road, Thillai Nagar",
      city: "Tiruchirappalli (Trichy)",
      state: "Tamil Nadu",
      pincode: "620018",
      country: "India",
      landmark: "Near Shastri Towers & Rockfort View",
      full: "Head Office: No. 45, Salai Road, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018 | Projects Across All Tamil Nadu",
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Thillai+Nagar,+Tiruchirappalli,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed",
    workingHours: {
      weekdays: "Monday - Saturday: 9:00 AM – 7:30 PM",
      sunday: "Sunday: By Prior Appointment",
    },
  },

  stats: [
    { label: "Years Experience", value: 14, suffix: "+" },
    { label: "Completed Projects", value: 180, suffix: "+" },
    { label: "Sq Ft Delivered", value: 450, suffix: "K+" },
    { label: "Happy Clients", value: 220, suffix: "+" },
    { label: "Districts Served", value: 38, suffix: "" },
  ],

  services: [
    {
      id: "interior-designing",
      title: "Interior Designing",
      description: "Bespoke residential & commercial luxury interiors, modular kitchens, custom woodwork, false ceilings, and ambient illumination.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Modular kitchens with marine-grade BWR ply",
        "Designer gypsum false ceilings & ambient mood lighting",
        "Custom pooja room carpentry and wardrobe consoles",
        "Premium living and commercial space styling"
      ],
      icon: "Home",
    },
    {
      id: "drawing-2d-3d",
      title: "2D & 3D Drawing",
      description: "Precision 2D architectural CAD floor plans, photorealistic 3D external elevation renders, and virtual walkthrough modeling.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Vastu-compliant 2D architectural floor layouts",
        "Photorealistic 3D exterior elevations & textures",
        "Virtual 3D video walkthroughs and fly-throughs",
        "Detailed working drawings with cross sections"
      ],
      icon: "Compass",
    },
    {
      id: "structural-drawing",
      title: "Structural Drawing",
      description: "Engineered structural blueprints, RCC foundation designs, column-beam detailing, and seismic load compliance calculations.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Foundation excavation & footing placement layouts",
        "RCC column, beam & slab reinforcement schedules",
        "Seismic resistance & wind load compliance (IS Codes)",
        "Detailed Bar Bending Schedules (BBS) for steel"
      ],
      icon: "Layers",
    },
    {
      id: "approval-drawing",
      title: "Approval Drawing",
      description: "Statutory building plan preparation and liaising for DTCP, CMDA, and Municipal Corporation plan sanctions across Tamil Nadu.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Directorate of Town & Country Planning (DTCP) sanctions",
        "Local Municipal Corporation & CMDA building permits",
        "Tamil Nadu Combined Development & Building Rules (TNCDBR)",
        "Panchayat and DTCP layout regularization drawings"
      ],
      icon: "FileCheck2",
    },
    {
      id: "estimation",
      title: "Estimation",
      description: "Detailed Bill of Quantities (BOQ), itemized material cost breakdowns, and transparent stage-wise budget forecasting.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Item-wise Bill of Quantities (BOQ) with zero hidden fees",
        "Accurate steel, cement, sand & aggregate quantity takeoffs",
        "Milestone-based financial cash flow schedule",
        "Value engineering to optimize material expenditure"
      ],
      icon: "Calculator",
    },
    {
      id: "consulting",
      title: "Consulting",
      description: "Expert technical guidance on site feasibility, soil quality, Vastu Shastra alignment, structural safety, and material selection.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Soil test verification and foundation depth advice",
        "Authentic scientific Vastu Shastra orientation",
        "Structural stability and seismic resistance audits",
        "Contractor billing cross-check & third-party audits"
      ],
      icon: "Users",
    },
    {
      id: "labour-contract",
      title: "Labour Contract",
      description: "Skilled masons, bar benders, carpenters, plumbers, and electricians managed under experienced civil site supervisors.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Experienced civil construction workforce and masons",
        "Strict on-site safety compliance and supervision",
        "Daily site progress logs with milestone execution",
        "Quality workmanship under licensed civil engineers"
      ],
      icon: "HardHat",
    },
    {
      id: "material-contract",
      title: "Material Contract",
      description: "Direct procurement of certified high-grade materials: 53-grade cement, Fe550D TMT rebar, bricks, and electrical/plumbing fittings.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
      scope: [
        "Branded 53-grade certified cement and Fe550D steel",
        "Chamber-burnt clay bricks & tested AAC blocks",
        "Verified river sand / graded manufactured M-sand",
        "Top-tier CPVC plumbing and ISI electrical conduits"
      ],
      icon: "Package",
    },
    {
      id: "renovation-work",
      title: "Renovation Work",
      description: "Comprehensive remodeling, modern elevation retrofits, structural reinforcement, waterproofing, and space modernization.",
      image: "/images/projects/project-srirangam.jpg",
      scope: [
        "Complete architectural elevation modernization",
        "Structural retrofitting, beam repair & column strengthening",
        "Floor plan reconfiguration and space expansion",
        "Terrace waterproofing and premium wall finishes"
      ],
      icon: "RefreshCw",
    },
    {
      id: "building-maintenance",
      title: "Building Maintenance",
      description: "Preventive and corrective structural upkeep, waterproofing, exterior painting, plumbing, and electrical maintenance.",
      image: "/images/projects/project-temple.jpg",
      scope: [
        "Annual structural health and crack inspections",
        "Comprehensive terrace and bathroom waterproofing",
        "Weather-resistant exterior acrylic paint restoration",
        "Routine plumbing, drainage, and electrical maintenance"
      ],
      icon: "Wrench",
    },
  ],

  social: {
    facebook: "https://facebook.com/thamizhaconstructions",
    instagram: "https://instagram.com/thamizhaconstructions",
    linkedin: "https://linkedin.com/company/thamizhaconstructions",
    youtube: "https://youtube.com/@thamizhaconstructions",
    whatsappChat: "https://wa.me/919944351752?text=Hello%20Thamizha%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Tamil%20Nadu.",
  },
};
