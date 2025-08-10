import Image from 'next/image';
import centauro from '../../public/images/centauro.png'
import unimed from '../../public/images/unimed.png'
import hering from '../../public/images/hering.png'
import fastshop from '../../public/images/fastshop.png'

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-16 px-5 bg-background">
      <p className="text-lg font-medium text-center">
        Usado por <span className="text-green-600">500+</span> empresas no Brasil
      </p>

      <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
        {/* Centauro */}
        <Image src={centauro} alt="Centauro" className="w-5/6 max-w-[160px] h-auto" loading="lazy" />

        {/* Petz */}
        <Image src={unimed} alt="Unimed" className="w-5/6 max-w-[160px] h-auto" loading="lazy" />

        {/* Fast Shop */}
        <Image src={hering} alt="Hering" className="w-5/6 max-w-[140px] h-auto" loading="lazy" />

        {/* Camicado */}
        <Image src={fastshop} alt="Fastshop" className="w-5/6 max-w-[100px] h-auto" loading="lazy" />

      </div>
    </section>
  );
};

export default Logos;
