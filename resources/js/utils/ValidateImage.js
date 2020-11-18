const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export default function validateImage(image) {
    if (image) {
        let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
        return SUPPORTED_FORMATS.includes(type);
    }
}
