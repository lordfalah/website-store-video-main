import { getStores } from "@/actions/get-stores";
import { BouncyCardsFeatures } from "@/components/BouncyCardsFeatures";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const stores = await getStores();

  return (
    <Container>
      {stores.length > 0 ? (
        <BouncyCardsFeatures items={stores} />
      ) : (
        "data kosong"
      )}
    </Container>
  );
};

export default HomePage;
