import { InfoIcon } from '@/assets/InfoIcon';
import { Card } from '@/components';
import { suppliersAssets } from '@/constants';
import { Game } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import giftBox from '../assets/gift-box.png';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps<{
  games: Game[];
}> = async () => {
  const response = await fetch(
    'https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3'
  );
  const games = await response.json();
  return { props: { games } };
};

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="p-8">
      <div className="container m-auto max-w-3xl">
        <h1 className="text-center text-2xl font-bold">JUEGOS</h1>

        <div className="my-5 flex flex-wrap gap-5">
          {games?.map((game) => {
            const supplierIso = suppliersAssets[game.supplier]?.iso ?? '';
            const supplierLogo = suppliersAssets[game.supplier]?.logo ?? '';

            return (
              <Card
                key={game.name}
                image={game.src}
                {...game}
                actionButtonText="JUGAR AHORA"
                onClick={() => {
                  console.log(`Jugar ${game.name}`);
                }}
              >
                {({ showInfo, showActionButton, toggleInfo }) => (
                  <>
                    <Card.Slot position="top-left">
                      {supplierIso && (
                        <Image
                          src={supplierIso}
                          alt={game.name}
                          className="block lg:hidden"
                        />
                      )}
                      {supplierLogo && (
                        <Image
                          src={supplierLogo}
                          alt={game.name}
                          className="hidden lg:block"
                        />
                      )}
                    </Card.Slot>

                    {!showActionButton && (
                      <Card.Slot
                        role="button"
                        ariaLabel="Show game information"
                        position={`${showInfo ? 'bottom-right' : 'top-right'}`}
                        className="z-10"
                        style={{ paddingBlock: '4px' }}
                        onClick={toggleInfo}
                      >
                        <InfoIcon />
                      </Card.Slot>
                    )}

                    {!showInfo && (
                      <Card.Slot position="bottom-right">
                        <Image
                          src={giftBox}
                          alt="get bonus mood!"
                          width={19}
                          height={16}
                          className="block h-full"
                        />
                      </Card.Slot>
                    )}

                    <Card.Info
                      title={game.name}
                      info={[
                        `VERSION: ${game.info?.version}`,
                        `RTP: ${game.info?.rtp}`,
                        `VOLATILIDAD: ALTA`,
                      ]}
                    />
                  </>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
