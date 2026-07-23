// =============================================
// LifeLink SBES
// uploadHospitals.js
// Part 1A
// Districts:
// 1. Ariyalur
// 2. Chengalpattu
// 3. Chennai
// =============================================
// ---------------------------------------------
// Hospital Database
// ---------------------------------------------

const hospitals = [

  // =====================================================
  // ARIYALUR
  // =====================================================

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "Government District Headquarters Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "ABC Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "A.S. Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "Golden Hospital Pvt. Ltd.",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "KVS Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Ariyalur",
    city: "Ariyalur",
    hospitalName: "MM Multi Speciality Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  // =====================================================
  // CHENGALPATTU
  // =====================================================

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "Chengalpattu Government Medical College Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "Medway JSP Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "Sree Renga Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "SIVA Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "Annai Arul Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chengalpattu",
    city: "Chengalpattu",
    hospitalName: "Deepam Hospital",
    type: "Private",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  // =====================================================
  // CHENNAI
  // =====================================================

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Rajiv Gandhi Government General Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Government Stanley Medical College Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Government Kilpauk Medical College Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Tamil Nadu Government Multi Super Speciality Hospital",
    type: "Government",
    nabh: "No",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Apollo Hospitals, Greams Road",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "SIMS Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "MGM Healthcare",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "MIOT International",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Kauvery Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Gleneagles Global Health City",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Dr. Mehta's Hospitals",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },

  {
    district: "Chennai",
    city: "Chennai",
    hospitalName: "Vijaya Hospital",
    type: "Private",
    nabh: "Yes",
    status: "Available",
    phone: ""
  },
  // =====================================================
// COIMBATORE
// =====================================================

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "Coimbatore Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "Government ESI Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "PSG Hospitals",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "KG Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "G. Kuppuswamy Naidu Memorial Hospital (GKNM Hospital)",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "Kongunad Hospitals",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "Royal Care Super Speciality Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "Sri Ramakrishna Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Coimbatore",
  city: "Coimbatore",
  hospitalName: "KMCH (Kovai Medical Center and Hospital)",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

// =====================================================
// CUDDALORE
// =====================================================

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Government Head Quarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Government Hospital for Thoracic Medicine, Capper Hills",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Be Well Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Cuddalore Speciality Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Kalyaan Speciality Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Cuddalore",
  city: "Cuddalore",
  hospitalName: "Krishna Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// DHARMAPURI
// =====================================================

