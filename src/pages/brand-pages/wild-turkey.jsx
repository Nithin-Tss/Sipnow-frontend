import PageHero from "../../components/PageHero.jsx";

const BRAND_NAME = "Wild Turkey";

// TODO: build out real brand content/products here, same pattern as
// JacobsCreek.jsx. Already routed at /brands/wild-turkey in App.jsx —
// no App.jsx changes needed to finish this page.
export default function WildTurkey({ onBack }) {
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
