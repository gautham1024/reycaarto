import React, { useState } from 'react';
import { ChevronDown, X, ZoomIn } from 'lucide-react';

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

const LidarCapabilities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          LiDAR Capabilities
        </h1>
      <ExpandableSection title="Filtering, Classification and DTM-DSM Generation of Airborne LiDAR data" defaultExpanded={false}>
        {/* Project Area Standards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Project Area Standard I</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Area</span>
                <span>161000 Sq Km.</span>
              </div>
              <div className="flex justify-between">
                <span>Point densities</span>
                <span>15 pts/m²</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Project Area Standard II</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Area</span>
                <span>4300 Sq Km.</span>
              </div>
              <div className="flex justify-between">
                <span>Point densities</span>
                <span>45 pts/m²</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products to Deliver */}
        <SectionHeader title="Products to Deliver" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>Product 1: Point cloud classify of Standard I area</ProcessStep>
          <ProcessStep>Product 2: Point cloud classify of Standard II area</ProcessStep>
          <ProcessStep>Product 3: DTM format GRID (1m × 1m)</ProcessStep>
          <ProcessStep>Product 4: DSM format GRID 1m × 1m for Area Standard I</ProcessStep>
          <ProcessStep>Product 5: DSM format GRID 0.5m × 0.5m for Area in Standard II</ProcessStep>
        </ul>

        {/* LiDAR Data Preparation */}
        <SectionHeader title="LiDAR Data Preparation" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>Project setup has been done by using client provided LAS tiles and boundaries with their respective names.</ProcessStep>
          <ProcessStep>LiDAR point cloud has been filtered by running the pre-defined macros on the whole project.</ProcessStep>
          <ProcessStep>LiDAR point cloud has been filtered by running the pre-defined maxcros on the whole project. LAS tiles have been verified after filtering.</ProcessStep>
        </ul>

        {/* Classification Process */}
        <SectionHeader title="Classification of LiDAR Point Cloud" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg1.jpg"
          alt="LiDAR Point Cloud Classification"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg1.jpg",
            alt: "LiDAR Point Cloud Classification"
          })}
        />
        <ul className="space-y-3 mt-4">
          <ProcessStep>Ground class finalization by removing artifacts</ProcessStep>
          <ProcessStep>Classification of bridges to building classes</ProcessStep>
          <ProcessStep>Classification of water bodies (streams, rivers, coast line)</ProcessStep>
          <ProcessStep>Recovery of valid ground points from other classes</ProcessStep>
          <ProcessStep>Classification and verification of vegetation points</ProcessStep>
          <ProcessStep>Finally ground class has been finalized by removing artifacts in ground class.</ProcessStep>
        </ul>

        {/* Quality Check */}
        <SectionHeader title="Quality Check of Classified LiDAR" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg2.jpg"
          alt="Quality Check Process"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg2.jpg",
            alt: "Quality Check Process"
          })}
        />
        <ul className="space-y-3 mt-4">
          <ProcessStep>Verification of ground points classification</ProcessStep>
          <ProcessStep>Check for missing or misclassified buildings</ProcessStep>
          <ProcessStep>Validation of vegetation height classes</ProcessStep>
          <ProcessStep>Water body classification accuracy assessment</ProcessStep>
          <ProcessStep>Final QC report generation and documentation</ProcessStep>
        </ul>
      </ExpandableSection>


      <ExpandableSection title="Powerline Corridor Mapping from Mobile LiDAR" defaultExpanded={false}>
       

        {/* Classification Process */}
        <SectionHeader title="Classification Procedure" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg3.jpg"
          alt="Classification Procedure"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg3.jpg",
            alt: "Classification Procedure"
          })}
        />
        <ul className="space-y-3 mt-4">
          <ProcessStep>Mobile LiDAR point cloud has been classified into different classes like bare Earth, Vegetation, Low points and noise by using automatic classification method.</ProcessStep>
          <ProcessStep>Bare earth and vegetation classes were verified by creating surface model.</ProcessStep>
          <ProcessStep>Then Distribution Power Lines, Secondary Lines, Utility Poles, Pole-features, Guy wires, all available Pwer Line, Secondary Line and Guy Wire attachments were manually classified into their respective classes.</ProcessStep>
        </ul>

        <SectionHeader title="Vectorization Procedure" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg4.jpg"
          alt="Vectorization Procedure"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg4.jpg",
            alt: "Vectorization Procedure"
          })}
        />
        <ul className="space-y-3 mt-4">
          <ProcessStep>Power line features has been vectorized with respect to LiDAR point cloud. Distributed power lines, Secondary lines, Guy wires and edge of roads.</ProcessStep>
          <ProcessStep>We have represented the utility Pole by placing a point at bottom and top and joined these two points with line (utility pole). Guy wire has been represented with a line by joining two attachments (top and ground).  Transformer has been represented by placing a point at its center of point cloud.</ProcessStep>
          <ProcessStep>Edge of the road has been represented by placing a line.</ProcessStep>
          <ProcessStep>Contours have been generated with automatic method using bare earth LiDAR point cloud.</ProcessStep>
          <ProcessStep>Finally the Corridor Power line mapping from Mobile LiDAR data has been produced.</ProcessStep>
        </ul>

        {/* Quality Check */}
        <SectionHeader title="Output" />
        <ul className="space-y-3 mt-4">
          <ProcessStep>Classified LiDAR data in Las format and Vecto map data in DXF/DGN Format.</ProcessStep>
        </ul>
      </ExpandableSection>


      <ExpandableSection title="3D Topographic Mapping from Terrestrial LiDAR Points Cloud" defaultExpanded={false}>
       

      <SectionHeader title="Description" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>The document describes following methodology adopted by AAM GST in processing Terrestrial LiDAR point’s data to create 3D topographic mapping and to create and update cartography data.</ProcessStep>
          <ProcessStep>Scans of Terrestrial LiDAR points cloud data received from clients in LAS format processed to classify different topographic features and utilities. Surfaces and geomorphic features further extracted from stereo pairs created in Socet-Set using LidarGrammetry, utilities are represented by symbols as per the client’s requirement and specifications.</ProcessStep>
          <ProcessStep>Following image shows few of the features those have been extracted from Terrestrial LiDAR point data to create 3D features and cartographic maps. Next are few of the utilities symbols those have been captured from LiDAR point’s data.</ProcessStep>
          
        </ul>
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg5.jpg"
          alt="Utilities Symbols"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg5.jpg",
            alt: "Utilities Symbols"
          })}
        />

    <SectionHeader title="Methodology" />
    <ul className="space-y-3 mt-4">
          <ProcessStep>1. All terrestrial LiDAR scans of Riegl VZ 400 scanner merged together for area of study as shown in following picture.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg6.jpg"
          alt="Shows merged RAW LiDAR Point Cloud"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg6.jpg",
            alt: "Shows merged RAW LiDAR Point Cloud"
          })}
        />
        </ul><br></br>

        <ul className="space-y-3 mt-4">
          <ProcessStep>2. Automatic classification carried out to classify different features as per the specification like buildings, trees, utilities etc as shown in following picture, the automatic classified points further classified manually.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg7.jpg"
          alt="Classified LiDAR Point Cloud"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg7.jpg",
            alt: "Classified LiDAR Point Cloud"
          })}
        />
        </ul><br></br>

        <ul className="space-y-3 mt-4">
          <ProcessStep>3. Features like Building outlines, doors and windows were captured in corresponding layers from classified point cloud data as shown below.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg8.jpg"
          alt="Classified LiDAR Point Cloud"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg8.jpg",
            alt: "Classified LiDAR Point Cloud"
          })}
        />
        </ul><br></br>

        <ul className="space-y-3 mt-4">
          <ProcessStep>4. Features like Roads, Sidewalks, curbs, and contours were captured from image stereo pairs created by Lidargrammtey process from classified LiDAR point cloud data.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg9.jpg"
          alt="Classified LiDAR Point Cloud and Extracted Features"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg9.jpg",
            alt: "Classified LiDAR Point Cloud and Extracted Features"
          })}
        />
        </ul><br></br>

        <ul className="space-y-3 mt-4">
          <ProcessStep>5. The trees are represented by 3D Cells from the vegetation layer at their correct location, these cells further scaled and rotated as per the actual size and shape of the trees.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg10.jpg"
          alt="In the above pictures the Sign Board was scaled to the size C and rotated by an amount of B and finally these cells were exactly positioned at location A by snapping to the corresponding LiDAR point."
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg10.jpg",
            alt: "In the above pictures the Sign Board was scaled to the size C and rotated by an amount of B and finally these cells were exactly positioned at location A by snapping to the corresponding LiDAR point."
          })}
        />
        </ul><br></br>

        <ul className="space-y-3 mt-4">
          <ProcessStep>Final output data is 3D Topographic map as shown in the image with features those are listed earlier.</ProcessStep>
          <ImageCard
          src="/images/project-images/lidarprojects/lidarimg11.jpg"
          alt="Final 3D Map from Terrestrial LiDAR Scans"
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg11.jpg",
            alt: "Final 3D Map from Terrestrial LiDAR Scans"
          })}
        />
        </ul>

        
      </ExpandableSection>


      <ExpandableSection title="LiDAR Classification of Airborne LiDAR data (AT-Ortho)" defaultExpanded={false}>

      <SectionHeader title="Description" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>Project consists of Airborne LiDAR data classification. It also includes the aerial triangulation of simultaneously acquired images and orthophoto generation by using LiDAR bare earth data as input DTM. </ProcessStep>
          <ProcessStep>It is a coastal area of 435 sq km with mountain ranges with some deeply cut drains flowing in all directions toward coast. It has cliff areas and flood plains. Rich geological formations and forest areas.</ProcessStep>
        </ul>

      <div className="bg-white rounded-lg shadow-sm p-6">
        
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>LiDAR Project Area:</span>
                <span>435 Sq Km.</span>
              </div>
              <div className="flex justify-between">
                <span>No. of images used in aerieal triangulation:</span>
                <span>1959 images at 12 micron resolution.</span>
              </div>
              <div className="flex justify-between">
                <span>GSD of Orthophoto:</span>
                <span>0.1m</span>
              </div>
            </div>
          </div>

          {/* Products to Deliver */}
        <SectionHeader title="Products to Deliver" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>Product 1: Classified LAS tiles as per specifications</ProcessStep>
          <ProcessStep>Product 2: Triangulation results of aerial images(PATM,ZI)</ProcessStep>
          <ProcessStep>Product 3: Orthophoto tiles as per the provided index.</ProcessStep>
        </ul>

        {/* LiDAR Data Preparation */}
        <SectionHeader title="LiDAR Data Preparation" />
        <ul className="space-y-2 mb-6">
          <ProcessStep>Project setup has been done by using client provided LAS tiles and boundaries with their respective names.</ProcessStep>
          <ProcessStep>FlightLine overlap has been removed in all the tiles in the block.</ProcessStep>
        </ul>


        <SectionHeader title="Classification of LiDAR Point Cloud" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg12.jpg"
        
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg12.jpg",
         
          })}
        />

         <ul className="space-y-2 mb-6">
          <ProcessStep>Recovery of valid ground points from other classes at road edges, embankments, along the streams and below vegetation areas.</ProcessStep>
          <ProcessStep>Checking and recovery for missing vegetation points from unclassified and vegetation classes and same time transfer of unwanted points to other respective classes.</ProcessStep>
          <ProcessStep>Classification of  bridges  to building classes</ProcessStep>
          <ProcessStep>Classification of water bodies (streams, rivers, coast line)</ProcessStep>
          <ProcessStep>Finally ground class has been finalized by removing artifacts in ground class.</ProcessStep>
        </ul>


        <SectionHeader title="Quality Check of Classified LiDAR data" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg13.jpg"
        
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg13.jpg",
         
          })}
        />

         <ul className="space-y-2 mb-6">
          <ProcessStep>Quality checking has been done by panning the whole tile area and by creating editable models. Wrongly classified points has been corrected.</ProcessStep>
          <ProcessStep>Ensure the Point classes as per the given List.</ProcessStep>
          <ProcessStep>Refer the  detailed Quality Check List.</ProcessStep>
        </ul>


        <SectionHeader title="Output Deliverables" />

        
        <ul className="space-y-2 mb-6">
          <ProcessStep>Classified LAS Tiles, AT Results and Orthophoto tiles of size 1K.</ProcessStep>
        </ul>
        

        <SectionHeader title="Project Flow Chart" />
        <ImageCard
          src="/images/project-images/lidarprojects/lidarimg14.jpg"
        
          onClick={() => setSelectedImage({
            src: "/images/project-images/lidarprojects/lidarimg14.jpg",
         
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

export default LidarCapabilities;