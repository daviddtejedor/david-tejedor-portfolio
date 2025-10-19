
type CardSkillProps = {
    variant?: "default" | "contact";
    hasHeader?: boolean;
    title?: string;
    HeaderIcon?: React.ElementType;
    bgImage?: string;
    children?: React.ReactNode;
}

export default function CardSkill({ hasHeader, children, HeaderIcon, title, bgImage }: CardSkillProps) {

    const Header = hasHeader ? (
        <div className="flex flex-row items-center place-content-between px-2 mb-6">
            {HeaderIcon && <HeaderIcon size={28} />}
            <h4 className="font-inter font-light text-white text-right text-xs md:text-xl uppercase tracking-wide">
                {title}
            </h4>
        </div>
    ) : null;

    return (
        <div
            className="relative h-full w-full p-4 rounded-2xl border border-white/30">

            {bgImage && (
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="w-full h-full bg-cover bg-center opacity-60"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                </div>
            )}

            {Header}
            {children}
        </div>
    );
}
