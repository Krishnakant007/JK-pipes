import Globe from 'react-globe.gl';

const Global = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen" id="about">
      <div className="w-full h-full flex justify-center items-center">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0, 0, 0, 0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
        />
      </div>
    </section>
  );
};

export default Global;
