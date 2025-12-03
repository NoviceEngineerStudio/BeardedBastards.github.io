import type { TranslationFileKey } from "../utils/content/translation";

import ASHLEY from "../assets/images/ashley_deployment.webp";

interface Service {
    preview_image: ImageMetadata;
    name_translation_key: TranslationFileKey["services"];
    description_translation_key: TranslationFileKey["services"];
};

const services: Service[] = [
    {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }, {
        preview_image: ASHLEY,
        name_translation_key: "example_title",
        description_translation_key: "example_description"
    }
];

export { type Service };
export default services;