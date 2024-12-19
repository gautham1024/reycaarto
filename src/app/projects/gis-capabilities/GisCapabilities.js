import React, { useState } from 'react';
import { ChevronDown, X, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion'

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-4">
          <img src={src} alt={alt} className="w-full h-auto" />
          <p className="mt-2 text-center text-gray-600 text-sm">{alt}</p>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <h2 className="text-xl font-bold text-gray-800 my-6 pb-2 border-b-2 border-blue-500">
    {title}
  </h2>
);

const ProcessStep = ({ children }) => (
  <li className="flex items-start space-x-2 mb-3">
    <span className="text-blue-500 font-bold">•</span>
    <span className="text-gray-700 text-justify">{children}</span>
  </li>
);

const ExpandableSection = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const ImageCard = ({ src, alt, onClick }) => (
  <div className="relative group cursor-pointer" onClick={onClick}>
    <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-sm" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center rounded-lg">
      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <p className="mt-2 text-sm text-gray-600 text-center">{alt}</p>
  </div>
);

const GisCapabilities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          GIS Capabilities
        </h1>
      <ExpandableSection title="Cartographic Mapping" defaultExpanded={false}>
      <ImageCard
          src="/images/project-images/gisprojects/gisimg1.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg1.jpg",
          
          })}
        />
        <SectionHeader title="Description"></SectionHeader>
        <ul className="space-y-2 mb-6">
          <ProcessStep>Provided Orthophotos were downloaded and 2D sample cartographic map has been prepared with visible features on the Orthophoto.  We have selected a sample pilot area from 4 Orthophoto (refer the sample DGN file and Screen capture). Different features have been restituted and the final file is in DGN format.</ProcessStep>
          <ProcessStep>Different types of roads like Highways, primary roads and local roads has been captured  by following cartographic rules like paralallity and  center lines for major roads also represented. Footpaths have been represent with different symbology. Paint lines of directions have been represented.</ProcessStep>
          <ProcessStep>Buildings and Urban lots have been represented using different layers and also followed the cartographic rules like orthogonolity and clockwise direction while in digitization of each and every feature. Generic construction areas also been represented in this sample map. Buildings and urban lots.</ProcessStep>
          <ProcessStep>Vegetation areas have been represented by delineating them in to different categories like grassland, irrigation crop, Dry crop and thicket. We also represented some utilities like street lights. Isolated tree also have been represented by using relevant symbols.</ProcessStep>
        </ul>
      </ExpandableSection>


      <ExpandableSection title="Georeferencing-Orthorectification-digitalization and Attribute addition" defaultExpanded={false}>
      <ImageCard
          src="/images/project-images/gisprojects/gisimg2.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg2.jpg",
          
          })}
        />
        <SectionHeader title="Description"></SectionHeader>
        <ul className="space-y-2 mb-6">
          <ProcessStep>The primary objective of this project is to monitor the change in spatial distribution of land use and land cover with the help of satellite imagery in for four different regions. This was achieved by preparing the digital land use and land cover maps with their attributes. Satellite data from different sensors (Optical and MTC) were used. It also includes the updating of these four zones by incorporating the changes periodically.</ProcessStep>
          <ProcessStep>The project area is quite big it consists of urban, rural, towns and villages. In this area, we have captured the outline of the built-up area and few other classes like buildings, roads, tracks, rivers, lakes, Bare-Earth, agriculture, pasture and vegetation. The final output is ESRI’s shape file with attributes. Mapping has been done in different scales (1:10000, 1:30000, 1:50000).</ProcessStep>
        </ul>

        <SectionHeader title="Project Area Details"></SectionHeader>
        <ul className="space-y-2 mb-6">
        <ProcessStep>ROI_1 : 3820 sq km</ProcessStep>
        <ProcessStep>ROI_2 : 4165 sq km</ProcessStep>
        <ProcessStep>ROI_3 : 1531 sq km</ProcessStep>
        <ProcessStep>ROI_4 : 2536 sq km</ProcessStep>
        </ul>

        <SectionHeader title="Inputs Received"></SectionHeader>
        <ul className="space-y-2 mb-6">
        Satellite images from different sensors(optical and MTC)
        </ul>
        <ImageCard
          src="/images/project-images/gisprojects/gisimg3.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg3.jpg",
          
          })}
        />

        <SectionHeader title="Methodology for Digital Map Generation:"></SectionHeader>
        <ul className="space-y-2 mb-6">
        <ProcessStep>We have followed the below mentioned work flow to generate the Digital thematic map with attributes.</ProcessStep>
        <ProcessStep>Received satellite images were georefence and orthorectifed with reference ground control points (or with respect to master map) and GDEM.</ProcessStep>
        <ProcessStep>We have prepared a feature code table (menu in cad software) with the required features as per the specifications.</ProcessStep>
        <ProcessStep>Orthorectified images were opened in CAD software.</ProcessStep>
        <ProcessStep>All the required featured were digitized with the help of pre defined menu.</ProcessStep>
        <ProcessStep>Finally features were coded for attributes purpose.</ProcessStep>
        <ProcessStep>After completion of digitization the data was cleaned to build the topology.</ProcessStep>
        <ProcessStep>Finally required attributes were attached using the existing codes in the data.</ProcessStep>
        </ul>

        <ImageCard
          src="/images/project-images/gisprojects/gisimg4.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg4.jpg",
          
          })}
        />

<SectionHeader title="Deliverables"></SectionHeader>
<SectionHeader title="Ortho-Rectified Image"></SectionHeader>
Digital maps in ERSI Shapes with non-spatial(attributes) data attached.<br></br>

<ImageCard
          src="/images/project-images/gisprojects/gisimg5.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg5.jpg",
          
          })}
        /><br></br>

        Example 1: Map Generated from Optical Images
        <ImageCard
          src="/images/project-images/gisprojects/gisimg6.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg6.jpg",
          
          })}
        /><br></br>

        Example 2: Sample Digital Land use map generated from MTC images
        <ImageCard
          src="/images/project-images/gisprojects/gisimg7.jpg"
    
          onClick={() => setSelectedImage({
            src: "/images/project-images/gisprojects/gisimg7.jpg",
          
          })}
        />

      </ExpandableSection>


      

      {/* Image Modal */}
      <ImageModal
        src={selectedImage?.src}
        alt={selectedImage?.alt}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default GisCapabilities;