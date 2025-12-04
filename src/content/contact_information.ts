import email_icon from "../assets/icons/email.svg";
import phone_icon from "../assets/icons/phone.svg";

interface ContactInformation {
    icon: ImageMetadata;
    information: string;
    href: string;
};

const contact_information: ContactInformation[] = [
    {
        icon: email_icon,
        information: "ashley.riggle1@icloud.com",
        href: "mailto:ashley.riggle1@icloud.com"
    }, {
        icon: phone_icon,
        information: "(405) 827-6387",
        href: "tel:+14058276387"
    }
];

export { type ContactInformation };
export default contact_information;