{
  district: "Dharmapuri",
  city: "Dharmapuri",
  hospitalName: "Dharmapuri Government Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dharmapuri",
  city: "Dharmapuri",
  hospitalName: "Sri Vijay Vidyalaya Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Dharmapuri",
  city: "Dharmapuri",
  hospitalName: "BGR Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dharmapuri",
  city: "Dharmapuri",
  hospitalName: "Kumaran Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dharmapuri",
  city: "Dharmapuri",
  hospitalName: "Jaya Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// DINDIGUL
// =====================================================

{
  district: "Dindigul",
  city: "Dindigul",
  hospitalName: "Government Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dindigul",
  city: "Dindigul",
  hospitalName: "Christian Fellowship Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Dindigul",
  city: "Dindigul",
  hospitalName: "City Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dindigul",
  city: "Dindigul",
  hospitalName: "Arun Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Dindigul",
  city: "Dindigul",
  hospitalName: "NIMS Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// ERODE
// =====================================================

{
  district: "Erode",
  city: "Erode",
  hospitalName: "Government Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Erode",
  city: "Erode",
  hospitalName: "Erode Trust Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Erode",
  city: "Erode",
  hospitalName: "KMC Specialty Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Erode",
  city: "Erode",
  hospitalName: "Lotus Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Erode",
  city: "Erode",
  hospitalName: "Sudha Hospitals",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// KALLAKURICHI
// =====================================================

{
  district: "Kallakurichi",
  city: "Kallakurichi",
  hospitalName: "Government Medical College Hospital, Kallakurichi",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kallakurichi",
  city: "Kallakurichi",
  hospitalName: "Sakthi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kallakurichi",
  city: "Kallakurichi",
  hospitalName: "Sri Sanjeevi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kallakurichi",
  city: "Kallakurichi",
  hospitalName: "Annai Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kallakurichi",
  city: "Kallakurichi",
  hospitalName: "Aishwarya Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// KANCHIPURAM
// =====================================================

{
  district: "Kanchipuram",
  city: "Kanchipuram",
  hospitalName: "Government Headquarters Hospital, Kanchipuram",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kanchipuram",
  city: "Kanchipuram",
  hospitalName: "Meenakshi Medical College Hospital and Research Institute",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Kanchipuram",
  city: "Kanchipuram",
  hospitalName: "Sri Ne Medical Foundation Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Kanchipuram",
  city: "Kanchipuram",
  hospitalName: "LifeCare Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kanchipuram",
  city: "Kanchipuram",
  hospitalName: "Sai Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// KANYAKUMARI
// =====================================================

{
  district: "Kanyakumari",
  city: "Nagercoil",
  hospitalName: "Government Medical College Hospital, Kanyakumari",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kanyakumari",
  city: "Nagercoil",
  hospitalName: "Dr. Jayasekharan Medical Trust Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Kanyakumari",
  city: "Nagercoil",
  hospitalName: "Catherine Booth Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kanyakumari",
  city: "Nagercoil",
  hospitalName: "Rathna Memorial Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Kanyakumari",
  city: "Nagercoil",
  hospitalName: "Bejan Singh Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},
// =====================================================
// KARUR
// =====================================================

{
  district: "Karur",
  city: "Karur",
  hospitalName: "Government Medical College Hospital, Karur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Karur",
  city: "Karur",
  hospitalName: "Amaravathi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Karur",
  city: "Karur",
  hospitalName: "Apollo Hospital Karur",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Karur",
  city: "Karur",
  hospitalName: "K.G. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Karur",
  city: "Karur",
  hospitalName: "ABM Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// KRISHNAGIRI
// =====================================================

{
  district: "Krishnagiri",
  city: "Krishnagiri",
  hospitalName: "Government Medical College Hospital, Krishnagiri",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Krishnagiri",
  city: "Krishnagiri",
  hospitalName: "Fathima Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Krishnagiri",
  city: "Krishnagiri",
  hospitalName: "P.S. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Krishnagiri",
  city: "Krishnagiri",
  hospitalName: "Sri Sai Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Krishnagiri",
  city: "Krishnagiri",
  hospitalName: "Varun Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// MADURAI
// =====================================================

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Government Rajaji Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Velammal Medical College Hospital and Research Institute",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Apollo Speciality Hospitals",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Meenakshi Mission Hospital and Research Centre",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Devadoss Multispeciality Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Madurai",
  city: "Madurai",
  hospitalName: "Vadamalayan Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},
// =====================================================
// MAYILADUTHURAI
// =====================================================

{
  district: "Mayiladuthurai",
  city: "Mayiladuthurai",
  hospitalName: "Periyar Government District Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Mayiladuthurai",
  city: "Mayiladuthurai",
  hospitalName: "Lourdu Madha Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Mayiladuthurai",
  city: "Mayiladuthurai",
  hospitalName: "G.D. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Mayiladuthurai",
  city: "Mayiladuthurai",
  hospitalName: "Deen Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Mayiladuthurai",
  city: "Mayiladuthurai",
  hospitalName: "Madhana Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// NAGAPATTINAM
// =====================================================

{
  district: "Nagapattinam",
  city: "Nagapattinam",
  hospitalName: "Government District Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nagapattinam",
  city: "Nagapattinam",
  hospitalName: "Nagai Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nagapattinam",
  city: "Nagapattinam",
  hospitalName: "V.P.N. Eye Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nagapattinam",
  city: "Nagapattinam",
  hospitalName: "A.R. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nagapattinam",
  city: "Nagapattinam",
  hospitalName: "Karthick Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// NAMAKKAL
// =====================================================

{
  district: "Namakkal",
  city: "Namakkal",
  hospitalName: "Government Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Namakkal",
  city: "Namakkal",
  hospitalName: "Venkatesh Nursing Home",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Namakkal",
  city: "Namakkal",
  hospitalName: "Anu Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Namakkal",
  city: "Namakkal",
  hospitalName: "Aravind Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Namakkal",
  city: "Namakkal",
  hospitalName: "Jeyam Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// NILGIRIS
// =====================================================

{
  district: "Nilgiris",
  city: "Udhagamandalam",
  hospitalName: "Government Medical College Hospital, The Nilgiris",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nilgiris",
  city: "Udhagamandalam",
  hospitalName: "Government Hospital, Ooty",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nilgiris",
  city: "Coonoor",
  hospitalName: "Government Lawley Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nilgiris",
  city: "Udhagamandalam",
  hospitalName: "Dr. Indira Nambiar Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Nilgiris",
  city: "Kotagiri",
  hospitalName: "Holy Family Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// PERAMBALUR
// =====================================================

{
  district: "Perambalur",
  city: "Perambalur",
  hospitalName: "Government Headquarters Hospital, Perambalur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Perambalur",
  city: "Perambalur",
  hospitalName: "Dhanalakshmi Srinivasan Medical College and Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Perambalur",
  city: "Perambalur",
  hospitalName: "Rajalakshmi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// PUDUKKOTTAI
// =====================================================

{
  district: "Pudukkottai",
  city: "Pudukkottai",
  hospitalName: "Government Medical College Hospital, Pudukkottai",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Pudukkottai",
  city: "Pudukkottai",
  hospitalName: "Government Headquarters Hospital, Pudukkottai",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Pudukkottai",
  city: "Pudukkottai",
  hospitalName: "MVK Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Pudukkottai",
  city: "Pudukkottai",
  hospitalName: "Sudar Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// RAMANATHAPURAM
// =====================================================

{
  district: "Ramanathapuram",
  city: "Ramanathapuram",
  hospitalName: "Government Headquarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ramanathapuram",
  city: "Ramanathapuram",
  hospitalName: "CSI Dr. Jones Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ramanathapuram",
  city: "Ramanathapuram",
  hospitalName: "Jawahar Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ramanathapuram",
  city: "Ramanathapuram",
  hospitalName: "Sahayamatha Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ramanathapuram",
  city: "Ramanathapuram",
  hospitalName: "Syed Ammal Trust Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// RANIPET
// =====================================================

{
  district: "Ranipet",
  city: "Ranipet",
  hospitalName: "Government Taluk Hospital, Ranipet",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ranipet",
  city: "Ranipet",
  hospitalName: "Scudder Memorial Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ranipet",
  city: "Ranipet",
  hospitalName: "Rajeswari Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ranipet",
  city: "Ranipet",
  hospitalName: "Anjugam Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Ranipet",
  city: "Ranipet",
  hospitalName: "Rupa Nursing Home",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// SALEM
// =====================================================

{
  district: "Salem",
  city: "Salem",
  hospitalName: "Government Mohan Kumaramangalam Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Salem",
  city: "Salem",
  hospitalName: "Manipal Hospital Salem",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Salem",
  city: "Salem",
  hospitalName: "Neuro Foundation Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Salem",
  city: "Salem",
  hospitalName: "Shanmuga Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Salem",
  city: "Salem",
  hospitalName: "SKS Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},
// =====================================================
// SIVAGANGAI
// =====================================================

{
  district: "Sivagangai",
  city: "Sivagangai",
  hospitalName: "Government Medical College Hospital, Sivagangai",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Sivagangai",
  city: "Karaikudi",
  hospitalName: "Government District Headquarters Hospital, Karaikudi",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Sivagangai",
  city: "Karaikudi",
  hospitalName: "Apollo Reach Hospital, Karaikudi",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Sivagangai",
  city: "Karaikudi",
  hospitalName: "Meenakshi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TENKASI
// =====================================================

{
  district: "Tenkasi",
  city: "Tenkasi",
  hospitalName: "Government District Headquarters Hospital, Tenkasi",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tenkasi",
  city: "Tenkasi",
  hospitalName: "Meeran Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tenkasi",
  city: "Tenkasi",
  hospitalName: "Gnanam Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tenkasi",
  city: "Tenkasi",
  hospitalName: "Sakthi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// THANJAVUR
// =====================================================

{
  district: "Thanjavur",
  city: "Thanjavur",
  hospitalName: "Government Thanjavur Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Thanjavur",
  city: "Thanjavur",
  hospitalName: "Meenakshi Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Thanjavur",
  city: "Thanjavur",
  hospitalName: "Annai Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Thanjavur",
  city: "Thanjavur",
  hospitalName: "Mother Teresa Health Centre",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// THENI
// =====================================================

{
  district: "Theni",
  city: "Theni",
  hospitalName: "Government Medical College Hospital, Theni",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Theni",
  city: "Periyakulam",
  hospitalName: "Government Headquarters Hospital, Periyakulam",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Theni",
  city: "Theni",
  hospitalName: "NRT Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Theni",
  city: "Theni",
  hospitalName: "P.S. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// THOOTHUKUDI
// =====================================================

{
  district: "Thoothukudi",
  city: "Thoothukudi",
  hospitalName: "Government Medical College Hospital, Thoothukudi",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Thoothukudi",
  city: "Thoothukudi",
  hospitalName: "A.V.M. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Thoothukudi",
  city: "Thoothukudi",
  hospitalName: "Sundaram Arulraj Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Thoothukudi",
  city: "Thoothukudi",
  hospitalName: "Sacred Heart Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TIRUCHIRAPPALLI
// =====================================================

{
  district: "Tiruchirappalli",
  city: "Tiruchirappalli",
  hospitalName: "Mahatma Gandhi Memorial Government Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruchirappalli",
  city: "Tiruchirappalli",
  hospitalName: "K.A.P. Viswanatham Government Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruchirappalli",
  city: "Tiruchirappalli",
  hospitalName: "Kauvery Hospital",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Tiruchirappalli",
  city: "Tiruchirappalli",
  hospitalName: "Apollo Speciality Hospitals",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Tiruchirappalli",
  city: "Tiruchirappalli",
  hospitalName: "Maruthi Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// TIRUNELVELI
// =====================================================

{
  district: "Tirunelveli",
  city: "Tirunelveli",
  hospitalName: "Tirunelveli Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tirunelveli",
  city: "Palayamkottai",
  hospitalName: "CSI Jeyaraj Annapackiam Mission Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tirunelveli",
  city: "Tirunelveli",
  hospitalName: "Kauvery Hospital Tirunelveli",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Tirunelveli",
  city: "Palayamkottai",
  hospitalName: "Shifa Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TIRUPATHUR
// =====================================================

{
  district: "Tirupathur",
  city: "Tirupathur",
  hospitalName: "Government Hospital, Tirupathur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tirupathur",
  city: "Tirupathur",
  hospitalName: "Sundaram Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tirupathur",
  city: "Tirupathur",
  hospitalName: "L.S. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tirupathur",
  city: "Tirupathur",
  hospitalName: "Sapthagiri Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TIRUPPUR
// =====================================================

{
  district: "Tiruppur",
  city: "Tiruppur",
  hospitalName: "Government Hospital Head Quarters Tiruppur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruppur",
  city: "Tiruppur",
  hospitalName: "Revathi Medical Centre",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Tiruppur",
  city: "Tiruppur",
  hospitalName: "KMCH Specialty Hospital, Tiruppur",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Tiruppur",
  city: "Tiruppur",
  hospitalName: "Sri Kumaran Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// TIRUVALLUR
// =====================================================

{
  district: "Tiruvallur",
  city: "Tiruvallur",
  hospitalName: "District Head Quarter Government Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvallur",
  city: "Tiruvallur",
  hospitalName: "Government Hospital, Tiruttani",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvallur",
  city: "Tiruvallur",
  hospitalName: "RKB Hospitals",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvallur",
  city: "Tiruvallur",
  hospitalName: "CSI Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvallur",
  city: "Tiruvallur",
  hospitalName: "DD Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TIRUVANNAMALAI
// =====================================================

{
  district: "Tiruvannamalai",
  city: "Tiruvannamalai",
  hospitalName: "Government Medical College Hospital, Tiruvannamalai",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvannamalai",
  city: "Arni",
  hospitalName: "Government Hospital, Arni",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvannamalai",
  city: "Cheyyar",
  hospitalName: "Government Hospital, Cheyyar",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvannamalai",
  city: "Polur",
  hospitalName: "Government Hospital, Polur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// TIRUVARUR
// =====================================================

{
  district: "Tiruvarur",
  city: "Thiruvarur",
  hospitalName: "Government Thiruvarur Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvarur",
  city: "Mannargudi",
  hospitalName: "District Head Quarters Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvarur",
  city: "Thiruthuraipoondi",
  hospitalName: "Government Taluk Hospital, Thiruthuraipoondi",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Tiruvarur",
  city: "Koothanallur",
  hospitalName: "Government Taluk Hospital, Koothanallur",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},
// =====================================================
// VELLORE
// =====================================================

{
  district: "Vellore",
  city: "Vellore",
  hospitalName: "Government Hospital, Vellore",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Vellore",
  city: "Vellore",
  hospitalName: "Christian Medical College (CMC) Vellore",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Vellore",
  city: "Vellore",
  hospitalName: "Naruvi Hospitals",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

{
  district: "Vellore",
  city: "Vellore",
  hospitalName: "Sri Narayani Hospital & Research Centre",
  type: "Private",
  nabh: "Yes",
  status: "Available",
  phone: ""
},

// =====================================================
// VILUPPURAM
// =====================================================

{
  district: "Viluppuram",
  city: "Viluppuram",
  hospitalName: "Government Viluppuram Medical College Hospital",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Viluppuram",
  city: "Viluppuram",
  hospitalName: "Government Hospital, Viluppuram",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Viluppuram",
  city: "Viluppuram",
  hospitalName: "E.S. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Viluppuram",
  city: "Viluppuram",
  hospitalName: "M.M. Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

// =====================================================
// VIRUDHUNAGAR
// =====================================================

{
  district: "Virudhunagar",
  city: "Virudhunagar",
  hospitalName: "District Head Quarters Hospital, Virudhunagar",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Virudhunagar",
  city: "Virudhunagar",
  hospitalName: "Government Hospital, Aruppukottai",
  type: "Government",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Virudhunagar",
  city: "Virudhunagar",
  hospitalName: "Thiruvengadam Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
},

{
  district: "Virudhunagar",
  city: "Virudhunagar",
  hospitalName: "Dr. Lysonder Hospital",
  type: "Private",
  nabh: "No",
  status: "Available",
  phone: ""
}
]
// =====================================================
// Upload Hospitals to Firestore
// =====================================================

async function uploadHospitals() {

    try {

        let uploaded = 0;
        let skipped = 0;

        const snapshot = await db.collection("hospitals").get();

        const existingHospitals = new Set();

        snapshot.forEach((doc) => {

            const data = doc.data();

            existingHospitals.add(
                `${data.district}|${data.city}|${data.hospitalName}`
            );

        });

        for (const hospital of hospitals) {

            const key =
            `${hospital.district}|${hospital.city}|${hospital.hospitalName}`;

            if (existingHospitals.has(key)) {

                console.log("Skipped:", hospital.hospitalName);

                skipped++;

                continue;

            }

            await db.collection("hospitals").add(hospital);

            console.log("Uploaded:", hospital.hospitalName);

            uploaded++;

        }

        alert(
`✅ Upload Completed!

Uploaded : ${uploaded}

Skipped : ${skipped}`
        );

    }

    catch (error) {

        console.error(error);

        alert("❌ Upload Failed!");

    }

}

// Run Upload
uploadHospitals();