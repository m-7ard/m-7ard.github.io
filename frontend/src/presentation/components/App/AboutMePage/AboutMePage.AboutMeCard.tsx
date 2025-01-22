import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";

interface AboutMeCardProps {
    title: string;
    description: string;
    keywords?: string[];
}

function AboutMeCard({ title, description, keywords = [] }: AboutMeCardProps) {
    return (
        <div className="p-3 border token-default-border-color token-default-flex-col">
            <div className="token-base-text font-bold">{title}</div>
            <Divider />
            <div className="token-base-text">{description}</div>
            <Divider />
            <div className="flex flex-row gap-1 flex-wrap">
                {keywords.map((keyword, index) => (
                    <MixinButton
                        key={index}
                        options={{
                            size: "mixin-Sbutton-sm",
                            theme: "theme-Sbutton-generic-yellow",
                        }}
                    >
                        {keyword}
                    </MixinButton>
                ))}
            </div>
        </div>
    );
}

export default AboutMeCard;
