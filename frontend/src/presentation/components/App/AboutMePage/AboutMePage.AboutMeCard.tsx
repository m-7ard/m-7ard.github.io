import MixinButton from "../../reusables/MixinButton";
import MixinCard, { MixinCardSection } from "../../reusables/MixinCard";

interface AboutMeCardProps {
    title: string;
    description: string;
    keywords?: string[];
}

function AboutMeCard({ title, description, keywords = [] }: AboutMeCardProps) {
    return (
        <MixinCard
            options={{
                size: "mixin-Scard-base",
                theme: "theme-Scard-generic-white",
            }}
            hasShadow
            hasDivide
            hasBorder
            className="min-w-[300px] max-[420px]:min-w-[0px] shrink-0 grow basis-1/3 max-[420px]:basis-1/2"
        >
            <MixinCardSection className="bg-neutral-800 text-white">
                <div className="text-lg">{title}</div>
            </MixinCardSection>
            <MixinCardSection>
                <mark className="bg-zinc-200 p-0.5">{description}</mark>
            </MixinCardSection>

            <MixinCardSection className="flex flex-row gap-1 flex-wrap">
                {keywords.map((keyword) => (
                    <MixinButton
                        key={keyword}
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-yellow",
                        }}
                        className="grow justify-center"
                    >
                        {keyword}
                    </MixinButton>
                ))}
            </MixinCardSection>
        </MixinCard>
    );
}

export default AboutMeCard;
