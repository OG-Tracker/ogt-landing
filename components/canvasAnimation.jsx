import React, { useEffect } from 'react';
import { loadParticles } from 'tsparticles';
import 'tsparticles/polygonMask';


const ParticlesComponent = () => {
  useEffect(() => {
    const initParticles = async () => {
      await loadParticles();

      tsParticles.load({
        // Your tsParticles configuration goes here
      });
    };

    initParticles();
  }, []);

  return (
    <div>
      <div id="tsparticles"></div>
      <div className="github">
        <a href="https://github.com/tsparticles/tsparticles" title="Find more info on GitHub">
          <img src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="" />
          <span>Made with tsParticles</span>
        </a>
        {/* Additional GitHub buttons */}
      </div>
    </div>
  );
};

export default ParticlesComponent;
