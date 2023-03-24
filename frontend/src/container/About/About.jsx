import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import useQuery from "../../hooks/useQuery";
import { sanityQueries } from '../../constants'

import "./About.scss";

const About = () => {
  const abouts = useQuery(sanityQueries.aboutsQuery);
  return (
    <>
      <h2 className="head-text">
        Sé que un<span> Buen Desarrollo</span>
        <br />
        significa<span> Buenas Aplicaciones</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  "sobre mi",
  'app__whitebg'
  );
