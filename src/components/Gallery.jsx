import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { motion } from "framer-motion";
import "react-photo-album/rows.css";
import Title from "./Title";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = import.meta.glob(
      "../assets/Synergia2023/*.{jpg,jpeg,png,gif}"
    );

    Promise.all(
      Object.keys(images).map((key) =>
        images[key]().then((module) => module.default)
      )
    ).then((loadedImages) => {
      const shuffledImages = loadedImages
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map((src) => {
          const width = Math.random() < 0.5 ? 800 : 600;
          const height = width === 800 ? 600 : 400;
          return {
            src,
            width,
            height,
          };
        });

      setPhotos(shuffledImages);
      setLoading(false);
    });
  }, []);

  return (
    <section className="relative p-12">
      <Title title={"Gallery"} />

      {loading ? (
        <div
          className="flex justify-center items-center h-screen"
          id="gallery"
        ></div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RowsPhotoAlbum photos={photos} />
        </motion.div>
      )}
    </section>
  );
}
