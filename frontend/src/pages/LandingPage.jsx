import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import FeatureGrid from "../components/FeatureGrid";

export default function LandingPage() {
    return (
        <MainLayout>
            <Hero />

            <section className="body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <UploadCard />
                    </div>

                    <div className="lg:w-[450px]">
                        <FeatureGrid />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}