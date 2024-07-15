import footerGraphic from "../assets/footer.svg";

const Footer = () => {
    return (
        <div className="relative mt-auto">
            <div className="relative w-full">
                <img src={footerGraphic} className="w-full" alt="" />
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <p className="text-navy">
                        Copyright 2024 &copy; Braincells. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
