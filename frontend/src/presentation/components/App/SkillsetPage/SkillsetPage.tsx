import CoverImage from "../../reusables/CoverImage";
import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";

function Language(props: { title: string; url: string }) {
    return (
        <div className="grid gap-3" style={{ gridTemplateColumns: "auto 1fr" }}>
            <CoverImage src={props.url} className="token-avatar-default h-full aspect-square" />
            <MixinButton
                options={{
                    size: "mixin-Sbutton-sm",
                    theme: "theme-Sbutton-generic-white",
                }}
                className="justify-center"
            >
                {props.title}
            </MixinButton>
        </div>
    );
}

function SkillsetPage() {
    return (
        <div className="overflow-hidden">
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Programming Languages</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language title="C#" url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" />
                    <Language title="Typescript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" />
                    <Language title="Javascript" url="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    <Language title="Python" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTsKBgt67g7V83MUa-6I2Ex33DrnrxBDwMw&s" />
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Backend Frameworks</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language title=".Net" url="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png" />
                    <Language title="Node.js" url="https://www.mangoitsolutions.com/wp-content/uploads/2020/11/node_js-1.png" />
                    <Language
                        title="Django"
                        url="https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png"
                    />
                    <Language title="Django REST" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWsmXDnYm0tZO_vl_yw8D6nbNDoY9tG5PPA&s" />
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Frontend Frameworks</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language title="React" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                    <Language title="Angular" url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" />
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Devops & Deployment</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language title="Git" url="https://avatars.githubusercontent.com/u/18133?s=280&v=4" />
                    <Language title="Docker" url="https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png" />
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Spoken Languages</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language title="Native Spanish" url="https://static.vecteezy.com/system/resources/previews/048/410/095/non_2x/spain-flag-button-png.png" />
                    <Language title="Native German" url="https://static.vecteezy.com/system/resources/thumbnails/011/571/346/small/circle-flag-of-germany-free-png.png" />
                    <Language
                        title="Native Level English"
                        url="https://e7.pngegg.com/pngimages/1020/23/png-clipart-logo-primera-air-organization-business-english-language-british-flag-flag-logo.png"
                    />
                    <Language
                        title="N2 / Conversational Japanese"
                        url="https://static.vecteezy.com/system/resources/previews/041/446/776/non_2x/japan-national-flag-free-png.png"
                    />
                    <Language title="B2 French" url="https://cdn-icons-png.flaticon.com/512/197/197560.png" />
                    <Language
                        title="Conversational Valencian"
                        url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_the_Valencian_Community_%282x3%29.svg/1200px-Flag_of_the_Valencian_Community_%282x3%29.svg.png"
                    />
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Soft Skills</div>
                <Divider />
                <div className="flex flex-col gap-1">
                    <Language
                        title="Negotiation Skills"
                        url="https://w7.pngwing.com/pngs/487/436/png-transparent-skill-negotiation-communications-training-others-miscellaneous-text-hand.png"
                    />
                    <Language title="Collaborative Mindset" url="https://www.clipartmax.com/png/middle/119-1196856_boost-your-brain-brain-logo-png.png" />
                    <Language title="Reliability & Trust" url="https://cdn-icons-png.flaticon.com/512/8365/8365256.png" />
                </div>
            </section>
        </div>
    );
}

export default SkillsetPage;
