import PageHero from "../../components/PageHero.jsx";

const BRAND_NAME = "Bundaberg Rum";

// TODO: build out real brand content/products here, same pattern as
// JacobsCreek.jsx. Already routed at /brands/bundaberg-rum in App.jsx —
// no App.jsx changes needed to finish this page.
export default function BundabergRum({ onBack }) {
  return (
    <div className="min-h-screen bg-background text-on-surface py-16 md:py-24">
      <PageHero
        onBack={onBack}
        tag="Brand"
        title={BRAND_NAME}
        description={`The ${BRAND_NAME} collection is coming soon.`}
      />
    </div>
  );
}
