"use client";
import Link from 'next/link';

const servicesData = [
  {
    id: 'cartography',
    title: "3-D Cartography",
    description:
      "Reycaarto specializes in delivering high-quality mapping solutions for diverse scales and regions using advanced photogrammetric and geospatial techniques.",
    images: [
      "/images/services/3d cartography/cartography-image1.jpg",
      "/images/services/3d cartography/cartography-image2.jpg",
      "/images/services/3d cartography/cartography-image3.jpg",
      "/images/services/3d cartography/cartography-image4.jpg"
    ],
  },
  {
    id: 'ariel-triangulation',
    title: "Ariel Triangulation",
    description:
      "Reycaarto excels in precise Aerial Triangulation for aerial and satellite imagery with reliable accuracy.",
    images: [
      "/images/services/ariel_triangulation/img1.jpg",
      "/images/services/ariel_triangulation/img2.jpg",
      "/images/services/ariel_triangulation/img3.jpg",
      "/images/services/ariel_triangulation/img4.jpg"
    ],
  },
  {
    id: 'dtm-dem-dsm',
    title: "DTM, DEM and DSM",
    description:
      "AAM GST delivers high-resolution Digital Terrain Models for diverse applications with precision and advanced techniques.",
    images: [
      "/images/services/dem-dtm/dtm-1.jpg",
      "/images/services/dem-dtm/dtm-2.jpg",
      "/images/services/dem-dtm/dtm-3.jpg",
      "/images/services/dem-dtm/dtm-4.jpg"
    ],
  },
  {
    id: 'gis-remote',
    title: "GIS Services/Remote Sensing",
    description:
      "Reycaarto offers comprehensive GIS and remote sensing solutions, delivering large-scale cartographic data and spatial analysis for diverse geospatial applications.",
    images: [
      "/images/services/gis_services/gis-image1.jpg",
      "/images/services/gis_services/gis-image2.jpg",
      "/images/services/gis_services/gis-image3.jpg",
      "/images/services/gis_services/gis-image4.jpg"
    ],
  },
  {
    id: 'lidar',
    title: "LiDAR Classification",
    description:
      "Reycaarto provides expert LiDAR classification and vectorization for airborne, terrestrial, and mobile data, ensuring high-quality and reliable results for various applications.",
    images: [
      "/images/services/lidar_classification/img30.jpg",
      "/images/services/lidar_classification/img31.jpg",
      "/images/services/lidar_classification/img32.jpg",
      "/images/services/lidar_classification/img33.jpg"
    ],
  },
  {
    id: 'orthophoto',
    title: "Orthophoto and Mosaicing",
    description:
      "Reycaarto delivers high-accuracy orthophotos from aerial and satellite imagery, ensuring enhanced radiometric quality and compliance with industry standards.",
    images: [
      "/images/services/orthophoto/orthophoto1.jpg",
      "/images/services/orthophoto/orthophoto2.jpg",
      "/images/services/orthophoto/orthophoto3.jpg",
      "/images/services/orthophoto/orthophoto4.jpg"
    ],
  }
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-2 p-2">
                {service.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${service.title} image ${index + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 ">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}  // Dynamic route based on service id
                  className="text-blue-600 font-medium hover:text-blue-700 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
