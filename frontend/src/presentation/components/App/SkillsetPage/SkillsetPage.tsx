import CoverImage from "../../reusables/CoverImage";
import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";

function Language(props: { title: string; url: string }) {
    return (
        <div className="grid gap-3 grow overflow-hidden shrink-0" style={{ gridTemplateColumns: "auto 1fr" }}>
            <CoverImage src={props.url} className="h-full aspect-square rounded overflow-hidden shrink-0" />
            <MixinButton
                options={{
                    size: "mixin-Sbutton-base",
                    theme: "theme-Sbutton-generic-green",
                }}
                hasShadow
                className="justify-center shrink-0 overflow-hidden"
            >
                <div className="truncate max-w-full">{props.title}</div>
            </MixinButton>
        </div>
    );
}

function SkillsetPage() {
    return (
        <div className="flex flex-col grow">
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Programming Languages</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="C#" url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/768px-C_Sharp_wordmark.svg.png" />
                    <Language title="Typescript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" />
                    <Language title="Javascript" url="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    <Language title="Python" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTsKBgt67g7V83MUa-6I2Ex33DrnrxBDwMw&s" />
                    <Language title="SQL" url="https://www.svgrepo.com/show/331760/sql-database-generic.svg" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Backend Frameworks</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title=".Net" url="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png" />
                    <Language title="Node.js" url="https://www.mangoitsolutions.com/wp-content/uploads/2020/11/node_js-1.png" />
                    <Language
                        title="Django"
                        url="https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png"
                    />
                    <Language title="Django REST" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWsmXDnYm0tZO_vl_yw8D6nbNDoY9tG5PPA&s" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Frontend Frameworks</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="React" url="https://litslink.com/wp-content/uploads/2021/03/iconfinder_1174949_js_react-js_logo_react_react-native_icon-1.svg" />
                    <Language title="Angular" url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Devops & Deployment</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="Git" url="https://avatars.githubusercontent.com/u/18133?s=280&v=4" />
                    <Language title="Docker" url="https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Testing</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="xUnit" url="https://avatars.githubusercontent.com/u/2092016?s=280&v=4" />
                    <Language title="Jest" url="https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png" />
                    <Language title="React Testing Library" url="https://testing-library.com/img/octopus-128x128.png" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Databases</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="MySQL" url="https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png" />
                    <Language title="MSSQL" url="https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png" />
                    <Language title="SQLite" url="https://cdn.iconscout.com/icon/free/png-256/free-sqlite-282687.png?f=webp" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Major Libraries</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language title="RxJs" url="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" />
                    <Language title="Tailwind" url="https://www.svgrepo.com/show/374118/tailwind.svg" />
                    <Language title="React Query" url="https://svgmix.com/uploads/552937-react-query-icon.svg" />
                    <Language title="Express.js" url="https://img.icons8.com/color/512/express-js.png" />
                    <Language title="Redux" url="https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png" />
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Spoken Languages</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
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
                </section>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Soft Skills</div>
                </section>
                <Divider />
                <section className="grid grid-cols-2 gap-y-1 gap-x-3 max-[520px]:grid-cols-1 overflow-hidden">
                    <Language
                        title="Problem Solving Capacity"
                        url="https://w7.pngwing.com/pngs/487/436/png-transparent-skill-negotiation-communications-training-others-miscellaneous-text-hand.png"
                    />
                    <Language title="Collaborative Mindset" url="https://www.clipartmax.com/png/middle/119-1196856_boost-your-brain-brain-logo-png.png" />
                    <Language title="Reliability & Trust" url="https://cdn-icons-png.flaticon.com/512/8365/8365256.png" />
                </section>
            </div>
        </div>
    );
}

/*
function SkillsetPage() {
    return (
        <div className="overflow-hidden">
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title"></div>
                <Divider />
                <div className="flex flex-col gap-1">
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
                <div className="token-default-title"></div>
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
                <div className="token-default-title"></div>
                <Divider />
                <div className="flex flex-col gap-1">
                    
                </div>
            </section>
        </div>
    );
}
*/
export default SkillsetPage;
