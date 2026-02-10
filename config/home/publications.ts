import { LucideIcon, FileText, BookOpen, Award, Clock, CheckCircle2, Send } from 'lucide-react';

export type PublicationType = 'conference' | 'journal';
export type PublicationStatus = 'accepted' | 'in-review' | 'submitted' | 'published';

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string; // Journal or Conference name
  type: PublicationType;
  status: PublicationStatus;
  date: string;
  description: string;
  paperLink?: string;
  featured: boolean;
  doi?: string;
}

export const publications: Publication[] = [
  // =========================
  // Peer-Reviewed Journals (Published / In-Press)
  // =========================
  {
    id: 1,
    title: "Vision-audio multimodal object recognition using hybrid and tensor fusion techniques",
    authors: ["Md Redwan Ahmed", "Rezaul Haque", "SM Arafat Rahman", "Ahmed Wasif Reza", "Nazmul Siddique", "Hui Wang"],
    venue: "Information Fusion (Elsevier)",
    type: "journal",
    status: "published",
    date: "Feb 2026",
    description:
      "Audio–visual multimodal object recognition with hybrid + tensor fusion strategies designed for robust real-world performance.",
    paperLink: "https://doi.org/10.1016/j.inffus.2025.103667",
    featured: true
  },
  {
    id: 2,
    title: "Ensemble Transformer with Post-hoc Explanations for Depression Emotion and Severity Detection",
    authors: ["Sazzadul Islam", "Rezaul Haque", "Mahbub Alam Khan", "Arafath Bin Mohiuddin", "Md Ismail Hossain Siddiqui", "Zishad Hossain Limon", "Katura Gania Khushbu", "SM Masfequier Rahman Swapno", "Md Redwan Ahmed", "Abhishek Appaji"],
    venue: "iScience (Cell Press / Elsevier)",
    type: "journal",
    status: "published",
    date: "Jan 2026",
    description:
      "DepTformer-XAI-SV: ensemble transformers for depression emotion/severity detection with LIME explanations and a web app.",
    paperLink: "https://doi.org/10.1016/j.isci.2025.114605",
    featured: true
  },
  {
    id: 3,
    title: "Explainable Transformer Framework for Fast Cotton Leaf Diagnostics and Fabric Defect Detection",
    authors: ["SM Masfequier Rahman Swapno", "Anamul Sakib", "Amira Hossain", "Jesika Debnath", "Abdullah Al Noman", "Abdullah Al Sakib", "Md Redwan Ahmed", "Rezaul Haque", "Abhishek Appaji"],
    venue: "iScience (Cell Press / Elsevier)",
    type: "journal",
    status: "published",
    date: "Dec 2025",
    description:
      "Explainable transformer framework spanning agriculture (cotton leaf) and textile inspection (fabric defect) with practical interpretability.",
    paperLink: "https://doi.org/10.1016/j.isci.2025.114411",
    featured: true
  },
  {
    id: 4,
    title: "LMVT: A hybrid vision transformer with attention mechanisms for efficient and explainable lung cancer diagnosis",
    authors: ["Jesika Debnath", "Amira Hossain", "Anamul Sakib", "Hamdadur Rahman", "Rezaul Haque", "Md Redwan Ahmed", "Ahmed Wasif Reza", "SM Masfequier Rahman Swapno", "Abhishek Appaji"],
    venue: "Informatics in Medicine Unlocked (Elsevier)",
    type: "journal",
    status: "published",
    date: "2025",
    description:
      "Hybrid ViT with attention and XAI for efficient and explainable lung cancer diagnosis (deployment-oriented).",
    paperLink: "https://doi.org/10.1016/j.imu.2025.101669",
    featured: true
  },
  {
    id: 5,
    title: "Accelerated and accurate cervical cancer diagnosis using a novel stacking ensemble method with explainable AI",
    authors: ["Md Ismail Hossain Siddiqui", "Shakil Khan", "Zishad Hossain Limon", "Hamdadur Rahman", "Mahbub Alam Khan", "Abdullah Al Sakib", "SM Masfequier Rahman Swapno", "Rezaul Haque", "Ahmed Wasif Reza", "Abhishek Appaji"],
    venue: "Informatics in Medicine Unlocked (Elsevier)",
    type: "journal",
    status: "published",
    date: "2025",
    description:
      "Stacking ensemble + explainability for reliable cervical cancer diagnosis using Pap smear imaging.",
    paperLink: "https://doi.org/10.1016/j.imu.2025.101657",
    featured: true
  },
  {
    id: 6,
    title: "Hierarchical Swin Transformer Ensemble with Explainable AI for Robust and Decentralized Breast Cancer Diagnosis",
    authors: ["Md Redwan Ahmed", "Hamdadur Rahman", "Zishad Hossain Limon", "Md Ismail Hossain Siddiqui", "Mahbub Alam Khan", "Al Shahriar Uddin Khondakar Pranta", "Rezaul Haque", "SM Masfequier Rahman Swapno", "Young-Im Cho", "Mohamed S Abdallah"],
    venue: "Bioengineering (MDPI)",
    type: "journal",
    status: "published",
    date: "Jun 2025",
    description:
      "Federation-ready Swin-Transformer ensemble with post-hoc explainability for robust breast cancer diagnosis.",
    paperLink: "https://doi.org/10.3390/bioengineering12060651",
    featured: true
  },
  {
    id: 7,
    title: "Explainable deep stacking ensemble model for accurate and transparent brain tumor diagnosis",
    authors: ["Rezaul Haque", "Mahbub Alam Khan", "Hamdadur Rahman", "Shakil Khan", "Md Ismail Hossain Siddiqui", "Zishad Hossain Limon", "SM Masfequier Rahman Swapno", "Abhishek Appaji"],
    venue: "Computers in Biology and Medicine (Elsevier)",
    type: "journal",
    status: "published",
    date: "Jun 2025",
    description:
      "Explainable deep stacking ensemble for brain tumor diagnosis with transparency-focused reporting.",
    paperLink: "https://doi.org/10.1016/j.compbiomed.2025.110166",
    featured: true
  },
  {
    id: 8,
    title: "A Novel MaxViT Model for Accelerated and Precise Soybean Leaf and Seed Disease Identification",
    authors: ["Al Shahriar Uddin Khondakar Pranta", "Hasib Fardin", "Jesika Debnath", "Amira Hossain", "Anamul Haque Sakib", "Md Redwan Ahmed", "Rezaul Haque", "Ahmed Wasif Reza", "M Ali Akber Dewan"],
    venue: "Computers (MDPI)",
    type: "journal",
    status: "published",
    date: "May 2025",
    description:
      "MaxViT-based diagnostic pipeline for soybean leaf/seed diseases emphasizing efficiency and interpretability.",
    paperLink: "https://doi.org/10.3390/computers14050197",
    featured: false
  },
  {
    id: 9,
    title: "ViX-MangoEFormer: An Enhanced Vision Transformer–EfficientFormer and Stacking Ensemble Approach for Mango Leaf Disease Recognition with Explainable Artificial Intelligence",
    authors: ["Abdullah Al Noman", "Amira Hossain", "Anamul Sakib", "Jesika Debnath", "Hasib Fardin", "Abdullah Al Sakib", "Rezaul Haque", "Md Redwan Ahmed", "Ahmed Wasif Reza", "M Ali Akber Dewan"],
    venue: "Computers (MDPI)",
    type: "journal",
    status: "published",
    date: "May 2025",
    description:
      "ViT–EfficientFormer hybrid with stacking ensemble and XAI for accurate mango leaf disease recognition.",
    paperLink: "https://doi.org/10.3390/computers14050171",
    featured: false
  },
  {
    id: 10,
    title: "Advancing Early Leukemia Diagnostics: A Comprehensive Study Incorporating Image Processing and Transfer Learning",
    authors: ["Rezaul Haque", "Abdullah Al Sakib", "Md Forhad Hossain", "Fahadul Islam", "Ferdaus Ibne Aziz", "Md Redwan Ahmed", "Somasundar Kannan", "Ali Rohan", "Md Junayed Hasan"],
    venue: "BioMedInformatics (MDPI)",
    type: "journal",
    status: "published",
    date: "Apr 2024",
    description:
      "Image-processing + transfer-learning driven leukemia diagnostics with strong comparative evaluation.",
    paperLink: "https://doi.org/10.3390/biomedinformatics4020054",
    featured: false
  },
  // =========================
  // Peer-Reviewed Journals (Accepted / Under Review / Submitted)
  // =========================
    {
    id: 11,
    title:
      "Hallucination-Resistant Tri-Modal Information Fusion with a Multi-Granularity Text-Aware Multimodal LLM",
    authors: ["CredenceX AI Team"],
    venue: "Information Fusion (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Tri-modal fusion with multi-granularity alignment for hallucination-resistant multimodal LLM decision-making.",
    paperLink: "#",
    featured: true
  },
  {
    id: 12,
    title:
      "Adaptive Distribution-Aware Hybrid Transformer with Multi-Scale Tokenization for Robust Medical Image Analysis",
    authors: ["CredenceX AI Team"],
    venue: "Medical Image Analysis (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2026",
    description:
      "Distribution-aware hybrid transformer design to improve robustness under clinical domain shift.",
    paperLink: "#",
    featured: false
  },
  {
    id: 13,
    title:
      "Multi-Stage Deep Learning Pipeline for Gallbladder Disease Classification: Comparative Analysis of Baseline Models, Semi-Supervised Learning Integration, and Novel Self-Supervised Foundation Model Fusion",
    authors: ["CredenceX AI Team"],
    venue: "Medical Image Analysis (Elsevier)",
    type: "journal",
    status: "submitted",
    date: "2025",
    description:
      "A multi-stage pipeline combining baseline comparisons, SSL, and foundation-model fusion for gallbladder disease classification.",
    paperLink: "#",
    featured: false
  },
  {
    id: 14,
    title: "Semi-Supervised Learning for Calibrated and Label-Efficient Retinal Disease Identification",
    authors: ["CredenceX AI Team"],
    venue: "Knowledge-Based Systems (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Semi-supervised, calibration-aware retinal disease identification under limited-label regimes.",
    paperLink: "#",
    featured: false
  },
  {
    id: 15,
    title: "Communication-Aware Federated Self-Supervised Learning for Intelligent IoT Intrusion Detection System",
    authors: ["CredenceX AI Team"],
    venue: "Knowledge-Based Systems (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Communication-aware federated SSL framework for scalable IoT intrusion detection under bandwidth constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 16,
    title:
      "Aspect-Aware Multimodal Sentiment Analysis of E-Commerce Reviews via Contrastive Graph Fusion for Business Intelligence",
    authors: ["CredenceX AI Team"],
    venue: "Information Sciences (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Contrastive graph fusion for aspect-aware multimodal sentiment slopes in e-commerce business intelligence.",
    paperLink: "#",
    featured: false
  },
  {
    id: 17,
    title:
      "Efficient and Robust Transformer-Based Facial Screening for Explainable Autism Spectrum Disorder Identification",
    authors: ["CredenceX AI Team"],
    venue: "Array (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Efficiency-driven transformer facial screening pipeline with explainability for ASD identification.",
    paperLink: "#",
    featured: false
  },
  {
    id: 18,
    title:
      "LightVTD: Lightweight Explainable Vision Transformer with Multi-Path Token Fusion for Drowsiness Detection",
    authors: ["AL RAFY", "Md Najmul Gony", "Md Mashfiquer Rahman", "Mohammad Shahadat Hossain", "Sd Maria Khatun Shuvra", "Rezaul Haque", "Md. Redwan Ahmed", "S M Masfequier Rahman Swapno", "Tahani Jaser Alahmadi", "Mohammad Ali Moni"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "accepted",
    date: "2025",
    description:
      "Lightweight explainable ViT with multi-path token fusion for early drowsiness detection in safety-critical scenarios.",
    paperLink: "#",
    featured: true
  },
  {
    id: 19,
    title: "Facial Emotion Recognition Using Deep Learning to Identify Problems Related to Mental Health",
    authors: ["CredenceX AI Team"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Deep learning facial emotion recognition aimed at mental health screening signals with robust evaluation.",
    paperLink: "#",
    featured: false
  },
  {
    id: 20,
    title:
      "MaizeFormerX: An Explainable and Lightweight Vision Transformer with Dual-Scale Architecture for Early Detection of Maize Leaf Disease",
    authors: ["AL RAFY", "Md Najmul Gony", "Md Mashfiquer Rahman", "Mohammad Shahadat Hossain", "Sd Maria Khatun Shuvra", "Rezaul Haque", "Md. Redwan Ahmed", "S M Masfequier Rahman Swapno", "Tahani Jaser Alahmadi", "Mohammad Ali Moni"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "accepted",
    date: "2025",
    description:
      "Explainable, lightweight dual-scale ViT architecture for maize leaf disease identification under field-like conditions.",
    paperLink: "#",
    featured: false
  },
  {
    id: 21,
    title:
      "Goldenhar Syndrome Detection with OD-Mamba Backbone for Explainable Rare Craniofacial Disorder Diagnosis",
    authors: ["CredenceX AI Team"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "OD-Mamba backbone for explainable rare craniofacial disorder diagnosis (Goldenhar syndrome).",
    paperLink: "#",
    featured: false
  },
  {
    id: 22,
    title:
      "Fin-TweetX: Multimodal Fusion for Stock Price Movement Prediction via Twitter Sentiment and Technical Indicators",
    authors: ["CredenceX AI Team"],
    venue: "Applied Soft Computing (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Multimodal fusion of social sentiment and technical indicators for stock movement prediction under noise/drift.",
    paperLink: "#",
    featured: false
  },
  {
    id: 23,
    title:
      "C²-SHMN: Causally-Conditioned Spiking Hyper-Meta Networks for Low-Power Event Sensing and Inertial Fusion",
    authors: ["CredenceX AI Team"],
    venue: "IEEE Access",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Causality-conditioned spiking hyper-meta networks for low-power sensing and inertial/event fusion.",
    paperLink: "#",
    featured: false
  },
  {
    id: 24,
    title:
      "Explainable Token-Fusion Transformer for Early Drowsiness State Recognition in Safety-Critical Systems",
    authors: ["CredenceX AI Team"],
    venue: "Array (Elsevier)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Token-fusion transformer for early drowsiness state recognition with explainability and safety-critical constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 25,
    title: "Explainable AI-Driven Hybrid Deep Learning Framework for Accurate Skin Cancer Diagnosis",
    authors: ["Abdullah Al Sakib", "S M Masfequier Rahman Swapno", "Fahim Ahamed", "Arafath Bin Mohiuddin", "Md Imranul Hoque Bhuiyan", "Shakil Khan", "Katura Gania Khushbu","Rezaul Haque", "Tahani Jaser Alahmadi", "Mohammad Ali Moni"],
    venue: "Digital Health (Sage)",
    type: "journal",
    status: "accepted",
    date: "2025",
    description:
      "Hybrid deep learning skin cancer diagnosis framework emphasizing explainability and clinically aligned reporting.",
    paperLink: "#",
    featured: false
  },

  // =========================
  // Conference Papers (Selected / Presented)
  // =========================
  {
  id: 26,
  title: "Efficient Web-Based Automated Poultry Disease Detection Using Transfer Learning Models",
  authors: [
    "Md Redwan Ahmed",
    "Md Ariful Islam",
    "Anamul Sakib",
    "Md Nuruzzaman Pranto",
    "Md Alamin",
    "Umashankar Rawat",
    "Pronaya Bhattacharya",
    "Ravinder Kumar"
  ],
  venue: "INCIP 2025",
  type: "conference",
  status: "published",
  date: "2025",
  description:
    "Web-based poultry disease detection using transfer learning for real-time screening.",
  paperLink: "https://doi.org/10.1109/INCIP64058.2025.11019323",
  featured: false
},
{
  id: 27,
  title: "Hybrid Vision Transformer Model for Accurate Prostate Cancer Classification in MRI Images",
  authors: [
    "Jesika Debnath",
    "Arafath Bin Mohiuddin",
    "Anamul Sakib",
    "Amira Hossain",
    "Md Moniruzzaman Shanto",
    "Shamim Forhad",
    "Md Redwan Ahmed",
    "Rezaul Haque",
    "Shafiur Rahman"
  ],
  venue: "ECCE 2025",
  type: "conference",
  status: "published",
  date: "2025",
  description:
    "Hybrid ViT-based prostate cancer MRI classification with efficiency and interpretability direction.",
  paperLink: "https://doi.org/10.1109/ECCE64979.2025.11009120",
  featured: false
},
{
  id: 28,
  title: "Transformer-Based Ensemble Model for Binary and Multiclass Oral Cancer Segmentation",
  authors: [
    "Amira Hossain",
    "Anamul Sakib",
    "Jesika Debnath",
    "Md Tanvir Rahman Tarafder",
    "Sazzadul Islam",
    "Shamim Forhad",
    "Md Redwan Ahmed",
    "Rezaul Haque",
    "Shafiur Rahman"
  ],
  venue: "ECCE 2025",
  type: "conference",
  status: "published",
  date: "2025",
  description:
    "Transformer-based ensemble for oral cancer segmentation (binary + multiclass settings).",
  paperLink: "https://doi.org/10.1109/ECCE64979.2025.11009145",
  featured: false
},
{
  id: 29,
  title: "Ensemble-Based Explainable Approach for Rare Medicinal Plant Recognition and Conservation",
  authors: [
    "Shakil Khan",
    "Hamdadur Rahman",
    "Md Ismail Hossain Siddiqui",
    "Zishad Hossain Limon",
    "Mahbub Alam Khan",
    "Rezaul Haque",
    "Md Redwan Ahmed",
    "Ahmed Wasif Reza",
    "Shamim Hasnat Ripon"
  ],
  venue: "ICINT 2025",
  type: "conference",
  status: "published",
  date: "2025",
  description:
    "Explainable ensemble pipeline for rare medicinal plant recognition supporting conservation use-cases.",
  paperLink: "https://doi.org/10.1109/ICINT65528.2025.11030872",
  featured: false
},

// =========================
// 2024 Conferences
// =========================
{
  id: 30,
  title: "Towards Automated Detection of Tomato Leaf Diseases",
  authors: [
    "Md Redwan Ahmed",
    "Rezaul Haque",
    "SM Arafat Rahman",
    "Sheikh Afridi",
    "Md Fahim Faez Abir",
    "MD Forhad Hossain",
    "M Saddam Hossain Khan",
    "Md Mohsin Uddin"
  ],
  venue: "ICEEICT 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Automated tomato leaf disease detection with robust augmentation and baseline benchmarking.",
  paperLink: "https://doi.org/10.1109/ICEEICT62016.2024.10534470",
  featured: false
},
{
  id: 31,
  title: "Web Application-Based Enhanced Esophageal Disease Diagnosis in Low-Resource Settings",
  authors: [
    "Abdullah Al Masum",
    "Zishad Hossain Limon",
    "Md Ariful Islam",
    "Md Shahidur Rahman",
    "Mahbub Khan",
    "Sheikh Shemanto Afridi",
    "Md Redwan Ahmed",
    "Shafiur Rahman"
  ],
  venue: "BECITHCON 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Deployment-oriented esophageal disease diagnosis via a web application for low-resource settings.",
  paperLink: "https://doi.org/10.1109/BECITHCON64160.2024.10962580",
  featured: false
},
{
  id: 32,
  title: "Robust Phishing URL Classification Using FastText Character Embeddings and Hybrid Deep Learning",
  authors: [
    "Abdullah Al-Sakib",
    "Zishad Hossain Limon",
    "Anamul Sakib",
    "Md Nuruzzaman Pranto",
    "Md Ariful Islam",
    "Shayma Sultana",
    "Md Redwan Ahmed",
    "Shafiur Rahman"
  ],
  venue: "RAAICON 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Robust phishing URL classification using FastText character embeddings and hybrid deep learning.",
  paperLink: "https://doi.org/10.1109/RAAICON60688.2024.10527659",
  featured: false
},
{
  id: 33,
  title: "Transforming Leukemia Classification: A Comprehensive Study on Deep Learning Models for Enhanced Diagnostic Accuracy",
  authors: [
    "Jawad Hasan",
    "Kamrul Hasan",
    "Abdullah Al Noman",
    "Sayed Hasan",
    "Shayma Sultana",
    "Masum Alam Arafat",
    "Saba Amena Islam",
    "Abboy Sarker",
    "Shafiur Rahman",
    "Md Redwan Ahmed"
  ],
  venue: "PEEIACON 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Comparative leukemia classification study across deep learning baselines and practical evaluation.",
  paperLink: "https://doi.org/10.1109/PEEIACON62888.2024.10461408",
  featured: false
},
{
  id: 34,
  title: "Parasitology Unveiled: Revolutionizing Microorganism Classification Through Deep Learning",
  authors: [
    "Md Delwar Hosen",
    "Arafath Bin Mohiuddin",
    "Nayamul Sarker",
    "Md Shadman Sakib",
    "Abdullah Al Sakib",
    "Riyadot Hossain Dip",
    "Md Redwan Ahmed",
    "Rezaul Haque"
  ],
  venue: "ICEEICT 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Deep learning pipeline for microorganism classification with deployment-aware considerations.",
  paperLink: "https://doi.org/10.1109/ICEEICT62016.2024.10534532",
  featured: false
},
{
  id: 35,
  title: "Monkeypox Lesion Classification: A Transfer Learning Approach for Early Diagnosis and Intervention",
  authors: [
    "Abdullah Al Noman",
    "Hasib Fardin",
    "Gunjan Chhabra",
    "Shayma Sultana",
    "Rezaul Haque",
    "Md Redwan Ahmed",
    "Swarna Hasibunnahar",
    "Keshav Kaushik"
  ],
  venue: "IC3I 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Transfer learning pipeline for monkeypox lesion classification with early-intervention focus.",
  paperLink: "https://doi.org/10.1109/IC3I61555.2024.10628022",
  featured: false
},
{
  id: 36,
  title: "Classroom Activity Classification with Deep Learning",
  authors: [
    "Abdullah Al-Sakib",
    "Fahadul Islam",
    "Rezaul Haque",
    "Md Babul Islam",
    "Ayesha Siddiqua",
    "Mohammad Mominur Rahman"
  ],
  venue: "ICICACS 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Deep learning-based classroom activity classification with practical deployment orientation.",
  paperLink: "https://doi.org/10.1109/ICICACS60521.2024.10498187",
  featured: false
},
{
  id: 37,
  title: "Addressing Misinformation in Bengali Media: A Hybrid Deep Learning Solution",
  authors: [
    "Fuad Ibne Jashim Farhad",
    "Shah Imran",
    "Md Mehedi Hasan Santo",
    "Mahbub Khan",
    "Anamul Sakib",
    "Md Shahidur Rahman",
    "Md Ariful Islam",
    "Rezaul Haque",
    "Shafiur Rahman"
  ],
  venue: "ICCIT 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Hybrid deep learning approach for Bangla misinformation recognition and evaluation.",
  paperLink: "https://doi.org/10.1109/ICCIT64611.2024.11021803",
  featured: false
},
{
  id: 38,
  title: "A Novel Machine Learning Approach for Fast and Efficient Detection of Mango Leaf Diseases",
  authors: [
    "SM Masfequier Rahman Swapno",
    "Sm Nuruzzaman Nobel",
    "Md Babul Islam",
    "R Haque",
    "VP Meena",
    "F Benedetto"
  ],
  venue: "ICMI 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Fast mango leaf disease detection using ML baselines with deployment-friendly design choices.",
  paperLink: "https://doi.org/10.1109/ICMI60790.2024.10563243",
  featured: false
},
{
  id: 39,
  title: "A transfer learning-based computer-aided lung cancer detection system in smart healthcare",
  authors: [
    "Rezaul Haque",
    "Shyama Sultana",
    "Al Rafy",
    "Md Babul Islam",
    "Masum Alam Arafat",
    "Pronaya Bhattacharya",
    "Pushan Kumar Dutta"
  ],
  venue: "SCS 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Transfer learning-based lung cancer detection system targeting smart healthcare deployment.",
  paperLink: "https://doi.org/10.1049/icp.2025.0858",
  featured: false
},
{
  id: 40,
  title: "Data-Centric Approach for Leather Quality Control Using Advanced Vision Transformer Models",
  authors: [
    "Rezaul Haque",
    "Mahbub Khan",
    "Md Nuruzzaman Pranto",
    "Md Ariful Islam",
    "Md Babul Islam",
    "Umashankar Rawat",
    "Pronaya Bhattacharya",
    "Mahesh Jangid"
  ],
  venue: "INCIP 2024",
  type: "conference",
  status: "published",
  date: "2024",
  description:
    "Vision Transformer-based leather quality control with data-centric processing and inspection focus.",
  paperLink: "https://doi.org/10.1109/INCIP62060.2024.10503200",
  featured: false
},

// =========================
// 2023 Conferences
// =========================
{
  id: 41,
  title: "Improving Drug Review Categorization Using Sentiment Analysis and Machine Learning",
  authors: [
    "Rezaul Haque",
    "Piyush Kumar Pareek",
    "Md Babul Islam",
    "Ferdaus Ibne Aziz",
    "Swakshar Das Amarth",
    "Katura Gania Khushbu"
  ],
  venue: "ICDSNS 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Drug review categorization via sentiment analysis and classical/deep learning baselines.",
  paperLink: "https://doi.org/10.1109/ICDSNS57398.2023.10122851",
  featured: false
},
{
  id: 42,
  title: "Deep Learning for Multi Labeled Cyberbully Detection: Enhancing Online Safety",
  authors: [
    "Naimul Islam",
    "Rezaul Haque",
    "Piyush Kumar Pareek",
    "Md Babul Islam",
    "Imam Hossain Sajeeb",
    "Mahedi Hassan Ratul"
  ],
  venue: "ICDSNS 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Multi-label cyberbully detection using deep learning and robust text preprocessing.",
  paperLink: "https://doi.org/10.1109/ICDSNS57398.2023.10122695",
  featured: false
},
{
  id: 43,
  title: "Bengali Emotion Classification Using Hybrid Deep Neural Network",
  authors: [
    "Rezaul Haque",
    "Md Babul Islam",
    "Katura Gania Khushbu",
    "Shafiur Rahman",
    "Awan Ur Rahman",
    "Md Helal Hossen",
    "Tanbin Islam Rohan"
  ],
  venue: "AIKIIE 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Hybrid deep neural network for Bengali emotion classification under real-world noise patterns.",
  paperLink: "https://doi.org/10.1109/AIKIIE60179.2023.10206268",
  featured: false
},
{
  id: 44,
  title: "Deep Learning-Based Left Ventricular Ejection Fraction Estimation from Echocardiographic Videos",
  authors: [
    "Shafiur Rahman",
    "Rezaul Haque",
    "SM Masfequier Rahman Swapno",
    "Md Babul Islam",
    "SM Nuruzzaman Nobel"
  ],
  venue: "EASCT 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Echocardiographic video modeling for LVEF estimation using deep learning.",
  paperLink: "https://doi.org/10.1109/EASCT63067.2023.10416263",
  featured: false
},
{
  id: 45,
  title: "Scientific Article Classification: Harnessing Hybrid Deep Learning Models for Knowledge Discovery",
  authors: [
    "Rezaul Haque",
    "BD Parameshachari",
    "Md Kamrul Hasan",
    "Ahsanul Hoque Sakib",
    "Awan Ur Rahman",
    "Md Babul Islam"
  ],
  venue: "AIKIIE 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Hybrid deep learning for scientific article classification and knowledge discovery workflows.",
  paperLink: "https://doi.org/10.1109/AIKIIE60179.2023.10206358",
  featured: false
},

// =========================
// Earlier Conference Papers
// =========================
{
  id: 46,
  title: "Alzheimer Disease Classification Using Deep Neural Network",
  authors: [
    "Rezaul Haque",
    "Md Babul Islam",
    "Gunjan Chhabra",
    "Smita Sharma",
    "Keshav Kaushik",
    "Md Delwar Hosen",
    "Riyadot Hossain Dip"
  ],
  venue: "UPCON 2023",
  type: "conference",
  status: "published",
  date: "2023",
  description:
    "Deep neural network-based Alzheimer disease classification with baseline comparisons.",
  paperLink: "https://doi.org/10.1109/UPCON59197.2023.10434764",
  featured: false
},



  // =========================
  // Conferences Under Review
  // =========================
  {
    id: 47,
    title: "BASFL-IDS: Bandwidth-Aware Federated Self-Supervised Learning for IoT Intrusion Detection",
    authors: ["CredenceX AI Team"],
    venue: "ICML",
    type: "conference",
    status: "submitted",
    date: "2026",
    description:
      "Bandwidth-aware federated SSL for scalable IoT IDS under communication constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 48,
    title: "Multi-Level Domain Adaptation with Prompts, Adapters, and Sparse Experts for Intraoral Imaging",
    authors: ["CredenceX AI Team"],
    venue: "ICML",
    type: "conference",
    status: "submitted",
    date: "2026",
    description:
      "Prompt/adaptor/sparse-expert based domain adaptation for robust intraoral imaging performance.",
    paperLink: "#",
    featured: false
  },
  {
    id: 49,
    title: "Explainable Transformer-Based Models for Land Use and Land Cover Classification",
    authors: ["CredenceX AI Team"],
    venue: "PEEIACON 2025",
    type: "conference",
    status: "accepted",
    date: "2025",
    description:
      "Explainable transformer pipelines for land use/land cover classification with trustworthiness reporting.",
    paperLink: "#",
    featured: false
  },
  {
    id: 50,
    title: "Capturing Cross-Product Dependencies with a Hybrid Transformer for Supply Chain Demand Forecasting",
    authors: ["CredenceX AI Team"],
    venue: "BECITHCON 2025",
    type: "conference",
    status: "accepted",
    date: "2025",
    description:
      "Hybrid transformer for demand forecasting with explicit modeling of cross-product dependencies.",
    paperLink: "#",
    featured: false
  }
];


// Helper function to get featured publications
export function getFeaturedPublications(): Publication[] {
  return publications.filter(pub => pub.featured);
}

// Helper function to get publications by status
export function getPublicationsByStatus(status: PublicationStatus): Publication[] {
  return publications.filter(pub => pub.status === status);
}

// Helper function to get publications by type
export function getPublicationsByType(type: PublicationType): Publication[] {
  return publications.filter(pub => pub.type === type);
}

// Status configuration with icons and colors
export const statusConfig: Record<PublicationStatus, { icon: LucideIcon; label: string; color: string }> = {
  published: {
    icon: CheckCircle2,
    label: 'Published',
    color: 'text-green-600 dark:text-green-400'
  },
  accepted: {
    icon: Award,
    label: 'Accepted',
    color: 'text-blue-600 dark:text-blue-400'
  },
  'in-review': {
    icon: Clock,
    label: 'In Review',
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  submitted: {
    icon: Send,
    label: 'Submitted',
    color: 'text-purple-600 dark:text-purple-400'
  }
};

// Type configuration with icons
export const typeConfig: Record<PublicationType, { icon: LucideIcon; label: string }> = {
  conference: {
    icon: FileText,
    label: 'Conference'
  },
  journal: {
    icon: BookOpen,
    label: 'Journal'
  }
};
